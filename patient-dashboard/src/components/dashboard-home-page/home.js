import React from "react";
import './home.css'

function Home() {
  return (
    <div className="background-1">
      {/* Row One */}
      <div className="button-row-1">
				<div className="appointment-col">
					<div className="text-area-1">
						<h3 className="title-1">Need a Doctor?</h3>
						<p>Book an Appointment now</p>
					</div>
				</div>
				<div className="booking-col">
					<div className="text-area-1">
						<h3 className="title-1">Booking Instructions</h3>
					</div>
				</div>
			</div>
    </div>
  );
}

export default Home;