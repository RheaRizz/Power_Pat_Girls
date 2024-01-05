import React from "react";
import './header.css';

function Header() {
  return(
    <div className="header">
      <div className="greeting">
				<h2 className="text-area-">Hi, Name of Patient!</h2>
			</div>
			<div className="settings">
				<h3 className="text-area">Settings</h3>
			</div>
		</div>
  );
};

export default Header;