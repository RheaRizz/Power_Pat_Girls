import React from "react";
import "./booking-instructions.css";

function BookingInstruction({ handleClosePopup }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-icon" onClick={handleClosePopup}>
          &times;
        </span>
        <h2>Booking Instructions</h2>
        <ol>
          <li>The patient chooses a doctor to book an appointment with.</li>
          <li>
            Once the patient has successfully input all required fields and has
            submitted the form, they may check their booking request in their
            Profile Page of the Patient Dashboard. There, they can track the
            status of their booked appointment if it is pending, approved,
            rejected, or requested for a reschedule.
          </li>
          <li>
            Once the doctor has approved their booked appointment, the booking
            request should show on the "Upcoming Appointments" table, which can
            be found on the Appointment Page of their Patient Dashboard.
          </li>
          <li>
            After the appointment has been done, the Doctor will mark the
            appointment as done.
          </li>
          <li>
            The said appointment will now transfer to the "Appointment History"
            table.
          </li>
        </ol>
        <button onClick={handleClosePopup}>Close</button>
      </div>
    </div>
  );
}

export default BookingInstruction;