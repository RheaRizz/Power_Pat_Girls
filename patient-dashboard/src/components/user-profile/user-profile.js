import React from 'react';
import './user-profile.css';
//import { ContactDetails } from './user-contact-details';

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-column">
        <div className='patient-info'>
          <div className='container-header'>
            <div className='header-content'>
              <h3>Patient Name</h3>
              <button>Edit</button>
            </div>
          </div>
          <div>Legal Name: </div>
          <div>Date of Birth: --/--/---- (--yr)</div>
          <div>Marital Status: </div>
          <div>Children: </div>
        </div>
        <div className='patient-contact'>
          <div className='container-header'>
            <div className='header-content'>
              <h3>Contact Details</h3>
            </div>
          </div>
          <div>Address(Home): </div>
          <div>Mobile: </div>
          <div>Email: </div>
          <div className='patient-other-contact'>
            <div className='patient-container-header'>
              <h3>Patient's Contacts</h3>
            </div>
            <div className='contact-table'>
              <div className='name-column'>
                <strong>Name</strong>
              </div>
              <div className='contact-column'>
                <strong>Contacts</strong>
              </div>
              <div className='actions'>
                <strong>Actions</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information-column">
        <div className='general-info-row'></div>
        <div className='appointment-row'>
          <div className='appoint-row-header'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;