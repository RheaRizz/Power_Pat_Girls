import React from 'react';
import './user-profile.css'

function UserProfile() {
  return (
    <div className='user-profile'>
      <div className='user-container'>
        <div className='icon'></div>
        <div className='name'></div>
        <div className='gender'></div>
        <div className='age'></div>
        <div className='height'></div>
        <div className='weight'></div>
      </div>
      <div className='appointment-container'>
        <div className='row'>
          <div className='col'>
            <div className='text-area'>
              <h3 class='Title1'>Looking for a Doctor?</h3>
              <p>Book an appointment now</p>
            </div>
          </div>
        </div>
      </div>
      <div className='booking-container'>
        <div className='row'>
          <div className='col'>
            <div className='text-area'>
              <h3 class='Title1'>Booking Instructions</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>

      </div>
    </div>
  );
};

export default UserProfile;