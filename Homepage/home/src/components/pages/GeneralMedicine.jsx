// GeneralMedicine.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../App.css';
import loweesImage from '../../components/images/lowees.jpg';
import '../styles/Cards.css';


const GeneralMedicine = () => {
  const doctors = [
    {
      name: 'Dr. Lois Kirsten Besmonte Alonsagay',
      specialty: 'General Medicine',
      availability: 'Monday-Friday, 9 AM - 5 PM',
      imageUrl: loweesImage, 
    },
    {
      name: 'Dr. Lois Kirsten Besmonte Alonsagay',
      specialty: 'General Medicine',
      availability: 'Monday-Friday, 9 AM - 5 PM',
      imageUrl: loweesImage, 
    },
    {
      name: 'Dr. Lois Kirsten Besmonte Alonsagay',
      specialty: 'General Medicine',
      availability: 'Monday-Friday, 9 AM - 5 PM',
      imageUrl: loweesImage, 
    },
  ];

  return (
    <div>

      {doctors.map((doctor, index) => (
        <Card key={index} className="mb-4 custom-card">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-12 mb-3 mb-md-0 d-flex align-items-start">
              <div className="profile-pic mr-3">
                <Card.Img src={doctor.imageUrl} alt={doctor.name} />
              </div>
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div>
                    <Card.Body className="profile-text">
                      <Card.Title className="mb-0 doctor-name" style={{ maxWidth: '120px', fontSize: '15PX' }}>{doctor.name}</Card.Title>
                      <Card.Text className="text-muted">{doctor.specialty}</Card.Text>
                    </Card.Body>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <Card.Body className="profile-time">
                    <Card.Text><span>Available Schedule:</span> {doctor.availability}</Card.Text>
                  </Card.Body>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 book-button">
                  <Card.Body className="d-flex justify-content-end view-book-button">
                    <Button variant="link" className="mr-2">View Profile</Button>
                    <Button variant="link">Book Now</Button>
                  </Card.Body>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GeneralMedicine;
