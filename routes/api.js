'use strict';

var express = require('express');
var router = express.Router();

router.use('/items', require('./items'));
router.use('/rooms', require('./rooms'));

module.exports = router;
