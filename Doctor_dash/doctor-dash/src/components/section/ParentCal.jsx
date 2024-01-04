import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/Calendar.css';
import '../styles/Modal.css';

function ParentCal({ rescheduledAppointments }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const events = rescheduledAppointments
    ? rescheduledAppointments.map((appointment) => ({
        title: appointment.name,
        start: appointment.appointmentDateTime,
        end: appointment.appointmentDateTime,
      }))
    : [];

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setShowConfirmModal(true);
  };

  const handleConfirmAppointment = () => {
    setShowConfirmModal(false);
  };

  return (
    <div id="calendarContainer" className="calendar-box">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'today prev,next dayGridMonth,timeGridWeek,timeGridDay',
        }}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
        height={'90vh'}
        width={'200vh'}
        events={events}
        eventClick={handleEventClick}
        eventDidMount={() => {
        }}
      />

      {/* Confirm Appointment Modal */}
      {showConfirmModal && (
        <div className="confirm-modal">
          <div className="confirm-modal-content">
            <h5>Confirm Appointment</h5>
            <p>Are you sure you want to confirm the appointment for {selectedEvent?.title}?</p>
            <div className="confirm-modal-buttons">
              <button onClick={() => setShowConfirmModal(false)}>Close</button>
              <button onClick={handleConfirmAppointment}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ParentCal;
