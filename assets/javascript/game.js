/*******************************************
VARIABLES
*******************************************/
var totalScore = 0;
var wins = 0;
var losses = 0;
var randomNum = 0;

/*******************************************
FUNCTIONS
*******************************************/

function getRandomInt(min, max) {
    /**
    * Returns a random integer between min (inclusive) and max (inclusive).
    **/
    var min = Math.ceil(19);
    var max = Math.floor(120);
    return randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

$(document).ready(function () {
    // display random Number chosen by computer
    getRandomInt();
    $("#random").text(randomNum);

    // display wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);





});