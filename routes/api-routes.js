var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");

var UserId;
var StoryId;

module.exports = function (app) {

	//find all users and return them
	app.get("/api/allusers", function (req, res) {

		db.User.findAll({}).then(function(allUsers){
			res.json(allUsers);
		});
	});

	//need a get route to retrieve all story data and include all posts related to the story
	app.get("/api/story", function (req, res) {
		console.log(req.body);

		db.Story.findAll({
			include: [db.Post]
		}).then(function (data) {
			res.json(data);
			//render results to the page using res.render("index", data)
		});
	});
	
	//this creates a new user and password
	app.post("/api/newuser", function (req, res) {
		console.log(req.body);

		db.User.create({
			userName: req.body.name,
			password: req.body.password,
			email: req.body.email
		}).then(function(data){
			res.send(data);
			console.log(data);
			console.log("---------------");
			console.log(data.id);

			UserId = data.id;
		});
	});

	//this route creates a story thread using the story title data from story.js file
	app.post("/api/story", function (req, res) {
		console.log(req.body);

		db.Story.create({
			storyName: req.body.storyName,
			UserId: UserId
			//req.body.UserId
			//UserId: NEED TO GRAB USER ID FROM TABLE AND SEND WITH STORY CREATION REQUEST
		}).done(function(data){
			
			//returns the created story as a json object
			res.json(data);
			console.log("1-1-1-1-1-1-1-1-1-1-1");
			console.log(data.id);

			StoryId = data.id;

			//render the created story to the page using res.render("index", data)

		});
		
	});

	app.post("/api/post", function (req, res) {

		console.log(req.body);

		//creates a post that includes the post text (body) and the related story ID
		db.Post.create({
			body: req.body.body,
			StoryId: StoryId,
			UserId: UserId
			//UserId: NEEDS TO BE GRABBED FROM USER TABLE
		}).done(function(data){
			res.json(data);
		});
	});

	//login attempt checks to see if account with same password exists in user table
	app.post("/api/login", function (req, res) {
		
		console.log("-2-2-2-2-2-2-2-2");
		console.log(req.body);

		db.User.findOne({
			where: {
				password: req.body.password
			}
		}).done(function (data) {
			
			res.json(data);
			//if there was no data returned (aka incorrect info recevied from frontend breaking the request)
			//then log OOPSS!! 
			if (!data) {
				console.log("OOPPPSS!!!");
			};

			//Otherwise tell me the name of the user you found
			console.log("Found User " + data.userName);

		});
	});


}