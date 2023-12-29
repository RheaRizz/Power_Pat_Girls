import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white px-3">
      <i className="navbar-brand bi bi-justify-left fs-4"></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
            >
              <i className="bi bi-person-circle"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
