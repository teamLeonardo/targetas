import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from "./routers/app.routes";

function App() {
  return (
    <Router>
      <Rutas />
    </Router>
  );
}

export default App;
