import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContainerOptions from './components/ContainerOptions/container'
import Info from './components/Info/info'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Info/>
    <ContainerOptions/>
  </StrictMode>,
)
