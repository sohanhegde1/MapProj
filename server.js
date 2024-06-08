const express=require('express');
const path=require('path');
const app=express();
const mysql=require('mysql');

app.use(express.json);
const db=mysql.createConnection({
    user: 'sohan hegde',
    host: 'sohans-MacBook-Air.local',
    password: 'maxROSling(^#24',
    database: 'db2'
})
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
app.listen(4001,()=>{
    console.log('server is running');
})