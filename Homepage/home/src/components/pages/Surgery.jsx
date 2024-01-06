// GeneralMedicine.js

import '../../App.css';
import '../styles/Cards.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Surgery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/surgery');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewProfile = (userId) => {
    // Add logic to navigate to the user's profile page or display profile information
    alert(`Viewing profile of user with ID: ${userId}`);
  };

  const handleBookNow = (userId) => {
    // Add logic to initiate the booking process
    alert(`Booking now for user with ID: ${userId}`);
  };

  return (
    <div>
      <h1>Surgery</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Degree Title Designation</th>
            <th>Year Started</th>
            <th>Specialty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.degree_title_designation}</td>
              <td>{item.year_started}</td>
              <td>{item.specialty}</td>
              <td>
                <button onClick={() => handleViewProfile(item.id)}>View Profile</button>
                <button onClick={() => handleBookNow(item.id)}>Book Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Surgery;
