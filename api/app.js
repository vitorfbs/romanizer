const express = require('express');

// Routes
const indexRouter = require('./routes/router');
const app = express();

// Set all routes
app.use('/', indexRouter);

module.exports = app;
