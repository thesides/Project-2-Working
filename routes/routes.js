var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");
var passport = require("passport");

var UserId;
var StoryId;

module.exports = function (app) {

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/user", function(req, res) {
    res.render("loggedInUserView", res);
});

app.get("/story", function(req, res) {
    res.render("story");
});

};

// app.get("/post", function(req, res) {
//     res.render("createPost");
// });

// app.get("/archive", function(req, res) {
// 	res.render("post");
// });

// app.get("/cms", function(req, res) {
// 	res.render("story");
// });


// };