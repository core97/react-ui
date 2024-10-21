import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

/**
 * @see https://tailwindui.com/components
 * @see https://ui.shadcn.com/
 * 
 * - Tabla
 *  + Popover accionable
 *  + onClickRow
 * 
 * - Pagination
 * 
 * - Sidebar
 * 
 * - Input File
 * 
 * + Eslint - prettier
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
