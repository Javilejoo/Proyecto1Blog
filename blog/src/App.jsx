import { useState, useEffect } from 'react'
import './App.css'
import Router from './components/router'


function App() {

  const [rutaActual, setRutaActual] =useState("app")
  useEffect(() => {
    setRutaActual(window.location.pathname)
  }, [])
  return(
      <Router ruta={rutaActual}></Router>
  )
}

export default App
