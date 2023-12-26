import React from 'react';
import './user-profile.css';
import { ContactDetails } from './user-contact-details';

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-column">
        <div className='patient-contact'>
          <div className='text-area'>
            <h3>First Name Last Name</h3>
            <ul className='contact-details'>
              {ContactDetails.map((val, key) => (
                <li key={key} className='row'>
                  <div id='icon'>{val.icon}</div>
                  <div id='title'>{val.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='patient-info'>
          <div className='header-box'>
            <div className='header-text'>
              {/* Your patient info content goes here */}
            </div>
          </div>
        </div>
      </div>
      <div className="information-column">
        <div className='general-info-row'></div>
        <div className='appointment-row'>
          <div className='appoint-row-header'>
            <div className='header-tabs'>
              <div className='tabs'>Tab 1</div>
              <div className='tabs'>Tab 2</div>
              <div className='tabs'>Tab 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;