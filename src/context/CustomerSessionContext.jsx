import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'fix-at-home-customer-session-v1'
const CustomerSessionContext = createContext(null)
function readSession() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null } catch { return null } }

export function CustomerSessionProvider({ children }) {
  const [session, setSession] = useState(readSession)
  useEffect(() => { if (session) localStorage.setItem(STORAGE_KEY, JSON.stringify(session)); else localStorage.removeItem(STORAGE_KEY) }, [session])
  const value = useMemo(() => ({ session, signIn: phone => setSession({ customerId: 'c-01', name: 'Rahul', phone }), signOut: () => setSession(null) }), [session])
  return <CustomerSessionContext.Provider value={value}>{children}</CustomerSessionContext.Provider>
}
export function useCustomerSession() { const context = useContext(CustomerSessionContext); if (!context) throw new Error('useCustomerSession must be used inside CustomerSessionProvider'); return context }
