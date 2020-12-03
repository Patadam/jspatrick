// load document references
var topRightContent = document.querySelector("#content-distance");
var centerContent = document.querySelector("#content-hit-distance");
var contentSpan = document.querySelector("#content-distance-span");
var contentSub = document.querySelector(".sub-info");
var clubList = document.querySelectorAll(".button-list button");
var infoDistance = document.querySelector("#info-distance");
var infoStrokes = document.querySelector("#info-strokes");
var infoScore = document.querySelector("#sub-info-end-score");
var infoAward = document.querySelector("#sub-info-end-award");
var infoEnd = document.querySelector(".sub-info-end")
var infoAwardLast = document.querySelector("#info-award")
var infoGamesPlayed = document.querySelector("#info-games-played")
var notificationContainer = document.querySelector("#notification");
var notificationButton = document.querySelector("#notification button");

// get a random number function
function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

// some "borrowed" code
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/templates/projects/golf/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// end "borrowed" code

// add event listener to the replay button
notificationButton.addEventListener("click", function () {
    notificationContainer.classList.add("hidden-element");
    window.location.reload(false);
});

function main() {
    // cookies - because why not? everyone loves cookies! :) 
    gamesPlayed = getCookie("GgamesPlayed");
    if (getCookie("GgamesPlayed") == "") {
        setCookie("GgamesPlayed", 1);
    } else {
        setCookie("GgamesPlayed", parseInt(getCookie("GgamesPlayed")) + 1)
    }

    // set variable scope
    var clubHit = 0;
    var strokes = 0;
    var score = 0;
    var award = "none";

    // generate first hole distance
    var holeDistance = getRandom(400, 700);

    // function updates the users interface information display
    function updateInfo() {
        topRightContent.innerHTML = String(holeDistance) + "m";
        contentSpan.innerHTML = holeDistance + "m"
        centerContent.innerHTML = clubHit + "m";
        infoDistance.innerHTML = holeDistance + "m"
        infoStrokes.innerHTML = strokes;
        infoAwardLast.innerHTML = getCookie("award");
        infoGamesPlayed.innerHTML = gamesPlayed;
    }

    // function runs the main game section // accepts a user input (club) and adjusts the hole distance variable
    function game(userClub) {
        if (userClub.toLowerCase() == "driver") {
            clubHit = getRandom(150, 225);
        } else if (userClub.toLowerCase() == "5 iron") {
            clubHit = getRandom(75, 125);
        } else if (userClub.toLowerCase() == "putter") {
            clubHit = getRandom(0, 25);
        }
        holeDistance -= clubHit;
        if (holeDistance < 0) {
            holeDistance *= (-1);
        }
    }

    // checks if the user has won the game // user must use the putter // soft game thus the player only needs to get within 5 metres
    function winCheck() {
        if (holeDistance < 5 && userClub.toLowerCase() == "putter") {
            return (true);
        } else if (holeDistance < 5 && userClub != "putter") {
            contentSub.innerHTML = "You must use the putter to win the game!"
            return (false);
        } else {
            return (false);
        }
    }

    // function determines if the players efforts are worth an award based on the calculated score (strokes - parlevel)
    function getAward() {
        // you can change the par level here, but its set to 5 because thats what I saw in the example
        parLevel = 5;
        // calculates the score
        score = (strokes - parLevel);
        if (score >= 0) {
            infoScore.innerHTML = "+" + score;
        } else {
            infoScore.innerHTML = "-" + score;
        }
        switch (score) {
            case -3:
                award = "Albatross"
                break;
            case -2:
                award = "Eagle";
                break;
            case -1:
                award = "Birdie";
                break;
            case 0:
                award = "Par";
                break;
            case 1:
                award = "Bogey";
                break;
            case 2:
                award = "Double Bogey"
                break;
            case 3:
                award = "Triple Bogey"
                break;
            default:
                award = "nothing"
                break;
        }
        // displays the award on the screen
        infoAward.innerHTML = award;
        // replaces the previous award in the cookie with new award
        setCookie("award", award);
        infoEnd.classList.remove("hidden-element")
    }

    // adds an event listener to all three game buttons
    for (club of clubList) {
        club.addEventListener("click", function () {
            // sets which club the user picked (based on the button clicked)
            userClub = this.innerHTML;
            // runs the game function and updates the users interface
            game(userClub);
            updateInfo();
            // keeps track of how many hits the user has, +1 every click (hit)
            strokes++;
            // if the player has won the game
            if (winCheck()) {
                document.querySelector("body").style.pointerEvents = "none"
                holeDistance = (0);
                clubHit = ("Game Over: 0");
                contentSub.innerHTML = "You won the game in " + strokes + " strokes!";
                getAward()
                updateInfo();
                notificationContainer.classList.remove("hidden-element")
            }
        });
    }
    updateInfo();
}
main();