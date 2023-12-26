//import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar'
import Home from './components/dashboard-home-page/home';
import UserProfile from './components/user-profile/user-profile';

function App() {
  return (
    <div className='App'>
			<Header />
			<Sidebar />
			<UserProfile />
    </div>
  )
}

export default App;