/* Set up router */
const express = require('express');
const router = express.Router();
const assert = require('assert');

var user1content = "";
var user2content = "";
var user1 = 0;
var user2 = 0;

/* Configure router to log */
router.use(function(req, res, next){
	console.log('/' + req.method);
	next();
});

router.get('/', function(req, res){
		res.sendFile(__dirname + "/public/pad.html")
});

router.post('/', function(req, res){
	user1 = req.body.id;
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
