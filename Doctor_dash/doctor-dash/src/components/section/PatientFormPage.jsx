// PatientFormPage.js
import React from 'react';
import PatientForm from './PatientForm';

const PatientFormPage = ({ match }) => {
  const { patientId } = match.params;

  // Fetch patient data based on patientId if needed

  return (
    <div>
      <h2>Patient Form</h2>
      <PatientForm selectedPatientId={parseInt(patientId)} />
    </div>
  );
};

export default PatientFormPage;
