const express = require('express');
const app = express('');
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const mySQLStore = require('express-mysql-session')(session);
const router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json());
console.log("testing server")
