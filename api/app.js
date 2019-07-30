// References:
// https://expressjs.com/en/starter/hello-world.html
// https://jilles.me/getting-the-express-app-js/

const express = require('express');
const app = express();

// Routes
const indexRouter = require('./router');

// Set all routes
app.use('/', indexRouter);

module.exports = app;
