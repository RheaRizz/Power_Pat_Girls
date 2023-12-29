import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/section/Sidebar';
import Profile from './components/section/Profile';
import Calendar from './components/section/Calendar';
import EditProfile from './components/section/EditProfile';
import Header from './components/section/Header'
import Patient from './components/section/Patient'


function App() {
  return (
    <Router>
      <Header/>
      <div className='container-fluid vh-100 '>
      <div className='row'>
      <Sidebar />
        <div className='col' style={{ margin: '100px' }}>
            <Routes>
              {/*Default route */}
              <Route index element={<Profile/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/calendar' element={<Calendar />} />
              <Route exact path='/edit-profile' element={<EditProfile />} />
              <Route path='/patient' element={<Patient />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
