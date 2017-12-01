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


});