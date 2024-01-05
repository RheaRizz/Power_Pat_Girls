import React, { useState } from "react";
import "./user-profile-page.css";
import InfoPage from "./user-info";
import ContactPage from "./user-contact";
import MedicalPage from "./medical-info";
import TablePage from "../appointment-section/appointment-content";
import CancelAppointment from "./cancel-appointment";

function UserProfile() {
  const [userInfo, setUserInfo] = useState([
    {
      name: "Franchescka Jewel Puljanan",
      birthdate: "11/6/03",
      marital: "Single",
      children: "0"
    }
  ]);

  const [userContact, setUserContact] = useState([
    {
      address: "Blk. 3 Brgy. Sinikway Lapuz, Iloilo City",
      mobile: "09297005398",
      email: "franchesckajewel.puljanan-22@cpu.edu.ph"
    }
  ]);

  const [userMedInfo, setUserMedInfo] = useState([
    {
      height: "165 cm",
      weight: "53 kg",
      blood: "A+",
      condition: "Bowel incontinence",
      medication: "Anti-diarrheal drugs",
      allergy: "Pak Fah Yeow"
    }
  ]);

  const [showCancelPopup, setCancelPopup] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleCancelClick = (appointment) => {
    setCancelPopup(true);
    setSelectedAppointment(appointment);
  };

  const handleCloseCancel = () => {
    setCancelPopup(false);
  };

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: "1",
      doctor: "Dr. John Patrick Pineda",
      clinic: "Forest Health General Hospital",
      date: "6/26/2024",
      time: "10:00",
      status: "Approved",
      'Action': (
        <div>
          <button className="action-button" onClick={() => handleCancelClick(upcomingAppointments[0])}>Cancel</button>
          <button className="action-button" onClick={handleCancelClick}>Reschedule</button>
        </div>
      )
    },
    {
      id: "2",
      doctor: "Dr. Lois Kirsten Alonsagay",
      clinic: "Fortuna Medical Clinic",
      date: "1/4/24",
      time: "16:00",
      status: "Requested for a Reschedule",
      'Action': (
        <div>
          <button className="action-button" onClick={() => handleCancelClick(upcomingAppointments[1])}>Cancel</button>
          <button className="action-button" onClick={handleCancelClick}>Reschedule</button>
        </div>
      )
    }
  ]);

  const renderUpcomingAppointmentsHead = () => {
    return (
      <tr>
        <th>#</th>
        <th>Doctor Name</th>
        <th>Clinic Location</th>
        <th>Date</th>
        <th>Time</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    )
  };

  return (
    <div className="background-2">
      <div className="user-profile-column-1">
        <div className="user-info">
          <div className="header-2">
            <h2 className="header-text-2">User Information</h2>
          </div>
          <div className="table-content-1">
            <InfoPage data={userInfo} />
          </div>
        </div>
        <div className="user-contact">
          <div className="header-2">
            <h2 className="header-text-2">Contact Details</h2>
          </div>
          <div className="table-content-1">
            <ContactPage data={userContact} />
          </div>
        </div>
        <div className="button-container">
          <button className="edit-profile-button-1" onClick={() => alert("Edit Profile")}>Edit Profile</button>
        </div>
      </div>
      {/* divider comment */}
      <div className="user-profile-column-2">
        <div className="medical-info">
          <div className="header-2">
            <h2 className="header-text-2">Medical Information</h2>
          </div>
          <div className="table-content-1">
            <MedicalPage data={userMedInfo} />
          </div>
        </div>
        <div className="upcoming-appointments">
          <div className="header-2">
            <h2 className="header-text-2">Pending Appointments</h2>
          </div>
          <div className="table-content-1">
            <TablePage
              appointments={upcomingAppointments}
              renderTableHead={renderUpcomingAppointmentsHead}
            />
          </div>
        </div>
      </div>
      {showCancelPopup && <CancelAppointment handleCloseCancel={handleCloseCancel} selectedAppointment={selectedAppointment} />}
    </div>
  )
}

export default UserProfile;
