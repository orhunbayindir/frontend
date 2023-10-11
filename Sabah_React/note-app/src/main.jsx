import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PermissionProvider } from '../src/context/PermissionContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PermissionProvider>
    <App />
    </PermissionProvider>
  </React.StrictMode>,
)
