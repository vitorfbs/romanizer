/*
    References:
        https://nodejs.org/api/http.html
        https://nodejs.org/api/https.html
*/

//NodeJS http / https require

const http = require("http");

//const https = require("https");

//Main js file (index.js) require

const index = require("./api/index");

// PORT constant. Change to available port if needed.

const PORT = process.env.PORT || 4567;

// Server initialization

const server = http.createServer(index);
server.listen(PORT);

// CMD logs on npm start / npm run development commands

//Success
server.on('listening', function () { 
    return console.log(`Server is now running. \n Port: ${PORT} \n Environment: https://localhost:${PORT}`); 
});

//Failure
server.on('error', function (error) { 
    return console.log(`An error has occured. check log for details. \n ${error}`); 
});

