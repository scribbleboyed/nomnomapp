var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', require('./users'));
router.use('/recipes', require('./recipes'));
router.use('/cookbooks', require('./cookbooks'));

/* API Route */
router.use('/api', require('./api'));

module.exports = router;