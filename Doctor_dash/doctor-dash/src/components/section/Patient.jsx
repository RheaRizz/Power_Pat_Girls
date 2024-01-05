import React from 'react';
import '../../App.css';
import '../styles/Patient.css'

const bookingRequests = [
  { id: 1, name: 'Lois Kirsten Alonsagay', consultationDate: '2023-03-10', time: '10:00 AM' },
  { id: 2, name: 'Chescka Joel Puljanan', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'Rhea Rizz Perocho', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'Faith Nina Magsail', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
  { id: 2, name: 'John Patrick Pineneda', consultationDate: '2023-03-11', time: '02:30 PM' },
];

const Profile = () => {
  return (
    <div className="patient-booking col-md-6" style={{ paddingTop: '-10px', overflow: 'hidden' }}>
      <ul className="list-group hide-scrollbar">
        {bookingRequests.map(request => (
          <li key={request.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ backgroundColor: '#F3FDFE' }}>
            <div className="name-column" style={{ marginTop: '20px' }}>
              <span>{request.name}</span>
            </div>
            <div className="date-column" style={{ marginTop: '20px', marginRight: '70PX' }}>
              <span style={{ marginBottom: '5px' }}>Time: {request.time}</span>
              <span className="spacer"></span>
              <span>Consultation Date: {request.consultationDate}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;