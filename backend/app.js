require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const { mongoDb } = require('./dbconnect/db.mongo');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

mongoDb();



const app = express();

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTENDPOINT]
  })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const index = require('./routes/index');
app.use('/', index);

// Uncomment this line for production
// app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;
