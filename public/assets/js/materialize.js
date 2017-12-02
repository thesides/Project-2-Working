$(document).ready(function() {
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

    ////Plot Generator////
    //Delete button from HTML and let run the setInterval EVENTUALLY
    document.getElementById('load-urban').addEventListener("click", printPlot, false);
    var message = '';
    var viewedPlots = [];

    //Array to hold plots and name of characters
    var plots = [
        {
            plot: "Your main character is a man in his early forties, who is very foolish. The story begins on a social housing estate. A neighbour is involved in a love triangle. It's a story about a life or death decision. Your character realises no-one will listen to what s/he's saying.",
            name: "The name of your character is Graham"
        },
        {
            plot: "Your main character is a man in his fifties, who is very aggressive. The story begins in a cellar. A baby is born in mysterious circumstances. It's a story about rivalry. Your character takes on the role of protector..",
            name: "The name of your character is Leo"
        },
        {
            plot: "Your main character is a young man in his late teens, who can be quite timid. The story begins in a restaurant. A relationship breaks up. It's a story about madness. Your character attempts to keep a low profile.",
            name: "The name of your character is Ryan",
        },
        {
            plot: "Your main character is a woman in her fifties, who is very selfish. The story begins in a hair salon. A reunion takes place. It's a story about rags to riches. Your character has to do some quick thinking to keep ahead.",
            name: "The name of your character is Hope",
        },
        {
            plot: "Your main character is a man in his late forties, who is very overbearing. The story begins on a university campus. A family get-together is arranged. It's a story about learning from mistakes. Your character is determined to get to the truth.",
            name: "The name of your character is Mike",
        },
        {
            plot: "Your main character is a man in his eighties, who is very foolish. The story begins at a swimming pool. A reunion takes place. It's a story about stubbornness. Your character has to make a lot of changes.",
            name: "The name of your character is Donald",
        },
        {
            plot: "Your main character is a woman in her early thirties, who can be quite inspirational. The story begins at an airport. A wedding anniversary is forgotten. It's a story about justice. Your character bites off more than s/he can chew.",
            name: "The name of your character is Natalia"
        },
        {
            plot: "Your main character is a man in his early thirties, who can be quite foolish. The story begins in a nightclub. Someone is haunted by a traumatic experience at sea. It's a story about a countdown to disaster. Your character takes on the role of protector.",
            name: "The name of your character is John"
        },
        {
            plot: "Your main character is a woman in her late thirties, who is very bold. The story begins in an alley. Someone is wrongly accused of a crime. It's a story about the future. Your character sets out to change everyone's opinion.",
            name: "The name of your character is Adrienne"
        },
        {
            plot: "Your main character is a man in his early forties, who is very adventurous. The story begins on a desert island. A town is snowed in at Christmas. It's a story about sacrifice. Your character discovers some unpleasant truths.",
            name: "The name of your character is Jonathan"
        },
        {
            plot: "Your main character is a man in his late forties, who can be quite annoying. The story begins in a cave. A soldier returns home from war. It's a story about friendship. Your character approaches the situation extremely carefully.",
            name: "The name of your character is Christian"
        },
        {
            plot: "Your main character is a woman in her early forties, who is very naive. The story begins in a psychiatric hospital. Someone is badly injured in a car crash. It's a story about loss of innocence. Your character upsets a lot of people.",
            name: "Sarah"
        },
        {
            plot: "Your main character is a man in his late forties, who can be quite lively. The story begins on a yacht. Someone is badly injured in a car crash. It's a story about the supernatural. Your character has to make a lot of changes.",
            name: "The name of your character is Bruce"
        },
        {
            plot: "Your main character is a man in his sixties, who is very secretive. The story begins in a lift. Someone is fired from a job. It's a story about a countdown to disaster. Your character attempts to keep a low profile.",
            name: "The name of your character is Bernie"
        }
    ];

    function print(plot) {
        var outputDiv = document.getElementById('urban-inspirate');
        outputDiv.innerHTML = plot;
    }
    // Function to get a random plot
    function getRandomPlot() {
        var randomPlot = Math.floor(Math.random() * (plots.length));
        var splicedPlot = plots.splice(randomPlot)[0];
        viewedPlots.push(splicedPlot);
        if (plots.length === 0) {
            plots = viewedPlots;
            viewedPlots = [];
        }
        return splicedPlot;
    }

    // Function to take previously selected random object from array & print to screen
    function printPlot() {
        var plots = getRandomPlot();
        message = '<p class="plot">' + plots.plot + '</p>';
        message += '<p class="name">' + plots.name;
        print(message);
    }
    ///End Plot Generator////

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