import { useState, useEffect } from 'react'
import './App.css'
import AppRouter from './components/router'


function App() {

  const [rutaActual, setRutaActual] =useState("app")
  useEffect(() => {
    setRutaActual(window.location.pathname)
  }, [])
  return(
      <AppRouter ruta={rutaActual}></AppRouter>
  )
}

export default App
