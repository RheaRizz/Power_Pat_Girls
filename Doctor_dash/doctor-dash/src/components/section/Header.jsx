// Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import logoImage from '../img/logo-main.png';

function Header() {
  const location = useLocation();
  const isLogoutPage = location.pathname === '/logout';

  if (isLogoutPage) {
    return null; 
  }

  return (
    <header
      className="py-2 header-2"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        width: '100%',
        zIndex: 2000,
      }}
    >
      <div className="header-container">
        <div className="text-center">
          <div className="d-flex align-items-center" style={{ paddingTop: '20px' }}>
            <img src={logoImage} alt="Logo" className="logo-img" />
            <span className="logo-text">PowerMed</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
