import React from 'react';
import '../styles/PatientForm.css'


const PatientForm = ({ patient }) => (
  <div>
    <div className='card-form'>
      <div className='card-body-form'>

      <h1 className="section-heading">Patient Information</h1>
        <div className="form-section">
          <h2 className="subsection-heading">First Name: {patient.firstName}</h2>
        </div>
        <div className="form-section">
          <h2 className="subsection-heading">Last Name: {patient.lastName}</h2>
        </div>

        <div className="form-section">
          <h2 className="subsection-heading">Date of Birth: {patient.dob}</h2>
        </div>

        <div className="form-section">
          <h2 className="subsection-heading">Gender: {patient.gender}</h2>
        </div>

        <h1 className="section-heading">Contact Details</h1>
        <div className="form-section">
          <h2 className="subsection-heading">Phone Number: {patient.phoneNumber}</h2>
        </div>
        <div className="form-section">
          <h2 className="subsection-heading">Email Address: {patient.emailAddress}</h2>
        </div>

        <h1 className="section-heading">Address</h1>
        <div className="form-section">
          <h2 className="subsection-heading">
            Barangay/Street: {patient.barangayStreet}</h2>
          <p></p>
        </div>
        <div className="form-section">
          <h2 className="subsection-heading">
            City/Municipality: {patient.cityMunicipality}</h2>
        </div>
        <div className="form-section">
          <h2 className="subsection-heading">
            Province: {patient.province}</h2>
        </div>
        <div className="form-section">
          <h2 className="subsection-heading">
            Postal Code: {patient.postalCode}</h2>
        </div>

        <h1 className="section-heading">Appointment Details</h1>
        <div className="form-section">
          <h2 className="subsection-heading">
            Appointment Date:{patient.appointmentDate}</h2>
        </div>
        <div className="form-section">
          <h2 className="subsection-heading">
            Appointment Time: {patient.appointmentTime}</h2>
        </div>

        <div className="form-section">
          <h2 className="subsection-heading">Reason: {patient.reason}</h2>
        </div>
      </div>
    </div>
  </div>
);


function Form () {
  const patients = [
    {
      id: 1,
      firstName: 'Lois Kirsten',
      lastName: 'Alonsagay',
      dob: '1990-01-01',
      gender: 'Female',
      phoneNumber: '123-456-7890',
      emailAddress: 'lois@example.com',
      barangayStreet: '123 Main St',
      cityMunicipality: 'Cityville',
      province: 'Provinceland',
      postalCode: '12345',
      appointmentDate: '2023-12-24',
      appointmentTime: '08:30',
      reason: 'Regular checkup',
    },
    {
      id: 2,
      firstName: 'Lois',
      lastName: 'Alonsagay',
      dob: '1980-02-15',
      gender: 'Female',
      phoneNumber: '987-654-3210',
      emailAddress: 'lois2@example.com',
      barangayStreet: '456 Oak St',
      cityMunicipality: 'Townsville',
      province: 'Countyland',
      postalCode: '54321',
      appointmentDate: '2023-12-30',
      appointmentTime: '08:30',
      reason: 'Follow-up',
    },
  ];

  const selectedPatientId = 1;
  const selectedPatient = patients.find(patient => patient.id === selectedPatientId);

  return (
    <div>
      {selectedPatient && <PatientForm patient={selectedPatient} />}
    </div>
  );
};

export default Form;
