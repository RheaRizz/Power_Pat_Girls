import React from 'react';
import './Booking-form.css';

export const BookingForm = () => {
  return (
    <div className='title'>
      <h1>Booking Form </h1>
      
      <div className='wrapper'>
        <form action=''>

          <h3>Name</h3>
          <div className="input-box">
            <input type='text' id='firstName' placeholder='First Name' required />
          </div>

          <div className="input-box">
            <input type='text' id='lastName' placeholder='Last Name' required />
          </div>

          <h3>Date of Birth</h3>
          <div className="input-box">
            <input type='date' id='dateOfBirth' placeholder='Date of Birth' required />
          </div>

          <h3>Gender</h3>
          <div className="input-box">
            <select id="gender" name="gender">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="LGBTQIA+">LGBTQIA+</option>
            </select>
          </div>

          <h3>Contact Details</h3>
          <div className="input-box">
            <input type="tel" id="phoneNum" placeholder='Phone Number' required/>
          </div>

          <div className="input-box">
            <input type="email" id="email" placeholder='Email Address' required/>
          </div>

          <h3>Address</h3>
          <div className="input-box">
            <input type="text" id="barangayStreet" placeholder='Barangay/Street' required/>
          </div>

          <div className="input-box">
            <input type="text" id="cityMunicipality" placeholder='City/Municipality' required/>
          </div>

          <div className="input-box">
            <input type="text" id="province" placeholder='Province' required/>
          </div>

          <div className="input-box">
            <input type="text" id="postalCode" placeholder='Postal Code' required/>
          </div>

          <h3>Appointment Details</h3>
          <div className="input-box">
            <input type="date" id="appointmentDate" placeholder='Choose preferred date' required/>
          </div>
          <div className="input-box">
            <input type="time" id="appointmentTime" placeholder='Choose preferred time' required/>
          </div>


          <button type='submit'> Submit </button>

        </form>
      </div>
    </div>
  )
}

export default BookingForm;