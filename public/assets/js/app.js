$(document).ready(function(){
	// mobile friendly nav bar
	$(".button-collapse").sideNav();

	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('#login-modal').modal({
		dismissible: true,
		ready: function(modal, trigger) { // Callback for Modal open
        	console.log(modal, trigger);
		},
		complete: function() { 
			console.log("closed");
		} // Callback for Modal close		
	});


	$('#sign-up-modal').modal({
		dismissible: true,
		ready: function(modal, trigger) { // Callback for Modal open
        	console.log(modal, trigger);
		},
		complete: function() { 
			console.log("closed");
		} // Callback for Modal close		
	});	


	//login modal input validation
	$("#loginSubmit").on("click", function(event) {
		event.preventDefault();

	});

	$('#facebook-modal').modal({
		dismissible: true,
		ready: function(modal, trigger) {
			console.log(modal, trigger);
		},
		complete: function() {
			console.log("closed");
		}
	});

	//sign up modal input validation
	// $("#signUpSubmit").on("click", function() {

	// 	//grabs new user info and creates in users table of DB
	// 	var newUser = {
	// 		userName: $("#usernameSignUp").val().trim(),
	// 		password: $("#newPassword").val().trim(),
	// 		email: $("#passwordSignUp").val().trim()
	// 	}
	// 	console.log(newUser);

	// 	$.ajax("/api/users", {
	// 		type: "POST",
	// 		data: newUser
	// 	}).then(function(data){
	// 		console.log("created new author with id: " + data.id);
	// 		window.location.href = "/home";
	// 	});
	// });
});