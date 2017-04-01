/* Set up router */
const express = require('express');
const router = express.Router();
const assert = require('assert');

var user1;
var user2;

/* Configure router to log */
router.use(function(req, res, next){
	console.log('/' + req.method);
	next();
});

router.get('/', function(req, res){
	res.sendFile(__dirname + "/public/pad.html")
});

router.post('/', function(req, res){
	var test = req;
	console.log(req);
});
//
// var getContents = function(){
//
// }
// var getPads = function(user1, user2){
//
//
// }

module.exports = router;
