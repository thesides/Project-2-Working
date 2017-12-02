module.exports = function(app) {

	var UserId="Whitt";
	var storiesVal=[
		{storyName:"A Hogwarts Story", firstPost:"Once there was a young wizard named Harry...", storyId: 1}, 
		{storyName:"Voldemort: Part 1", firstPost:"There once was a dark Lord with followers called Death Eaters!", storyId: 2},
		{storyName:"Voldemort: Part 2", firstPost:"He looked like a misshapen jellybean", storyId: 3},
		// {storyName:"A Hogwarts Story", firstPost:"Once there was a young wizard named Harry...", storyId: 1}, 
		// {storyName:"Voldemort: Part 1", firstPost:"There once was a dark Lord with followers called Death Eaters!", storyId: 2},
		// {storyName:"Voldemort: Part 2", firstPost:"He looked like a misshapen jellybean", storyId: 3},	
	];	

	app.get("/", function(req, res) {
	    res.render("home");
	});

	app.get("/user", function(req, res) {
	    res.render("loggedInUserView", {userName: UserId, stories:storiesVal});
	});

	app.get("/story", function(req, res) {
	    res.render("story");
	});

	app.get("/post", function(req, res) {
	    res.render("post");
	});

	app.get("/archive", function(req, res) {
		res.render("post");
	});

	// app.get("/cms", function(req, res) {
	// 	res.render("story");
	// });

	// app.get('/auth/facebook',
	//   passport.authenticate('facebook'));

	// app.get('/auth/facebook/callback',
	//   passport.authenticate('facebook', { failureRedirect: '/login' }),
	//   function(req, res) {
	//     // Successful authentication, redirect home.
	//     res.redirect('/');
	//   });
}