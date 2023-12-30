import React, { useState } from "react";
import "./appointment.css";
import TablePage from "./appointment-content";

function Appointment() {
  const [pendingAppointments, setPendingAppointments] = useState([
    {
      id: "1",
      doctor: "Dr. John Patrick Pineda",
      clinic: "Forest Health General Hospital",
      date: "Jun 26, 2024",
      time: "10:00 AM",
			'Action': (
				<div>
					<button onClick={() => alert("Cancel")}>Cancel</button>
					<button onClick={() => alert("Reschedule")}>Reschedule</button>
				</div>
			)
    },
		{
      id: "2",
      doctor: "Dr. First name Last name",
      clinic: "Insert Hospital Name",
      date: "mm dd, yyyy",
      time: "hh:mm -M",
			'Action': (
				<div>
					<button onClick={() => alert("Cancel")}>Cancel</button>
					<button onClick={() => alert("Reschedule")}>Reschedule</button>
				</div>
			)
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

  const renderPendingAppointmentsHead = () => {
    return (
      <tr>
        <th>#</th>
        <th>Doctor Name</th>
        <th>Clinic Location</th>
        <th>Date</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
    );
  };

  const renderPendingAppointmentsRow = () => {
    return (
      <tr>
        <td>{pendingAppointments[0].id}</td>
        <td>{pendingAppointments[0].doctor}</td>
        <td>{pendingAppointments[0].clinic}</td>
        <td>{pendingAppointments[0].date}</td>
        <td>{pendingAppointments[0].time}</td>
        <td>
          <div className="buttons">
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
        <th>Status</th>
      </tr>
    );
  };

  return (
    <div className="background">
      <div className="section">
        <div className="table-content">
          <h2 className="header-text">Pending Appointments</h2>
          <TablePage
            appointments={pendingAppointments}
            renderTableHead={renderPendingAppointmentsHead}
            renderTableRows={renderPendingAppointmentsRow}
          />
        </div>
      </div>
      <div className="section">
        <div className="table-content">
          <h2 className="header-text">Appointment History</h2>
          <TablePage
            appointments={historyAppointments}
            renderTableHead={renderHistoryAppointmentsHead}
          />
        </div>
      </div>
    </div>
  );
}

export default Appointment;