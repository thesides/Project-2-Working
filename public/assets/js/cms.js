$(document).ready(function(){

	var userName;
	var name;

	//Add a new user button listen for when a new user is submitted
	$("#signUpSubmit").on("click", handleNewUserSubmit);

	//click listener for create a story button
	$("#createStory").on("click", handleNewStorySubmit);

	//click listener for retrieve all stories button
	//$("#getStories").on("click", getAllStories);

	//click listener for logout button
	$("#logout").on("click", logout);

	//click listener for create new post for existing story button
	$("#createPost").on("click", handleNewPostSubmit);

	//click listener for login attempt of existing user
	$("#loginSubmit").on("click", handleLogin);

	////////////////////////////
	//click listeners go here//
	//////////////////////////

	function handleNewStorySubmit (event) {
		event.preventDefault();

		//if there is no title or initial post then, return
		if (!$("#newTitle").val().trim() || !$("#firstPost").val().trim()) {
	      return;
	    }

	    	//new story title ask
			var newStoryTitle = $("#newTitle").val().trim();
			
			//first post body text ask
			var postBody = $("#firstPost").val().trim();

			name = name;

			if (name === undefined) {
				name = userName;
			};

			//call the create story ajax call function below; passing in the title and initial post (postBody) as the data to send off
			createNewStory(newStoryTitle, postBody, name);
	};

	function createNewStory (title, firstPost, name, userId) {
		//Add a new story thread when user clicks create story button
			
			//sends new story title to db and gets back a story id to pass to the post
			$.ajax("/api/story/" + name, {
				type: "POST",
				data: {
					storyName: title,
					//UserId: userId
				}
			}).done(function(dataSent){
				
				//window.location.href = "/user/" + userName;
				//grab the story id so it can be sent to the post table with the body of the first post
				var storyId = dataSent.id

				var userId = dataSent.UserId

				//ajax post request gets sent out along the /api/post route
				$.ajax("/api/post/", {
					type: "POST",
					data: {
						body: firstPost,
						//StoryId: storyId,
						//UserId: userId
					}
				}).then(function(data){
					console.log(data)

					getAllStories();
					//after a story is created take us to the create new post page
					if (name === undefined) {
						window.location.href = "/user/" + userName;
					}
					else {
						window.location.href = "/user/" + name;
					};
					
				});
			});
	};

	function handleNewPostSubmit (event) {
		event.preventDefault();

		//if the post is empty return
		if (!$("#newPost").val().trim()) {
	      return;
	    }
	    	//grabs the text in the new post field
	    	var postBody = $("#newPost").val().trim();

	    	var storyId; //grab this from handlebars data element when clicked

	    	var userId; //grab this from the handlebars data element when clicked

	    	//call function to send ajax call creating new post with postBody as the data being sent
	    	createNewPost(postBody, 1, 1); // the 1's are hard coded and will be replaced with handlbar click listeners

	};

	function createNewPost (postBody, storyId, userId) {
		$.ajax("/api/post", {
					type: "POST",
					data: {
						body: postBody,
						StoryId: storyId,
						UserId: userId
					}
				}).then(function (data) {

				//call get all posts
				console.log(data);
				//window.location.href = "/";
				});
	};

	function getAllStories (){
		//ajax get request to retrieve all stories and their posts
		$.get("/api/story", function (dataReceived){
			console.log(dataReceived);
		});
	};


//Function for User Creation
	function handleNewUserSubmit (event) {
		event.preventDefault();

		//if they didn't enter anything, return
		if (!$("#usernameSignUp").val().trim()) {
	      return;
	    };

		//grabs new user info and creates in users table of DB
		var newUser = {
			name: $("#usernameSignUp").val().trim(),
			email: $("#emailSignUp").val().trim(),
			password: $("#passwordSignUp").val().trim()
		};
		
		//call create user function below
		createUser(newUser);
	}

	function createUser (newUser) {

		name = newUser.name;
		//sends ajax call along route /api/newuser; data being sent is what is passed in for newUser
		$.ajax("/api/newuser", {
				type: "POST",
				data: newUser
			}).then(function(dataSent){
				console.log(dataSent);
				window.location.href = "/user/" + name;
				name = dataSent.name;
			});
	};

	function handleLogin (event) {

		event.preventDefault();

		if (!$("#email-login").val().trim() || !$("#password-login").val().trim()) {
	      return;
	    };

	    var loginInfo = {
	    	email: $("#email-login").val().trim(),
	    	password: $("#password-login").val().trim()
	    };

	    loginUser(loginInfo);

	}

	function loginUser (loginUserInfo) {

		userName = loginUserInfo.email;

		$.ajax("/api/login/" + userName, {
			type: "POST",
			data: loginUserInfo
		}).done(function (error, response) {

			if (error) {
				console.log(error);
			}
			//var name = loginUserInfo.name;
			//window.location.href = "/user/" + name;
			userName = response.userName;
			takeMeToMyPage(userName);
			
			//console.log(response);
			
		});

	};

	function takeMeToMyPage (name) {
		$.get("/user/" + name, function (data){
			window.location.href = "/user/" + name;
		});
	};

	function getAllUsers () {
		//ajax get request to retrieve all users
		$.get("/api/allusers", function (dataReceived){
			console.log(dataReceived);
		});
	};



	function logout () {
		$.get("/", function (){
			window.location.href = "/";
		});
		
	};



});	