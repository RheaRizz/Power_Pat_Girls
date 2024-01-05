import React from "react";
import './cancel-appointment.css';

function CancelAppointment({ handleCloseCancel, selectedAppointment }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-icon" onClick={handleCloseCancel}>
          &times;
        </span>
        <h2>Cancel Appointment</h2>
        <p>Are you sure you want to cancel this appointment?</p>
        {selectedAppointment && (
          <div className="appointment-info-row">
            <div className="appointment-info-item">
              <strong>Doctor:</strong> {selectedAppointment.doctor}
            </div>
            <div className="appointment-info-item">
              <strong>Clinic:</strong> {selectedAppointment.clinic}
            </div>
            <div className="appointment-info-item">
              <strong>Date:</strong> {selectedAppointment.date}
            </div>
            <div className="appointment-info-item">
              <strong>Time:</strong> {selectedAppointment.time}
            </div>
          </div>
        )}
        <button className="cancel-button">Confirm Cancellation</button>
      </div>
    </div>
  );
}

export default CancelAppointment;