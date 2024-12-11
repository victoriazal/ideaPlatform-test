import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import BuyTicket from './components/pages/BuyTicket/BuyTicket.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BuyTicket />,
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
