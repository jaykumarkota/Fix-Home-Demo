import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { initialServiceRequests } from '../data/mockData'

const STORAGE_KEY = 'fix-at-home-service-requests-v2'
const ServiceRequestContext = createContext(null)
const allowedTransitions = { ASSIGNED: ['ACCEPTED'], ACCEPTED: ['ON_THE_WAY'], ON_THE_WAY: ['COMPLETED', 'FAILED'] }

function loadRequests() {
  try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); return Array.isArray(saved) ? saved : initialServiceRequests } catch { return initialServiceRequests }
}

export function ServiceRequestProvider({ children }) {
  const [serviceRequests, setServiceRequests] = useState(loadRequests)
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(serviceRequests)) }, [serviceRequests])
  const createRequest = (payload) => {
    const numericId = Math.max(1024, ...serviceRequests.map(({ id }) => Number(id.replace('SR-', '')) || 0)) + 1
    const request = { ...payload, id: `SR-${numericId}`, status: 'NEW', assignedAgentId: null, assignedAgentName: null, createdAt: new Date().toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }), notes: '', completionDetails: null }
    setServiceRequests(current => [request, ...current])
    return request
  }
  const assignAgent = (id, agent) => setServiceRequests(current => current.map(request => request.id === id && request.status === 'NEW' ? { ...request, status: 'ASSIGNED', assignedAgentId: agent.id, assignedAgentName: agent.name } : request))
  const updateStatus = (id, nextStatus, extras = {}) => setServiceRequests(current => current.map(request => request.id === id && allowedTransitions[request.status]?.includes(nextStatus) ? { ...request, status: nextStatus, ...extras } : request))
  const getRequest = (id) => serviceRequests.find(request => request.id === id)
  const value = useMemo(() => ({ serviceRequests, createRequest, assignAgent, updateStatus, getRequest }), [serviceRequests])
  return <ServiceRequestContext.Provider value={value}>{children}</ServiceRequestContext.Provider>
}

export function useServiceRequests() { const context = useContext(ServiceRequestContext); if (!context) throw new Error('useServiceRequests must be used inside ServiceRequestProvider'); return context }
