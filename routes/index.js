var express = require('express'),
	router 	= express.Router();

// include controller
var Index  = require('../controllers/index.js');

router.get('/', Index.showHomePage);


module.exports = router;
