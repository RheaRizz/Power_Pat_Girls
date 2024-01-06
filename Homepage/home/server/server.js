const express = require('express');
const { Pool } = require('pg');
const app = express();
const cors = require('cors');
const port = 3003;

app.use(cors());

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'fmagsael018',
  database: 'power pat'
});


app.get('/api/pediatrics', async (req, res) => {
  try {
    
    const query = "SELECT * FROM doctors WHERE specialty='Pediatrics'";

    
    const result = await pool.query(query);

    
    const jsonData = result.rows;
    console.log(jsonData);

  
    res.setHeader('Content-Type', 'application/json');
    res.json(jsonData);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/surgery', async (req, res) => {
  try {
    
    const query = "SELECT * FROM doctors WHERE specialty='Surgery'";

    
    const result = await pool.query(query);

    
    const jsonData = result.rows;
    console.log(jsonData);

    
    res.setHeader('Content-Type', 'application/json');
    res.json(jsonData);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/dentistry', async (req, res) => {
  try {
    
    const query = "SELECT * FROM doctors WHERE specialty='Dentistry'";

    
    const result = await pool.query(query);

    
    const jsonData = result.rows;
    console.log(jsonData);

    
    res.setHeader('Content-Type', 'application/json');
    res.json(jsonData);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/genmed', async (req, res) => {
  try {
   
    const query = "SELECT * FROM doctors WHERE specialty='General'";

    
    const result = await pool.query(query);

    
    const jsonData = result.rows;
    console.log(jsonData);

    
    res.setHeader('Content-Type', 'application/json');
    res.json(jsonData);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});