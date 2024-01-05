// App.js
import React, { useState, useEffect } from "react";
import Header from './components/pages/Header'; 
import "./App.css"; 
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneralMedicine from './components/pages/GeneralMedicine';
import Pediatrics from './components/pages/Pediatrics';
import Surgery from './components/pages/Surgery';
import Dentalcare from './components/pages/Dentalcare';


function App() {

  return (
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/general-medicine" element={<GeneralMedicine />} />
          <Route path="/pediatrics" element={<Pediatrics />} />
          <Route path="/surgery" element={<Surgery />} />
          <Route path="/dental-care" element={<Dentalcare />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
