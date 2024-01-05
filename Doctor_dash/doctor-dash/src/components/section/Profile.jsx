import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/Profile.css';

function Dashboard() {
  const [doctorInfo, setDoctorInfo] = useState({});
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchDoctorInfo = async () => {
      try {
        const response = await fetch('/doctor-dashboard');
        const data = await response.json();
        setDoctorInfo(data);
      } catch (error) {
        console.error('Error fethcing doctor\'s information', error);
      }
    };

    fetchDoctorInfo();

    const fetchBookingRequests = async () => {
      try {
        const response = await fetch('/booking-request');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching booking requests', error);
      }
    };

    fetchBookingRequests();
  }, []);

  function Profile() {
    const [rescheduled, setRescheduled] = useState([]);

    const handleRescheduleClick = async (patientId) => {
      try {
        await fetch(`/booking-requests/${patientId}`, {
          method: 'PUT',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({ status: 'Pending' }),
        });
        
        setRescheduled((prevRescheduled) => [...prevRescheduled, patientId]);
      } catch (error) {
        console.error('Error rescheduling booking request', error);
      }
    };
  
    return (
      <div> 
        <div className="profile-container">
          <div className="row">
            <div className="col-md-6">
              <div className="profile-details card mb-4">
                <div className="card">
                  <div className="profile-card-body d-flex align-items-center">
                    <div className="doctor-image-container rounded-circle overflow-hidden">
                      <img src={doctorInfo?.image} alt="Doctor" className="doctor-image" />
                    </div>
                    <div className="text ml-5">
                      <p className="card-text name">{`Dr. ${doctorInfo?.firstname} ${doctorInfo?.lastname}, ${doctorInfo?.degree_title_designation}`}</p>
                      <p className="card-text specialty">{`Specialty: ${doctorInfo?.specialties}`}</p>
                      <p className="card-text year">{`Year Started: ${doctorInfo?.year_started}`}</p>
                      <p className="card-text subspecialty">{`Subspecialty: ${doctorInfo?.subspecialty}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="additional-info-box mb-4 hospital">
                <div className="card">
                  <div className="card-body">
                    <h5 className="hospi-title">Hospital Information</h5>
                      <div className="hospi-text ml-5">
                        <p className="card-text name">{`Name: ${doctorInfo?.med_institutions.name}`}</p>
                        <p className="card-text number">{`Accreditation Number: ${doctorInfo?.med_institutions.accreditation}`}</p>
                        <p className="card-text room">{`Room/Wing/Building: ${doctorInfo?.med_institutions.location}`}</p>
                        <p className="card-text address">{`Address: ${doctorInfo?.med_institutions.address}`}</p>
                        <p className="card-text postal code">{`Postal code: ${doctorInfo?.med_institutions.postal}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="col-md-6">
              <div className="additional-info-box mb-4 clinic">
                <div className="card">
                  <div className="card-body">
                    <h5 className="clinic-title">Clinic Information</h5>
                      <div className="clinic-text ml-5">
                        <p className="card-text name">{`Name: ${doctorInfo?.med_institutions.name}`}</p>
                        <p className="card-text number">{`Accreditation Number: ${doctorInfo?.med_institutions.accreditation}`}</p>
                        <p className="card-text room">{`Room/Wing/Building: ${doctorInfo?.med_institutions.location}`}</p>
                        <p className="card-text address">{`Address: ${doctorInfo?.med_institutions.address}`}</p>
                        <p className="card-text postal code">{`Postal code: ${doctorInfo?.med_institutions.postal}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                    <div className="name-column">
                      <span>{patient.name}</span>
                    </div>
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
                              } else {
                              }
                            }}
                            className={`btn btn-link btn-link-d text-${index === 0 ? 'danger' : index === 1 ? 'success' : 'warning'} mr-2`}
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
      </div>
    );
  }

  return <Profile />
}

// const doctorProfile = {
//     image: '../img/lowees.jpg',
//   };
  

  const patients = [
    { id: 1, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 2, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 3, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 4, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 5, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 7, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 8, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
  ];
  
export default Dashboard();
