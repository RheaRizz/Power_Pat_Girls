//import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar'
import Home from './components/dashboard-home-page/home';
import UserProfile from './components/user-profile-page/user-profile-page';
import Appointment from './components/appointment-section/appointments';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/user-profile-page" element={<UserProfile/>} />
          <Route path="/appointments" element={<Appointment/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;