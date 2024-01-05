import React from 'react';

const ContactPage = ({ data }) => {
  const renderTableRows = () => {
    return data.map((user, index) => (
      <div key={index} className="user-contact-row">
        <div className="user-contact-item">
          <strong>Home Address:</strong> {user.address}
        </div>
        <div className="user-contact-item">
          <strong>Mobile Number:</strong> {user.mobile}
        </div>
        <div className="user-contact-item">
          <strong>Email:</strong> {user.email}
        </div>
      </div>
    ));
  };

  return (
    <div className="user-contact-container">
      {renderTableRows()}
    </div>
  );
};

export default ContactPage;