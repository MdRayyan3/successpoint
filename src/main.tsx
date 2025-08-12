import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Performance monitoring - Remove console.log in production
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.log('Success Point - Development Mode');
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
