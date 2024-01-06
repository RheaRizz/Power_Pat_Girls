import React, { useState } from "react";
import "./home.css";
import BookingInstruction from "./booking-instructions";

function Home() {
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const handleBooking = () => {
    window.location.href="http://localhost:3000/"
  }

  const handleBookingClick = () => {
    setShowBookingPopup(true);
  };

  const handleClosePopup = () => {
    setShowBookingPopup(false);
  };

  return (
    <div className="background-1">
      {/* Row One */}
      <div className="button-row-1">
        <div className="appointment-col" onClick={handleBooking}>
          <div className="text-area-1">
            <h3 className="title-1">Need a Doctor?</h3>
            <p>Book an Appointment now</p>
          </div>
        </div>
        <div className="booking-col" onClick={handleBookingClick}>
          <div className="text-area-1">
            <h3 className="title-1" onClick={handleBookingClick}>
              Booking Instructions
            </h3>
          </div>
        </div>
      </div>

      {showBookingPopup && (
        <BookingInstruction handleClosePopup={handleClosePopup} />
      )}
    </div>
  );
}

export default Home;