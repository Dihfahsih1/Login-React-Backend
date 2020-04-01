const express = require('express');
const app = express('');
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const mySQLStore = require('express-mysql-session')(session);
const router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json());
//database connection

const db =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'myapp'
});
db.connect(function(err){
  if(err){
    console.log('DB error');
      throw err;
      return false;
  }
  else {
    console.log('Connected Successfully');
  }
});
