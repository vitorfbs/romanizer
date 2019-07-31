// References:
// https://expressjs.com/en/starter/hello-world.html
// https://jilles.me/getting-the-express-app-js/

const express = require('express');
const app = express();

// Requires the routing file
const indexRouter = require('./router');

// Setup root router for the application
app.use('/', indexRouter);

module.exports = app;
