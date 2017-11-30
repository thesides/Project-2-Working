var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");

module.exports = function (app) {

	//this route creates the initial post when a story is created
	app.post("/api/post", function (req, res) {

		console.log(req.body);

		//creates a post that includes the post text (body) and the related story ID
		db.Post.create({
			body: req.body.body,
			StoryId: req.body.StoryId
		}).done(function(data){
			res.json(data);
		});
	});

	//the above route can also be used for adding a post to an existing story as long as the route is still /api/post


}