import React from "react";
import './home.css'

function Home() {
  return (
    <div className="background">
      {/* Row One */}
      <div className="button-row">
				<div className="appointment-col">
					<div className="text-area">
						<h3 className="title">Need a Doctor?</h3>
						<p>Book an Appointment now</p>
					</div>
				</div>
				<div className="booking-col">
					<div className="text-area">
						<h3 className="title">Booking Instructions</h3>
					</div>
				</div>
			</div>
    </div>
  );
}

export default Home;