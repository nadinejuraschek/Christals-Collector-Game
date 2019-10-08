/*******************************************
VARIABLES
*******************************************/
var totalScore = 0;
var wins = 0;
var losses = 0;
var randomNum = 0;

var gemRed = 0;
var gemGreen = 0;
var gemPurple = 0;
var gemBlue = 0;

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

function getRandomGem(min, max) {
    /**
    * Returns a random integer between min (inclusive) and max (inclusive).
    **/
    var min = Math.ceil(1);
    var max = Math.floor(12);
    return randomGem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

function reset() {
    totalScore = 0;
}

function play() {
    // display random Number chosen by computer
    getRandomInt();
    $("#random").text(randomNum);

    // assign random Number to gems
    gemRed = getRandomGem();
    gemGreen = getRandomGem();
    gemPurple = getRandomGem();
    gemBlue = getRandomGem();
    // TEST
    console.log(gemRed);
    console.log(gemGreen);
    console.log(gemPurple);
    console.log(gemBlue);

    // display wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);

    // display total score
    $("#score").text(totalScore);

    // Onclick Events
    // Red Gem
    $("#gem-red").on("click", function () {
        if (totalScore > randomNum) {
            losses++;
            $("#message").text("You lost!");
            $("#losses").text(losses);
            reset();
        } else if (totalScore === randomNum) {
            wins++;
            $("#message").text("You won!");
            $("#wins").text(wins);
            reset();
        } else {
            totalScore += gemRed;
        }
        $("#score").text(totalScore);
    });
    // Green Gem
    $("#gem-green").on("click", function () {
        if (totalScore > randomNum) {
            losses++;
            $("#message").text("You lost!");
            $("#losses").text(losses);
            reset();
        } else if (totalScore === randomNum) {
            wins++;
            $("#message").text("You won!");
            $("#wins").text(wins);
            reset();
        } else {
            totalScore += gemGreen;
        }
        $("#score").text(totalScore);
    });
    // Purple Gem
    $("#gem-purple").on("click", function () {
        if (totalScore > randomNum) {
            losses++;
            $("#message").text("You lost!");
            $("#losses").text(losses);
            reset();
        } else if (totalScore === randomNum) {
            wins++;
            $("#message").text("You won!");
            $("#wins").text(wins);
            reset();
        } else {
            totalScore += gemPurple;
        }
        $("#score").text(totalScore);
    });
    // Blue Gem
    $("#gem-blue").on("click", function () {
        if (totalScore > randomNum) {
            losses++;
            $("#message").text("You lost!");
            $("#losses").text(losses);
            reset();
        } else if (totalScore === randomNum) {
            wins++;
            $("#message").text("You won!");
            $("#wins").text(wins);
            reset();
        } else {
            totalScore += gemBlue;
        }
        $("#score").text(totalScore);
    });
}

/*******************************************
GAME CODE
*******************************************/

$(document).ready(function () {
    play();
});