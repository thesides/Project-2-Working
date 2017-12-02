var express = require("express")
var bodyParser = require("body-parser")
var exphbs = require("express-handlebars");
var path = require("path");
// var session = require('express-session');
var app = express();
var PORT = process.env.PORT || 8080;
var passport = require("passport");
var FacebookStrategy = require("passport-facebook").Strategy;

var db = require("./models");

// passport-facebook code

passport.use(new FacebookStrategy({
    clientID: 163050734441007,
    clientSecret: "a0aeedaba02c2bc8bcc27cd504276de6",
    clientToken: "f76337563235e87ffd7120e21d158dd0",
    callbackURL: "http://localhost/auth/facebook/callback",
    profileFields: ['displayName', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/routes.js")(app);

// Static directory
app.use(express.static("public"));



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
