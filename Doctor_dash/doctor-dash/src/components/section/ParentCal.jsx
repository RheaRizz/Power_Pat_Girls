import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/Calendar.css';
import '../styles/Modal.css';

import ParPatient from './ParPatient';


function ParentCal(props) {
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);

  console.log(props.rescheduledAppointments);
  const events = (props.rescheduledAppointments || []).map((appointment) => ({
    title: appointment.name,
    start: appointment.appointmentDateTime,
    end: appointment.appointmentDateTime,
  }));

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setShowConfirmModal(true);
  };

  const handleConfirmAppointment = () => {
    setConfirmedAppointments([...confirmedAppointments, {
      id: selectedEvent.id,
      name: selectedEvent.title,
      time: selectedEvent.start,
      consultationDate: selectedEvent.start,
    }])
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
        eventDidMount={() => {}}
      />

      {/* Confirm Appointment Modal */}
      {showConfirmModal && (
        <div className="confirm-modal">
          <div className="confirm-modal-content">
            <p>Done consultation for {selectedEvent?.title}?</p>
            <div className="confirm-modal-buttons">
              <button onClick={() => setShowConfirmModal(false)}>Close</button>
              <button onClick={handleConfirmAppointment}>Done</button>
            </div>
          </div>
        </div>
      )}
      <div className="patient-container">
        <ParPatient confirmedAppointments={confirmedAppointments} />
      </div>
    </div>
  );
}

export default ParentCal;
