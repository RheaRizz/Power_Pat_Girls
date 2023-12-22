import React from "react";
import './home.css'

function Home() {
    return(
        <div className="app-content-page">
					<div className="row-one">
						<div className="col-one">
							<section className="doctor">
								<div className="text">
									<h3>Need a Doctor?</h3>
									<p>Book an appointment now</p>
								</div>
							</section>
						</div>
					</div>
					<div className="row-two">
						<h2 className="section-header">Explore</h2>
					</div>
					<div className="row-three">
						<div className="col-two">
							<section className="booking">
								<h3>Booking Instructions</h3>
							</section>
						</div>
					</div>
				</div>
    );
};

export default Home;