import React from 'react';

const InfoPage = ({ data }) => {
  const renderTableRows = () => {
    return data.map((user, index) => (
      <div key={index} className="user-info-row">
        <div className="user-info-item">
          <strong>Legal Name:</strong> {user.name}
        </div>
        <div className="user-info-item">
          <strong>Date of Birth:</strong> {user.birthdate}
        </div>
        <div className="user-info-item">
          <strong>Marital Status:</strong> {user.marital}
        </div>
        <div className="user-info-item">
          <strong>Children:</strong> {user.children}
        </div>
      </div>
    ));
  };

  return (
    <div className="user-info-container">
      {renderTableRows()}
    </div>
  );
};

export default InfoPage;