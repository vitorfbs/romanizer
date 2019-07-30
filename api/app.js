const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const handler = require('./errors/handler');

// Routes
const indexRouter = require('./routes/router');
const app = express();

// All midwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(handler.errorHandlerApi);
app.use(cors());

// Set all routes
app.use('/', indexRouter);

module.exports = app;
