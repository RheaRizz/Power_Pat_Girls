// Header.js
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../images/logo-main.png'; 

function Header() {
  const location = useLocation();
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpClicked(true);
  };

  return (
    <header className="py-1 fixed-top" 
        style={{ backgroundColor: 'white', boxShadow: '0 8px 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Use an img tag with the logo image */}
          {(!isSignUpClicked || location.pathname !== '/signup') && (
            <Link to="/" className="navbar-brand text-dark">
              <img src={logoImage} alt="Your Logo" 
                style={{ maxHeight: '60px', 
                         marginRight: '8px'
                      }}/>
              <span className="ml-2" 
                style={{ fontFamily:'Montserrat, sans-serif', 
                         fontSize:'0.9rem', 
                         fontWeight: 'bold', 
                         color: '#0f4c81'}}>PowerMED</span>
            </Link>
          )}

          {/* Conditionally render the "SIGN UP/ LOG IN" link */}
          {location.pathname === '/' && (
            <Link to="/signup" onClick={handleSignUpClick} className="btn btn-primary"
                style={{ backgroundColor: 'transparent', 
                         color: '#0f4c81', 
                         padding: '9px 13px', 
                         borderRadius: '8px', 
                         marginLeft: '10px', 
                         fontSize: '0.7rem', 
                         fontFamily: 'Poppins, sans-serif', 
                         fontWeight: 'bold' 
                      }}> SIGN UP / LOG IN
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
