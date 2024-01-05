// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../App.css';
import '../styles/Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const isLogoutPage = location.pathname === '/logout';
  

  if (isLogoutPage) {
    return null; 
  }


  return (
  <div className='sidebar col-2' style={{ height: '300vh' }}>
    <div className="sidebar-open">
      {/* Navigation Links */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <i className="bi bi-person-workspace"></i>
            <span> Profile</span>
          </Link>
        <li className="nav-item">
          <Link to="/appointment" className="nav-link">
            <i className="bi bi-box-arrow-right"></i>
            <span>Appointments</span>
          </Link>
        </li>
        </li>
  
        <li className="nav-item">
          <Link to="http://localhost:5000/login" className="nav-link">
            <i className="bi bi-box-arrow-right"></i>
            <span> Logout </span>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
