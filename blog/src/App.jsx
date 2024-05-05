import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import AppRouter from "./components/router";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => <RotatingLines strokeColor="grey" width="50" />;

function App() {
  const [appIsLoading, setAppIsLoading] = useState(true);
  const [routerIsLoading, setRouterIsLoading] = useState(true);

  useEffect(() => {
    const appTimer = setTimeout(() => {
      setAppIsLoading(false);
    }, 1000); // The initial loader will show for 1 second

    const routerTimer = setTimeout(() => {
      setRouterIsLoading(false);
    }, 500); // The router-specific loader will show for 0.5 seconds

    return () => {
      clearTimeout(appTimer);
      clearTimeout(routerTimer);
    };
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        {appIsLoading ? (
          <Loader />
        ) : (
          routerIsLoading && <Loader />
        )}
      </Suspense>
      {!routerIsLoading && <AppRouter />}
    </div>
  );
}

export default App;