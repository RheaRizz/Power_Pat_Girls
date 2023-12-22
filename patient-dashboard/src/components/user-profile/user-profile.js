import React from 'react';
import './user-profile.css'

function UserProfile() {
  return (
    <div className="user-profile">
      <div className='header'></div>
      <div className='profile-picture'></div>
      <div className='edit-profile-button'>
        <button className='edit-profile'>Edit Profile</button>
      </div>
      <div className='user'>
        <div className='account-name'></div>
        <div className='account-status'></div>
      </div>
      <div className='user-info'>
        <div className='age'></div>
        <div className='gender'></div>
        <div className='birth-date'></div>
        <div className='weight'></div>
        <div className='height'></div>
        <div className='blood-type'></div>
      </div>
    </div>
  );
};

export default UserProfile;