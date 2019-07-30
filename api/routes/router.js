const express = require('express');
const numberController = require('../controller/NumberController');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('root')
})

router.get('/:value', numberController.getConvertedValue);

module.exports = router;
