// Home.js
import React from "react";
import "../../App.css"; 
import Footer from "./Footer";
import CardBox from "./CardBox"; 
import { Link } from "react-router-dom"; 
import generalmedicine from "../images/generalmedicine.png";
import pediatrics from "../images/pediatrics.png";
import surgery from "../images/surgery.png";
import dentalcare from "../images/dentalcare.png";

function Home() {
  return (
    <div className="body">
      {/* First Section with Tagline, Search Bar, and Picture */}
      <section className="first-section bg-primary">
        <div className="container first-section-container">
          <div className="row align-items-center">
            {/* Centered content with Tagline and Search Bar */}
            <div className="col-md-12 text-center">
              <div className="tagline text-left">
                <h2>Your Doctor <br />Your Time, Your <br />Health</h2>
                <p>Book easy, rest easy!</p>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section with Card Boxes */}
      <section className="second-section">
        <div className="container">
          <div className="title-container">
            <h2>TOP SPECIALTIES</h2>
            <p>"Discover Specialized Care for You."</p>
          </div>

          <div className="card-box-container" >
            {/* Card Box 1: General Medicine */}
            <Link to="/general-medicine"  className="link-no-underline" >
              <CardBox
                title = "General Medicine"
                imageSrc= {generalmedicine}
              />
            </Link>

            {/* Card Box 2: Pediatrics */}
            <Link to="/pediatrics"  className="link-no-underline">
              <CardBox
                title="Pediatrics"
                imageSrc= {pediatrics}
              />
            </Link>

            {/* Card Box 3: Surgery */}
            <Link to="/surgery"  className="link-no-underline">
              <CardBox
                title="Surgery"
                imageSrc= {surgery}
              />
            </Link>

            {/* Card Box 4: Dental Care */}
            <Link to="/dental-care"  className="link-no-underline">
              <CardBox
                title="Dental Care"
                imageSrc= {dentalcare}
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;