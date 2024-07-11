import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

/**
 * @see https://tailwindui.com/components
 * 
 * - POner bien lo colores de sark y light
 * - Crear el boton para el toggle de dark/light
 * 
 * - Seguir con el componente Drawer respetando los espacios del header - main - footer
 * - Seguir con Sidebar
 * 
 * + Eslint - prettier
 * + Theme: admite los colores + styled-jsx
 * + Button
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
