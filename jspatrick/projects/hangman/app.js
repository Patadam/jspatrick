// sets the wordlist for the game
const wordList = ["abruptly", "absurd", "abyss", "affix", "askew",
    "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon",
    "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard",
    "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo",
    "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph",
    "cobweb", "cockiness", "croquet", "crackpot", "crypt", "curacao", "cycle",
    "daiquiri", "disavow", "dizzying", "duplex", "dwarves",
    "embezzle", "equip", "espionage", "euouae", "exodus", "faking",
    "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness",
    "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby",
    "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph",
    "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard",
    "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot",
    "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly",
    "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial",
    "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole"
];

// declares the document references
const alphabet = document.querySelectorAll("#alphabet-list li");
var content = document.querySelector("#content");
var attRemaining = document.querySelector("#attempts-remaining-text");
var contentLost = document.querySelector(".content-lost");
var attRemainingTitle = document.querySelector("#top-right-container h3")
var infoAttempts = document.querySelector("#info-attempts");
var infoDifficulty = document.querySelector("#info-difficulty");
var infoCompletion = document.querySelector("#info-completion")
var infoGamesPlayed = document.querySelector("#info-games-played")
var infoGamesWon = document.querySelector("#info-games-won");
var inputLives = document.querySelector("#popup-lives-input");
var replayContainer = document.querySelector("#popup-container-replay");
var replayButton = document.querySelector("#replay-btn");
var image = document.querySelector("#img")
var imageContainer = document.querySelector("#images")

const page = document.querySelector("#main-container");
var popupInput = document.querySelector("#popup-input")
var popupSubmit = document.querySelector("#popup-submit");
var optionsList = document.querySelectorAll("#popup-container-difficulty button");
const toast = document.querySelector("#popup-toast")

// some "borrowed" code
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
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

// sets inital cookies if none exist
if (getCookie("gamesPlayed") == "") {
    setCookie("gamesPlayed", 1);
}
if (getCookie("gamesWon") == "") {
    setCookie("gamesWon", 0);
}

//replay button clicked
replayButton.addEventListener("click", function () {
    window.location.reload(false);
    var gamesP = parseInt(getCookie("gamesPlayed")) + 1
    setCookie("gamesPlayed", gamesP);
});

// initialises some variales
var wordArray = [];
contentLost.classList.add("element-hidden");
var lives = (9);
var startLives = lives;
var customWord = "";
var difficulty = "easy";

popupSubmit.addEventListener("click", function () {
    // if the user enters a custom word to be used runs this code
    if (popupInput.value != "") {
        customWord = popupInput.value;
        wordArray = (customWord.toLowerCase().split(""));
        difficulty = "custom";
    }
    // if the user enters an amount of lives to used, runs this code
    if (inputLives.value != "") {
        lives = (parseInt(inputLives.value));
        startLives = lives;
    }
    // finally runs this code to update display, hide the element and enable button pressing
    updateInfo()
    toast.classList.add("element-hidden");
    document.querySelector("body").style.pointerEvents = "all";
});

// initialises the game variables
var userArray = [];
gameLost = false;

// adds an event listener to every letter button on the page to resiger when the user clicks on the a letter
for (letter of alphabet) {
    letter.addEventListener("click", function check() {
        // checks if the user still has lives
        if (lives > 0) {
            this.classList.add("alphabet-li-selected");
            userArray.push((this.innerHTML).toLowerCase())
            game((this.innerHTML).toLowerCase());
            // if the user wins the game this code will run (user still has lives left)
            if (((getContent(wordArray, userArray)).join("") == wordArray.join(""))) {
                // checks that user still has lives left and the computer hasn't filled in the answer
                if (gameLost == false) {
                    contentLost.classList.remove("element-hidden")
                    contentLost.innerHTML = "Congratulations! You Won!"
                    var gamesW = parseInt(getCookie("gamesWon")) + 1
                    setCookie("gamesWon", gamesW);
                    lives = -1;
                    // gives the user an option to play again (refresh)
                    replayContainer.classList.remove("hidden-element");
                    replayButton.classList.remove("hidden-element")
                    replayButton.innerHTML = "Play Again?";
                }
            }
        } else {
            // if the user has no lives, displays what the word was and "loses" the game
            content.innerHTML = wordArray.join("");
            contentLost.classList.remove("element-hidden");
            gameLost = true;
        }
    });
}


//gets the word
function getWord() {
    return (wordList[Math.floor((Math.random() * wordList.length))]);
}

// puts the word in an array, if the word is not custom it also picks a word
if (customWord == "") {
    var wordArray = ((getWord()).toLowerCase()).split('');
} else {
    var wordArray = (customWord.toLowerCase().split(""));
}

// updates the array if user has already guessed letters otherwise pushes _ blanks
function getContent(wordArray, userArray) {
    var contentArray = [];
    for (letter of wordArray) {
        contentArray.push("_");
    }
    for (letter of userArray) {
        for (i = 0; i <= wordArray.length; i++) {
            if (wordArray[i] == letter) {
                contentArray[i] = letter;
            }
        }
    }
    return (contentArray);
}

// updates the displayed information on the screen for the user
function updateInfo() {
    content.innerHTML = (getContent(wordArray, userArray)).join("");
    attRemaining.innerHTML = lives;
    if (lives == 1) {
        attRemaining.innerHTML = "this is your final attempt";
        attRemaining.style.color = "#D16262";
        attRemaining.style.fontSize = "16px";
        attRemaining.style.marginTop = "48px";
    } else if (lives == 0) {
        attRemaining.innerHTML = "Game Over";
        attRemaining.style.color = "#D16262";
        attRemaining.style.fontSize = "16px";
        attRemaining.style.marginTop = "48px";
    } else if (lives > 1) {
        attRemaining.style.color = "#333";
        attRemaining.style.fontSize = "64px";
        attRemaining.style.marginTop = "16px";
    }
    infoDifficulty.innerHTML = difficulty;
    infoAttempts.innerHTML = lives + " (out of " + startLives + ")"
    array = getContent(wordArray, userArray)
    arrayLength = array.length
    infoCompletion.innerHTML = ((array.join("").split("_").join("").length / arrayLength) * 100).toPrecision(3) + "% (" + array.join("").split("_").join("").length + " of " + arrayLength + " letter found)";
    infoGamesPlayed.innerHTML = getCookie("gamesPlayed");
    infoGamesWon.innerHTML = getCookie("gamesWon");

    // adjusts the size of elements on the screen when the screen is smaller. I could use media queries or something but. nah
    // updates the hangman picture
    if (lives > 0 && lives <= 11) {
        image.src = ("./hangman" + String(lives) + ".png");
    }
    if (window.innerWidth < 1200) {
        imageContainer.classList.add("element-hidden")
    } else {
        imageContainer.classList.remove("element-hidden")
    }
    if (window.innerWidth < 1450) {
        page.style.marginLeft = "25%";
    } else {
        page.style.marginLeft = "0px";
    }
}

// function to run the main game
function game(userSelected) {
    if (!(wordArray.includes(userSelected))) {
        lives--;
    }
    getContent(wordArray, userArray)
    updateInfo()
    if (lives == 0) {
        if (!((getContent(wordArray, userArray)).join("") == wordArray.join(""))) {
            content.innerHTML = wordArray.join("");
            contentLost.classList.remove("element-hidden");
            gameLost = true;

            // displays the replay options
            replayContainer.classList.remove("hidden-element");
            replayButton.classList.remove("hidden-element")
            replayButton.innerHTML = "Play Again?";
        }
    }
}
game()