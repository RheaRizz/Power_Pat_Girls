// App.js
import React from "react";
import Header from './components/pages/Header'; 
import "./App.css"; 
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
