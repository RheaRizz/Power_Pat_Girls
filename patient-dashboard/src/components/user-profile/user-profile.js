import React from "react";
import './user-profile.css'
import { ContactDetails } from "./user-contact-details";

function UserProfile() {
  return (
    <div className="background">
      <div className="user-profile-column">
        <div className="user-about">
          <div className="column-header">
            <div className="header-content">
              <h3 className="title">Patient First MI Last Name</h3>
            </div>
          </div>
          <div className="text">
            <div className="reqd">Legal Name: </div>
            <div className="reqd">Date of Birth: </div>
            <div className="reqd">Marital Status: </div>
            <div className="reqd">Requirement: </div>
          </div>
        </div>
        <div className="patient-contact">
          <div className="column-header">
            <div className="header-content">
              <h3 className="title">Contact Details</h3>
            </div>
          </div>
          <ul className='contact-details'>
            {ContactDetails.map((val, key) => (
              <li key={key} className='row'>
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="button-container">
          <button className="edit-profile">Edit Profile</button>
        </div>
      </div>
      <div className="user-history">
        <div className="information-column"></div>
        <div className="appointments-column"></div>
      </div>
      
    </div>
  );
}

export default UserProfile;