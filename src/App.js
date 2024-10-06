import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Cours from './components/Cours'; // Si tu as un composant Cours
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          {/* Vos routes ici */}
          <Route path="/" element={<Home />} />
          <Route path="/Cours" element={<Cours />} />
          {/* Remplacez Redirect par Navigate */}
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirection pour les routes non définies */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
