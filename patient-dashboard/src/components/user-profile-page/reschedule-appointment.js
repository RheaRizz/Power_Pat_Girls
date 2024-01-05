import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import './reschedule-appointment.css';

function RescheduleAppointment({ handleCloseResched, selectedAppointment, handleRescheduleConfirmation }) {
  const [selectedDate, setSelectedDate] = useState(new Date(selectedAppointment.date));
  const [selectedTime, setSelectedTime] = useState(selectedAppointment.time);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-icon" onClick={handleCloseResched}>
          &times;
        </span>
        <h2>Reschedule Appointment</h2>
        <p>Select a new date and time for your appointment:</p>
        <div className="appointment-info-row">
          <div className="appointment-info-item">
            <strong>Doctor:</strong> {selectedAppointment.doctor || 'Not available'}
          </div>
          <div className="appointment-info-item">
            <strong>Clinic:</strong> {selectedAppointment.clinic || 'Not available'}
          </div>
        </div>
        <div className="reschedule-inputs">
          <div className="date-picker-container">
            <label>Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
            />
          </div>
          <div className="time-picker-container">
            <label>Select Time:</label>
            <TimePicker
              onChange={handleTimeChange}
              value={selectedTime}
            />
          </div>
        </div>
        <button className="resched-button" onClick={() => handleRescheduleConfirmation()}>
          Confirm Reschedule
        </button>
      </div>
    </div>
  );
}

export default RescheduleAppointment;