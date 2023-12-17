const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const pool = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

  const insert = "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)";

  const values = [
    newUser.newUserFirstName,
    newUser.newUserLastName,
    newUser.newUserEmail,
    newUser.userPassword
  ]

   pool.query(insert, values, (err, result) => {
    if (!err) {
      res.sendFile(path.join(__dirname, '../views', 'success.html'));
    } else {
      res.status(401).json({ message: err.message});
    }
  })
});

app.post('/login', async (req, res) => {
  app.get()
  const { userEmail, userPassword } = req.body;
  const user = pool.users.find(user => user.newUserEmail === userEmail);

  if (user !== undefined) {
    const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (passwordMatch) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid password'});
    }
  } else {
    res.status(401).json({ message: 'User not found' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'log_in.html'))
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});