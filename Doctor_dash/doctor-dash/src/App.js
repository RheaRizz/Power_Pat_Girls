import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/section/Sidebar';
import Profile from './components/section/Profile';
import EditProfile from './components/section/EditProfile';
import Header from './components/section/Header'
import Appointment from './components/section/Appointment';
import PatientForm from './components/section/PatientForm';
import Logout from './components/section/Logout';




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
              <Route exact path='/edit-profile' element={<EditProfile />} />
              <Route path='/appointment' element={<Appointment />} />
              <Route path='/logout' element={<Logout />} />
              <Route path="/form/:id" element={<PatientForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
