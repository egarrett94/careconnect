var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/index', function(req, res, next) {
	console.log('index route hit')
  request('http://poetrydb.org/title/Ozymandias/lines.json', function(error, response, body) {
  	poem = body;
  	res.send(poem);
  })
});

module.exports = router;
