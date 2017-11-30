var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");

module.exports = function (app) {
	
	// //this route creates a story thread using the story title data from story.js file
	// app.post("/api/story", function (req, res) {
	// 	console.log(req.body);

	// 	db.Story.create({
	// 		storyName: req.body.storyName,
	// 		UserId: req.body.UserId
	// 		//UserId: NEED TO GRAB USER ID FROM TABLE AND SEND WITH STORY CREATION REQUEST
	// 	}).done(function(data){
			
	// 		//returns the created story as a json object
	// 		res.json(data);

	// 		//render the created story to the page using res.render("index", data)

	// 	});
		
	// });

	

	// //need a get route to retrieve all story data and include all posts related to the story
	// app.get("/api/story", function (req, res) {
	// 	console.log(req.body);

	// 	db.Story.findAll({
	// 		include: [db.Post]
	// 	}).then(function (data) {
	// 		res.json(data);
	// 		//render results to the page using res.render("index", data)
	// 	});
	// });
}