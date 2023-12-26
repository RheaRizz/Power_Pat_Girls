const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const pool = require('./database');

const app = express();
const port = 3000;

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../views')));

//ROUTES//
app.post('/create-account', async (req, res) => {
  const { newUserFirstName, newUserLastName, newUserEmail, newPassword, userType } = req.body;
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const newUser = {
    newUserFirstName,
    newUserLastName,
    newUserEmail,
    userPassword: hashedPassword,
    userType
  };

  const insert = "INSERT INTO users (firstname, lastname, email, password, usertype) VALUES ($1, $2, $3, $4, $5)";

  const values = [
    newUser.newUserFirstName,
    newUser.newUserLastName,
    newUser.newUserEmail,
    newUser.userPassword,
    newUser.userType
  ]

   pool.query(insert, values, (err, result) => {
    if (!err) {
      let redirectURL;
      if (newUser.userType == 'patient') {
        req.session.newUserFirstName = newUserFirstName;
        req.session.newUserLastName = newUserLastName;
        redirectURL = '/patient-personal_info';
      } else if (newUser.userType == 'doctor') {
        req.session.newUserFirstName = newUserFirstName;
        req.session.newUserLastName = newUserLastName;
        redirectURL = '/doctor-personal_info.html'
      }
      res.redirect(redirectURL);
    } else {
      res.status(401).json({ message: err.message});
    };
  });
});

app.post('/patient-personal_info', async (req, res) => {
  const { gender, birthday, phone, province, city_municipality, barangay, postal } = req.body;
  const firstName = req.session.newUserFirstName;
  const lastName = req.session.newUserLastName;
  const newPatient = [
    firstName,
    lastName,
    gender,
    birthday,
    phone,
    province,
    city_municipality,
    barangay,
    postal
  ]

  const patientQuery = "INSERT INTO patients (firstname, lastname, gender, birthday, phone, province, city_municipality, barangay, postal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

  pool.query(patientQuery, newPatient, (err, result) => {
    if (!err) {
      res.sendFile(path.join(__dirname, '../views', 'success.html'));
    } else {
      res.status(401).json({ message: err.message });
    }
  });
});

app.post('/doctor-personal_info', async (req, res) => {
  const { degree_title_designation, year_started, specialty } = req.body;
  const firstName = req.session.newUserFirstName;
  const lastName = req.session.newUserLastName;
  const newDoctor =[
    firstName,
    lastName,
    degree_title_designation,
    year_started,
    specialty
  ]

  const doctorQuery = "INSERT INTO doctors (firstname, lastname, degree_title_designation, year_started, specialty) VALUES ($1, $2, $3, $4, $5)";

  pool.query(doctorQuery, newDoctor, (err, result) => {
    if (!err) {
      req.session.firstName = firstName;
      req.session.lastName = lastName;
      req.session.degree_title_designation = degree_title_designation;
      req.session.year_started = year_started;
      req.session.specialty = specialty;
      res.redirect('/doctor-med_instution');
    } else {
      res.json({ message: err.message });
    }
  })
});

app.post('/doctor-med_institution', async (req, res) => {
  const institution = req.body.institution;

  const isntitutionQuery = "INSERT INTO doctors (institution) VALUES ($1)";
  const values = [institution];

  pool.query(isntitutionQuery, values, (err, result) =>{
    if (!err) {
      req.session.institution = institution;
      if (institution == 'hospital') {
        res.redirect('/doctor-hospital');
      } else if (institution == 'clinic') {
        res.redirect('doctor-clinic');
      }
    } else {
      res.json({ message: err.message });
    }
  });
});

app.post('/doctor-hospital', async (req, res) =>{
  const { name, accreditation, location, address, postal} = req.body;
  const type = req.session.institution;
  const hospitalQuery = "INSERT INTO hospitals (name, accreditation, location, address, postal, type) VALUES ($1, $2, $3, $4, $5, $6)";
  const newInstitution = [
    name,
    accreditation,
    location,
    address,
    postal,
    type
  ]

  const medInstitutionQuery = "INSERT INTO med_institution (name, type) VALUES ($1, $2)"
  const values = [
    name,
    type
  ]

  pool.query(hospitalQuery, newInstitution, (err, result) =>{
    if (!err) {
      pool.query(medInstitutionQuery, values, (err, result) => {
        if (!err) {
          res.sendFile(path.join(__dirname, '../views', 'success.html'));
        } else {
          res.json({ message: err.message });
        }
      });
    } else {
      res.json({ message: err.message });
    }
  });
});

app.post('/doctor-clinic', async (req, res) => {
  const { name, accreditation, location, address, postal, contactName, phone, email } = req.body;
  const type = req.session.institution;

  const clinicQuery = "INSERT INTO clinics (name, type, accreditation, location, address, postal)"
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { rows: users } = await pool.query('SELECT * FROM USERS');
  const user = users.find(user => user.email === email);

  if (user !== undefined) {
    if (password && user.password) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json({ message: 'Login successful' }); // change logic for redirecting for either patient or doctor dash
      } else {
        res.status(401).json({ message: 'Invalid password'});
      }
    } else {
      res.status(401).json({ message: 'Password is undefined'});
    }
  } else {
    res.status(401).json({ message: 'User not found' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'log_in.html')); // change to homepage
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'log_in.html'));
});

app.get('/create-account', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'create-acc.html'));
});

app.get('/patient-personal_info', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'patient-personal_info.html'));
});

app.get('/doctor-personal_info', (req, res) =>{
  res.sendFile(path.join(__dirname, '../views', 'doctor-personal_info.html'));
});

app.get('doctor-med_institution', (req, res) =>{
  res.sendFile(path.join(__dirname, '../views', 'doctor-med_institution.html'));
});

app.get('/doctor-hospital', (req, res) =>{
  res.sendFile(path.join(__dirname, '../views', 'doctor-hospital.html'));
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});