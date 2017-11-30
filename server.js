var express = require("express")
var bodyParser = require("body-parser")
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/home", function(req, res) {
    res.render("loggedInUserView");
});

app.get("/cms", function(req, res) {
    res.render("cms");
});

// Static directory
app.use(express.static("public"));

require("./routes/user-routes.js")(app);
require("./routes/story-routes.js")(app);
require("./routes/post-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
