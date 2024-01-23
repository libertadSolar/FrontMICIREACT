import React from 'react'
import ReactDOM from 'react-dom/client'
import { VisorApp } from './VisorApp'
import { BrowserRouter } from 'react-router-dom'
import { BusquedaProcesoNAC } from './visor_mici/pages/BusquedaProcesoNAC/BusquedaProcesoNAC'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<VisorApp />*/}
      <BusquedaProcesoNAC />
    </BrowserRouter>
    
  </React.StrictMode>,
)
