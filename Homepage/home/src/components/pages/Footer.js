import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } 
         from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="py-3 footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>General</h5>
            <ul>
              <li style={{ listStyle: 'none' }}><Link to="/about" 
                style={{ color: 'black', textDecoration: 'none' }}
                  >About Us</Link></li>
              <li style={{ listStyle: 'none' }}><Link to="/contact" 
                style={{ color: 'black', textDecoration: 'none' }}
                  >Contact Us</Link></li>
              <li style={{ listStyle: 'none' }}><Link to="/terms" 
                style={{ color: 'black', textDecoration: 'none' }}
                  >Terms and Conditions</Link></li>
              <li style={{ listStyle: 'none' }}><Link to="/privacy" 
                style={{ color: 'black', textDecoration: 'none' }}
                  >Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-6">
            <h5>Social Media</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://www.instagram.com/" target="_blank" 
                  rel="noopener noreferrer">
                    <div className="icon-circle">
                      <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://www.youtube.com/" target="_blank" 
                  rel="noopener noreferrer">
                    <div className="icon-circle">
                      <FontAwesomeIcon icon={faYoutube} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
