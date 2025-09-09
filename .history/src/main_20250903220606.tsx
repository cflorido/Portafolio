import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AboutMe from './components/aboutme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div style={{ marginTop: '100px' }}></div>
    <AboutMe />
  </StrictMode>,
)
