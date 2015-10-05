var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', require('./users'));
router.use('/recipes', require('./recipes'));

module.exports = router;