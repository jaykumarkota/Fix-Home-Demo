import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ServiceRequestProvider } from './context/ServiceRequestContext'
import { CustomerSessionProvider } from './context/CustomerSessionContext'

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><CustomerSessionProvider><ServiceRequestProvider><App /></ServiceRequestProvider></CustomerSessionProvider></BrowserRouter></React.StrictMode>)
