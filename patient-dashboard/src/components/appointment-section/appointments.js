import React, { useState } from "react";
import "./appointment.css";
import TablePage from "./appointment-content";

function Appointment() {
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: "1",
      doctor: "Dr. John Patrick Pineda",
      clinic: "Forest Health General Hospital",
      date: "6/26/24",
      time: "10:00"
    },
    {
      id: "2",
      doctor: "Dr. Lois Kirsten Alonsagay",
      clinic: "Fortuna Medical Clinic",
      date: "1/4/24",
      time: "16:00"
    }
  ]);

  const [historyAppointments, setHistoryAppointments] = useState([
    {
      id: "1",
      doctor: "Dr. Lois Alonsagay",
      clinic: "Fortuna Medical Clinic",
      date: "11/21/2023",
      time: "16:30",
    },
    {
      id: "2",
      doctor: "Dr. Faith Magsael",
      clinic: "Paradise Grove Hospital Center",
      date: "8/18/2023",
      time: "13:00",
    },
    {
      id: "3",
      doctor: "Dr. Rhea Rizz Perocho",
      clinic: "North Star Medical Clinic",
      date: "7/29/2023",
      time: "14:30",
    },
    {
      id: "4",
      doctor: "Dr. Chescka Puljanan",
      clinic: "Little River Community Hospital",
      date: "12/4/2023",
      time: "18:00",
    },
  ]);

  const renderUpcomingAppointmentsHead = () => {
    return (
      <tr>
        <th>#</th>
        <th>Doctor Name</th>
        <th>Clinic Location</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    )
  };

  const renderUpcomingAppointmentsRow = () => {
    return (
      <tr>
        <td>{upcomingAppointments[0].id}</td>
        <td>{upcomingAppointments[0].doctor}</td>
        <td>{upcomingAppointments[0].clinic}</td>
        <td>{upcomingAppointments[0].date}</td>
        <td>{upcomingAppointments[0].time}</td>
        <td>
          <div className="button">
            <button onClick={() => alert("Cancel")}>Cancel</button>
            <button onClick={() => alert("Reschedule")}>Reschedule</button>
          </div>
        </td>
      </tr>
    );
  };

  const renderHistoryAppointmentsHead = () => {
    return (
      <tr>
        <th>#</th>
        <th>Doctor Name</th>
        <th>Clinic Location</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    );
  };

  const renderHistoryAppointmentsRow = () => {
    return (
      <tr>
        <td>{historyAppointments[0].id}</td>
        <td>{historyAppointments[0].doctor}</td>
        <td>{historyAppointments[0].clinic}</td>
        <td>{historyAppointments[0].date}</td>
        <td>{historyAppointments[0].time}</td>
      </tr>
    );
  };

  return (
    <div className="background-3">
      <div className="section">
        <div className="table-content-2">
          <h2 className="header-text-3">Upcoming Appointments</h2>
          <TablePage
            appointments={upcomingAppointments}
            renderTableHead={renderUpcomingAppointmentsHead}
            renderTableRows={renderUpcomingAppointmentsRow}
          />
        </div>
      </div>
      <div className="section">
        <div className="table-content-2">
          <h2 className="header-text-3">Appointment History</h2>
          <TablePage
            appointments={historyAppointments}
            renderTableHead={renderHistoryAppointmentsHead}
            renderTableRows={renderHistoryAppointmentsRow}
          />
        </div>
      </div>
    </div>
  );
}

export default Appointment;