const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Create connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ark@sql#323!',
  database: 'travelApp'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Endpoint to add a user
app.post('/api/signup', (req, res) => {
  const { name, email, password, phone, dob } = req.body;
  const query = 'INSERT INTO users (name, email, password, phone, dob) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, password, phone, dob], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User added successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});