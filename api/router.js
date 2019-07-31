// References:
// https://expressjs.com/en/guide/routing.html
// https://expressjs.com/en/api.html

const express = require('express');
const numberController = require('./controller/NumberController');

const router = express.Router();

//root index.html 
router.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
})

//main api route, for sending the number for conversion
router.get('/:value', numberController.getConvertedValue);

module.exports = router;
