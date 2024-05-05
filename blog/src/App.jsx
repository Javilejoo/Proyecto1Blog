import React, { Suspense, useState, useEffect } from 'react';
import './App.css';
import AppRouter from './components/router';
import { CircularProgress } from '@mui/material'; // Importa el CircularProgress

function App() {
  const [rutaActual, setRutaActual] = useState("app");

  useEffect(() => {
    setRutaActual(window.location.pathname);
  }, []);

  return (
    <Suspense fallback={<CircularProgress />}> {/* Usa Suspense para mostrar el spinner de carga */}
      <AppRouter ruta={rutaActual} />
    </Suspense>
  );
}

export default App;
