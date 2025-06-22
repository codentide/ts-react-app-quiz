import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './scss/main.scss'
// Verificar cuantas necesito e importar las mas importantes
import '@fontsource-variable/roboto-mono/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
