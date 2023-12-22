import React from 'react';
import './sidebar.css';
import { SidebarData } from './sidebar-data';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='logo'></div>
      <ul className='SidebarList '>
        {SidebarData.map((val, key) => (
          <li
            key={key}
						className='row '
						id={window.location.pathname === val.link ? "active": ""}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div id='icon'>{val.icon}</div>
            <div id='title'>{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;