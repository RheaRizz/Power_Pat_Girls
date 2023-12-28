import React from "react";
import './appointment.css'

function Appointment() {
	return(
	<div className="background">
		<div className="column">
			<div className="header-container">
				<div className="header-content">Appointment History</div>
			</div>
			<div className="app-history">
				<div className="column-name">Doctor Name</div>
				<div className="column-name">Clinic Location</div>
				<div className="column-name">Appointment Date</div>
				<div className="column-name">Appointment Time</div>
				<div className="column-name">Appointment Status</div>
			</div>
			<div className="header-container">
				<div className="header-content">Pending Appointments</div>
			</div>
			<div className="pending-app">
			<div className="column-name">Doctor Name</div>
				<div className="column-name">Clinic Location</div>
				<div className="column-name">Appointment Date</div>
				<div className="column-name">Appointment Time</div>
				<div className="column-name">Appointment Status</div>
			</div>
		</div>
	</div>
	)
}

export default Appointment;