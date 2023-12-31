// MedicalPage.js
import React from 'react';

const MedicalPage = ({ data }) => {
  const renderTable = () => {
    return (
      <table className="medical-info-table">
        <thead>
          <tr>
            <th>Height</th>
            <th>Weight</th>
            <th>Blood Type</th>
						<th>Condition</th>
            <th>Medication</th>
            <th>Allergy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data[0].height}</td>
            <td>{data[0].weight}</td>
            <td>{data[0].blood}</td>
						<td>{data[0].condition}</td>
            <td>{data[0].medication}</td>
            <td>{data[0].allergy}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return <div className="medical-info-container">{renderTable()}</div>;
};

export default MedicalPage;
