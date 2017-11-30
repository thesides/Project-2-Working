$(document).ready(function(){
//Post Logic
	var newPost = function (body, StoryId) {
		this.body = body;
		this.StoryId = StoryId;
	};

	$(function(){

		var storyId = require("./crm.js");

		$("#createPost").on("click", function (event){

			event.preventDefault();
			
			$("#createPost").on("click", function (event) {

				var postBody = $("#newPost").val().trim();
				var story = storyId.storyId;

				var newPost = new newPost (postBody, story);

				$.ajax("/api/post", {
					type: "POST",
					data: newPost
				}).done(function (data) {

				//call get all posts
				console.log(data);
				window.location.href = "/post";
				});
			});

		});
	});

//Story Logic
var storyId;

$(function(){

	//Add a new story thread when user clicks create story button
	$("#createStory").on("click", function (event) {

		event.preventDefault();

		//new story title ask
		var newStory = {
			storyName: $("#newTitle").val().trim(),
		}

		//first post body text ask
		var postBody = $("#firstPost").val().trim()
		
		//sends new story title to Story Table in DB; this title gets a Story ID
		$.ajax("/api/story", {
			type: "POST",
			data: newStory
		}).done(function(data){
			
			console.log(data);
			
			//grab the story id so it can be sent to the post table with the body of the first post
			storyId = data.id
			
			//post request includes body of post and StoryId the post goes with
			var newPost = {
				body: postBody,
				StoryId: storyId
			}

			console.log(newPost);

			//ajax post request gets sent out along the /api/post route
			$.ajax("/api/post", {
				type: "POST",
				data: newPost
			}).then(function(data){
				console.log(data)

				//reload the create story page when done
				window.location.href = "/post";
				//export the storyID so it can be accessed in the post.js file
				module.exports.storyId = storyId;
			});
		});
	});

	//ajax get request to retrieve all stories and their posts
	$("#getStories").on("click", function (event) {
		$.get("/api/story", function (data){

			//render results to page
			console.log(data);

		});
	});

});	


});	