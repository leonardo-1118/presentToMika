import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Door from './Container/Door'
import GlobalStyle from './styles/globalStyles'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
