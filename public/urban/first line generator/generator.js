{
    /* <div id="display">
        </div>
        <button onclick="kas()">click me</button> */
}

//Input into the button and div where the story shoudl start, as a placeholder (maybe)

var firstSentence = [
    "My friend is dead and I can't scream because ",
    "I am lost in the middle of nowhere and it is pitch black, I ",
    "Someone is knocking on my door and it is 3 am, I ",
    "I just landed in New York",
];
//add jquery later
function kas() {
    var random = Math.floor(Math.random() * (firstSentence.length));
    document.getElementById("display").innerHTML = firstSentence[random];
}