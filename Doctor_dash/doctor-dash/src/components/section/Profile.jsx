import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/Profile.css';

const doctorProfile = {
  firstName: 'Lois Kirsten',
  lastName: 'Alonsagay',
  image: require('../img/doc-profile.png'),
  degree: 'MD',
  category: 'General Medicine',
  yearStarted: '2020',
  specialty: 'Cardiology',

  hospital: {
    name: "Saint Paul's Hospital",
    accreditationNumber: '123456',
    roomWingBuilding: 'Room 300, Wing B, Building C',
    address: 'Iloilo, Philippines',
    postalCode: 'ABCDE',
  },
  clinic: {
    name: 'Cardio Clinic',
    accreditationNumber: '123456',
    roomWingBuilding: 'Room 300, Wing B, Building C',
    address: 'Iloilo, Philippines',
    postalCode: 'ABCDE',
  },
};

const Profile = () => {
  return (
    <div>
      <div className="profile-container">
        <div className="row">
          <div className="col-md-6">
            <div className="profile-details card mb-4">
              <div className="card">
                <div className="profile-card-body d-flex align-items-center">
                  <div className="doctor-image-container rounded-circle overflow-hidden">
                    <img src={require('../img/doc-profile.png')} alt="Doctor" className="doctor-image" />
                  </div>
                  <div className="text ml-5">
                    <p className="card-text name">{`Dr. ${doctorProfile.firstName} ${doctorProfile.lastName}, 
                                                        ${doctorProfile.degree}`}</p>
                    <p className="card-text specialty">{`${doctorProfile.category}`}</p>
                    <p className="card-text year">{`Year Started: ${doctorProfile.yearStarted}`}</p>
                    <p className="card-text subspecialty">{`Specialty: ${doctorProfile.specialty}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="additional-info-box mb-4 hospital">
              <div className="card">
                <div className="card-body">
                  <h5 className="hospi-title">Hospital Information</h5>
                  <div className="hospi-text ml-5">
                    <p className="card-text name">{`Name: ${doctorProfile.hospital.name}`}</p>
                    <p className="card-text number">{`Accreditation Number: ${doctorProfile.hospital.accreditationNumber}`}</p>
                    <p className="card-text room">{`Room/Wing/Building: ${doctorProfile.hospital.roomWingBuilding}`}</p>
                    <p className="card-text address">{`Address: ${doctorProfile.hospital.address}`}</p>
                    <p className="card-text postal code">{`Postal code: ${doctorProfile.hospital.postalCode}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="additional-info-box mb-4 clinic">
              <div className="card">
                <div className="card-body">
                  <h5 className="clinic-title">Clinic Information</h5>
                  <div className="clinic-text ml-5">
                    <p className="card-text name">{`Name: ${doctorProfile.clinic.name}`}</p>
                    <p className="card-text number">{`Accreditation Number: ${doctorProfile.clinic.accreditationNumber}`}</p>
                    <p className="card-text room">{`Room/Wing/Building: ${doctorProfile.clinic.roomWingBuilding}`}</p>
                    <p className="card-text address">{`Address: ${doctorProfile.clinic.address}`}</p>
                    <p className="card-text postal code">{`Postal code: ${doctorProfile.clinic.postalCode}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
