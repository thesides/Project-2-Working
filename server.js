var express = require("express")
var bodyParser = require("body-parser")
var exphbs = require("express-handlebars");
var session = require('express-session');
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/user/:name", function(req, res) {
    res.render("loggedInUserView");
});

app.get("/story", function(req, res) {
    res.render("story");
});

app.get("/post", function(req, res) {
    res.render("post");
});

// Static directory
app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/story-routes.js")(app);
require("./routes/post-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
