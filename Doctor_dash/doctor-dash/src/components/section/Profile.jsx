import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/Profile.css';


const doctorProfile = {
    firstName: 'Lois Kirsten',
    lastName: 'Alonsagay',
    degree: 'MD',
    specialty: 'General Medicine',
    yearStarted: '2010',
    subspecialty: 'Cardiology',
    image: '../img/lowees.jpg',
    hospital: {
      name: 'XYZ Hospital',
      accreditationNumber: '123456',
      roomWingBuilding: 'Room 101, Wing A, Building B',
      address: '123 Medical Street',
      postalCode: 'ABCDE',
    },
    clinic: {
      name: 'XYZ Hospital',
      accreditationNumber: '123456',
      roomWingBuilding: 'Room 101, Wing A, Building B',
      address: '123 Medical Street',
      postalCode: 'ABCDE',
    },
  };
  

  const patients = [
    { id: 1, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 2, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 3, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 4, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 5, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 7, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
    { id: 8, name: 'Lois Kirsten Alonsagay', actions: ['Reject', 'Approve', 'Reschedule'] },
  ];
  

  function Profile() {
    const [rescheduled, setRescheduled] = useState([]);

    const handleRescheduleClick = (patientId) => {
      setRescheduled((prevRescheduled) => [...prevRescheduled, patientId]);
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
                    <img src={doctorProfile.image} alt="Doctor" className="doctor-image" />
                  </div>
                  <div className="text ml-5">
                    <p className="card-text name">{`Dr. ${doctorProfile.firstName} ${doctorProfile.lastName}, ${doctorProfile.degree}`}</p>
                    <p className="card-text specialty">{`Specialty: ${doctorProfile.specialty}`}</p>
                    <p className="card-text year">{`Year Started: ${doctorProfile.yearStarted}`}</p>
                    <p className="card-text subspecialty">{`Subspecialty: ${doctorProfile.subspecialty}`}</p>
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
                      <p className="card-text name">{`Name: ${doctorProfile.hospital.name}`}</p>
                      <p className="card-text number">{`Accreditation Number: ${doctorProfile.hospital.accreditationNumber}`}</p>
                      <p className="card-text room">{`Room/Wing/Building: ${doctorProfile.hospital.roomWingBuilding}`}</p>
                      <p className="card-text address">{`Address: ${doctorProfile.hospital.address}`}</p>
                      <p className="card-text postal code">{`Postal code: ${doctorProfile.hospital.postalCode}`}</p>
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
                      <p className="card-text name">{`Name: ${doctorProfile.clinic.name}`}</p>
                      <p className="card-text number">{`Accreditation Number: ${doctorProfile.clinic.accreditationNumber}`}</p>
                      <p className="card-text room">{`Room/Wing/Building: ${doctorProfile.clinic.roomWingBuilding}`}</p>
                      <p className="card-text address">{`Address: ${doctorProfile.clinic.address}`}</p>
                      <p className="card-text postal code">{`Postal code: ${doctorProfile.clinic.postalCode}`}</p>
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

export default Profile;
