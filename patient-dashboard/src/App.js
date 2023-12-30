//import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar'
//import Home from './components/dashboard-home-page/home';
//import UserProfile from './components/user-profile/user-profile';
import Appointment from './components/appointment-section/appointments';
//import Test from './components/test-section/test';

function App() {
  return (
    <div className='App'>
			<Header />
			<Sidebar />
			<Appointment />
    </div>
  )
}

export default App;