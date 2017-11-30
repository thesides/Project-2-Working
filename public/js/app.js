$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('#login-modal').modal({
		dismissible: true,
		ready: function(modal, trigger) { // Callback for Modal open
        	alert("Ready");
        	console.log(modal, trigger);
		},
		complete: function() { 
			alert('Closed'); 
		} // Callback for Modal close		
	});


	$('#sign-up-modal').modal({
		dismissible: true,
		ready: function(modal, trigger) { // Callback for Modal open
        	alert("Ready");
        	console.log(modal, trigger);
		},
		complete: function() { 
			alert('Closed'); 0
		} // Callback for Modal close		
	});	


	//login modal input validation
	$("#loginSubmit").on("click", function(event) {
		event.preventDefault();

	});

	// //sign up modal input validation
	// $("#signUpSubmit").on("click", function() {

	// 	//grabs new user info and creates in users table of DB
	// 	var newUser = {
	// 		userName: $("#usernameSignUp").val().trim(),
	// 		password: $("#passwordSignUp").val().trim(),
	// 		email: $("#emailSignUp").val().trim()
	// 	}
	// 	console.log(newUser);

	// 	$.ajax("/api/newuser", {
	// 		type: "POST",
	// 		data: newUser
	// 	}).then(function(data){
	// 		console.log(data);
	// 	});
	// });
});