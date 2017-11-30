var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");

module.exports = function (app) {

	//find all users and return them
	app.get("/api/allusers", function (req, res) {

		db.User.findAll({}).then(function(allUsers){
			res.json(allUsers);
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
		});
	});
}