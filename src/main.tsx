import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Scanner from './components/camera/Scanner.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Scanner />
  </React.StrictMode>,
)
