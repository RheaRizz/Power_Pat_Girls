import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import ParentCal from './ParentCal';
import '../styles/Profile.css';
import { Link } from 'react-router-dom';



function Appointment() {
    const [patients, setPatients] = useState([
    { id: 1, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] , date: '2023-12-24T08:30'},
    { id: 2, name: 'Lois Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'], date: '2023-12-30T08:30:00' },
    { id: 3, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'], date: '2023-12-24T08:30:00' },
    { id: 4, name: 'Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'], date: '2023-12-25T08:30' },
    { id: 5, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'], date: '2023-12-31T08:30:00' },
    { id: 7, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'], date: '2023-12-24T08:30:00' },
    ]);

    
    const [rescheduled, setRescheduled] = useState([]);
    
    const handleRescheduleClick = (patientId) => {
      setRescheduled((prevRescheduled) => [...prevRescheduled, patientId]);
    };
  
    const handleRejectClick = (patientId) => {
      const updatedPatients = patients.filter((patient) => patient.id !== patientId);
      setPatients(updatedPatients);
    };
  
    const handleApproveClick = (patientId) => {
      const approvedPatient = patients.find((patient) => patient.id === patientId);
      const appointmentDateTime = approvedPatient.date;
      
      setRescheduled((prevAppointments) => [
        ...prevAppointments,
        { ...approvedPatient, appointmentDateTime },
      ]);

      const updatedPatients = patients.filter((patient) => patient.id !== patientId);
      setPatients(updatedPatients);
    };
    
    return (
        <div>
          <div className="booking col-md-6">
            <div className="card bg-gray">
              <div className="card-body">
                <h5 className="book-title">Booking Requests</h5>
                <ul className="list-group">
                  {patients.map((patient) => (
                    <li
                      key={patient.id}
                      className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center"
                    >
                      <Link to={`/form/${patient.id}`}>
                      <span>{patient.name}</span>
                    </Link>
                      <div className="button-column d-flex flex-wrap">
                        {rescheduled.includes(patient.id) ? (
                          <span className="text-warning">To be Rescheduled</span>
                        ) : (
                          patient.actions.map((action, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                if (action === 'Reschedule') {
                                  handleRescheduleClick(patient.id);
                                } else if (action === 'Reject') {
                                  handleRejectClick(patient.id);
                                } else if (action === 'Approve') {
                                  handleApproveClick(patient.id);
                                }
                              }}
                              className={`custom-btn btn-link text-${index === 0 ? 'danger' : index === 1 ? 'success' : 'warning'} mr-2`}
                            >
                              {action}
                            </button>
                          ))
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ParentCal rescheduledAppointments={rescheduled}/>
        </div>
      ); 
    }
    
export default Appointment;

