import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Scanner from './components/camera/Scanner.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login, { action as loginAction } from './Login.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: loginAction
  },
  {
    path: "/scanner/:organizer",
    element: <Scanner />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
