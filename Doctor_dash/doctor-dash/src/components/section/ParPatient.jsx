import React from 'react';
import '../../App.css';
import '../styles/Patient.css';

const ParPatient = ({ confirmedAppointments}) => {
  return (
    <div className="patient-booking col-md-6" style={{ paddingTop: '-10px', overflow: 'hidden' }}>
      <h1 className="patient-text">Patient Records</h1>
      <ul className="list-group hide-scrollbar">
        {confirmedAppointments.map(appointment => (
          <li key={appointment.id} className=
              "list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center" 
                style={{ backgroundColor: '#F3FDFE' }}>
            <div className="name-column" style={{ marginTop: '20px' }}>
              <span>{appointment.name}</span>
            </div>
            <div className="date-column" style={{ marginTop: '20px', marginRight: '70PX' }}>
              <span style={{ marginBottom: '5px' }}>Time: {new Date(appointment.time).toLocaleTimeString()}</span>
              <span className="spacer"></span>
              <span>Consultation Date: {new Date(appointment.consultationDate).toLocaleDateString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParPatient;
