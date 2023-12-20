import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg py-3" style={{ backgroundColor: 'transparent' }}>
      <Link to="/" className="navbar-brand text-dark px-3">PowerMed</Link>

      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`offcanvas offcanvas-end${isNavOpen ? ' show' : ''}`} tabIndex="-1" id="navbarSupportedContent" aria-labelledby="navbarNavLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="navbarNavLabel">Menu</h5>
          <button type="button" className="btn-close text-reset" onClick={handleToggle} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto px-4">
            <li className="nav-item">
              <Link to="/signin" className="nav-link text-dark" onClick={handleToggle}>Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
