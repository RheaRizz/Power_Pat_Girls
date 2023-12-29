// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../App.css';
import '../styles/Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const isEditProfilePage = location.pathname === '/edit-profile';

  if (isEditProfilePage) {
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
        </li>
        <li className="nav-item">
          <Link to="/calendar" className="nav-link">
            <i className="bi bi-calendar2-plus"></i>
            <span> Calendar</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/patient" className="nav-link">
            <i className="bi bi bi-person-add"></i>
            <span> Patient </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link">
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
