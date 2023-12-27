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
            <div className="reqd">Gender: </div>
            <div className="reqd">Date of Birth: </div>
            <div className="reqd">Age: </div>
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
        <div className="information-column">
          <div className="gen-info-col">
            <div className="info">Blood Group: </div>
            <div className="info">Height: </div>
            <div className="info">Weight: </div>
          </div>
          <div className="med-info-col">
            <div className="info">Conditions: </div>
            <div className="info">Medications: </div>
            <div className="info">Allergies: </div>
          </div>
        </div>
        <div className=" appointments-column">
          <div className="column-header">Pending Appointments</div>
          <div className="section-columns">
            <div className="column-header">Date</div>
            <div className="column-header">Time</div>
            <div className="column-header">Doctor</div>
            <div className="column-header">Location</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default UserProfile;