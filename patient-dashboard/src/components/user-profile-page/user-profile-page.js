import React, { useState } from "react";
import "./user-profile-page.css";
import InfoPage from "./user-info";
import ContactPage from "./user-contact";
import MedicalPage from "./medical-info";
import TablePage from "../appointment-section/appointment-content";

function UserProfile() {
  const [userInfo, setUserInfo] = useState([
    {
      name: "Franchescka Puljanan",
      birthdate: "Nov 6, 2003",
      marital: "Single",
      children: "0"
    }
  ]);

  const [userContact, setUserContact] = useState([
    {
      address: "Sinikway, Lapuz, Iloilo City",
      mobile: "09297005398",
      email: "franchesckajewel.puljanan-22@cpu.edu.ph"
    }
  ]);

  const [historyAppointments, setHistoryAppointments] = useState([
    {
      id: "1",
      doctor: "Dr. Lois Alonsagay",
      clinic: "Fortuna Medical Clinic",
      date: "Nov 21, 2023",
      time: "4:30 PM",
      status: "Done",
    },
    {
      id: "2",
      doctor: "Dr. Faith Magsael",
      clinic: "Paradise Grove Hospital Center",
      date: "Aug 18, 2023",
      time: "1:00 PM",
      status: "Done",
    },
    {
      id: "3",
      doctor: "Dr. Rhea Rizz Perocho",
      clinic: "North Star Medical Clinic",
      date: "Jul 29, 2023",
      time: "2:30 PM",
      status: "Done",
    },
    {
      id: "4",
      doctor: "Dr. Chescka Puljanan",
      clinic: "Little River Community Hospital",
      date: "Dec 4, 2023",
      time: "6:00 PM",
      status: "Done",
    },
  ]);

  const [userMedInfo, setUserMedInfo] = useState([
    {
      height: "165 cm",
      weight: "53 kg",
      blood: "A+",
      condition: "None",
      medication: "None",
      allergy: "Pak Fah Yeow",
    }
  ]);

  const renderHistoryAppointmentsHead = () => {
    return (
      <tr>
        <th>#</th>
        <th>Doctor Name</th>
        <th>Clinic Location</th>
        <th>Date</th>
        <th>Time</th>
        <th>Status</th>
      </tr>
    );
  };

  return (
    <div className="background-2">
      <div className="user-profile-column">
        <div className="user-info">
          <div className="table-content-1">
            <h2 className="header-text-2">User Information</h2>
            <InfoPage data={userInfo} />
          </div>
        </div>
        <div className="user-contact">
        <div className="table-content-1">
            <h2 className="header-text-2">Contact Details</h2>
            <ContactPage data={userContact} />
          </div>
        </div>
        <button className="edit-profile-button-1">
          Edit Profile
        </button>
      </div>
      <div className="user-profile-column">
        <div className="medical-info">
          <div className="table-content-1">
            <h2 className="header-text-2">Medical Information</h2>
            <MedicalPage data={userMedInfo} />
          </div>
        </div>
        <div className="appointment-history">
          <div className="table-content-1">
            <h2 className="header-text-2">Appointment History</h2>
            <TablePage
              appointments={historyAppointments}
              renderTableHead={renderHistoryAppointmentsHead}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;