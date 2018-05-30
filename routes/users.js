var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

/* GET users listing. */
router.get('/users', function(req, res, next) {
	console.log('fuck is here dude')
  res.send(
  	[{
	  	id: 1,
	  	username: "bip"
	  }, {
		id: 2,
		username: "bop"
	  }]
	)
});

module.exports = router;
