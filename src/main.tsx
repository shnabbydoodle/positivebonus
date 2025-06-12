//import { StrictMode } from 'react'
import React from 'react'
//import { createRoot } from 'react-dom/client'
//NOTE: NOT COMMENTING OUT UNUSED DECLARATIONS CAUSES CLOUDFLARE TO EAT SHIT AND DIE!
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)