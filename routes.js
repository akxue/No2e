/* Set up router */
const express = require('express');
const router = express.Router();
const assert = require('assert');

var user1 = 0;
var user2 = 0;

/* Configure router to log */
router.use(function(req, res, next){
	if(!user1)
		res.sendFile(__dirname + "/public/pad.html")
	console.log('/' + req.method);
	next();
});

router.get('/', function(req, res){
		res.sendFile(__dirname + "/public/pad.html")
});

router.post('/', function(req, res){
	var test = req;
	console.log(req.body);
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
