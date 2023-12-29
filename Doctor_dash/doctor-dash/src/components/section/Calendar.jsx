// Calendar.js
import React from 'react';
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Calendar.css';

function Calendar() {
  const events = [                      
    {
      title: "Appointment",
      start: "2023-12-24T08:30:00",
      end: "2023-12-24 T08:00:00",
    }
  ]; 

  return (
    <div id="calendarContainer" className="calendar-box">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: "title",
          center: "",
          end: "today prev,next dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
        themeSystem="bootstrap"
        themeButtonIcons={{
          today: 'custom-today-icon', 
          month: 'custom-month-icon', 
          week: 'custom-week-icon', 
          day: 'custom-day-icon',
        }}
        height={"90vh"}
        width={"200vh"}
        events={events}
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content: "<p>Lois Kirsten Alonsagay</strong>.</p>"
            
          });
        }}
      />
    </div>
  );
}

export default Calendar;
