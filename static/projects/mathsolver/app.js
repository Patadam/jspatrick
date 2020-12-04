// load document references
var docNum1 = document.querySelector("#num1-span");
var docNum2 = document.querySelector("#num2-span");
var docMethod = document.querySelector("#method-span");
var docResult = document.querySelector("#result-span");
var docButton = document.querySelector("#input-btn");
var docInput = document.querySelector("#input-field");
var docButtonIntro = document.querySelector("#popup-input-btn");
var docInputIntro = document.querySelector("#popup-input-field");
var introPopup = document.querySelector(".notification-popup");
var alertToast = document.querySelector("#alert-toast");
var alertToastRange = document.querySelector("#alert-toast-range");
var minRangeNum = document.querySelector("#min-range-field");
var maxRangeNum = document.querySelector("#max-range-field");
var checkHard = document.querySelector("#checkbox-hard");
var contentText = document.querySelector("#content")
var infoQuestion = document.querySelector("#info-question");
var infoDifficulty = document.querySelector("#info-difficulty");
var infoSuccess = document.querySelector("#info-success");

// initialise global variables
var score = (0);
var question = (0);
var totalQuestions = (0);
var minValue = (0);
var maxValue = (0);
var trueAnswer = 0;
var difficulty = ("");

// start program
// add event listener to document button to launch code if all pre-requisites are met
docButtonIntro.addEventListener('click', function () {
    inputValue = docInputIntro.value;
    minValue = minRangeNum.value;
    maxValue = maxRangeNum.value;
    valuesValid = false;
    if ((isNaN(parseInt(inputValue)) == false && inputValue != "")) {
        if ((isNaN(parseInt(minValue))) == false && (isNaN(parseInt(maxValue)) == false)) {
            introPopup.classList.add("hidden-element");
            valuesValid = true;

        }
    }

    if (isNaN(parseInt(inputValue))) {
        alertToast.classList.remove("hidden-element");
    }
    if (isNaN(parseInt(minValue)) || isNaN(parseInt(maxValue))) {
        alertToastRange.classList.remove("hidden-element")
    }

    // sets the game values of the variables
    if (valuesValid == true) {
        totalQuestions = inputValue;
        question = 0;
        score = 0;
        if (checkHard.checked) {
            difficulty = "hard";
            infoDifficulty.innerHTML = "Hard";
        } else {
            difficulty = "easy";
            infoDifficulty.innerHTML = "Easy";
        }
        // updates the game display information and runs the main game code.
        updateInfo();
        game();
    }
});

// function returns the percentage value of the users correct answers
function getPercent(score, question) {
    if (score > 0) {
        return (String(((score / (question)) * 100).toPrecision(3)))
    } else if (question = totalQuestions) {
        return ("0");
    } else {
        return ("100");
    }
}

// function updates the information displayed on the users screen
function updateInfo() {
    infoQuestion.innerHTML = question + " of " + totalQuestions;
    infoSuccess.innerHTML = (getPercent(score, question) + "% (" + (score) + " of " + question + " completed successfully)");
}

// function contains the main code for the game
function game() {
    question += 1;
    updateInfo();

    // function to get a random number cuz JS random's suck to deal with
    function getRandom(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    //generates a random number between the min and max value for both the first and second number
    num1 = getRandom(parseInt(minValue), parseInt(maxValue));
    num2 = getRandom(parseInt(minValue), parseInt(maxValue));

    // gets the method (additon, subtraction, divison, multiplication) by returning a random number between 1-2 for easy or 1-4 for hard
    if (difficulty == "easy") {
        method = getRandom(1, 2);
    } else if (difficulty == "hard") {
        method = getRandom(1, 4);
    }

    // calculates the result (right hand side of the = ) for the number depending on the method generated above
    switch (method) {
        case 1:
            // addition
            docNum2.innerHTML = (String(num2));
            docMethod.innerHTML = (" + ");
            docResult.innerHTML = (num1 + num2);
            break;
        case 2:
            // subtraction
            docNum2.innerHTML = (String(num2));
            docMethod.innerHTML = (" - ");
            docResult.innerHTML = (num1 - num2);
            break;
        case 3:
            // multiplication
            docNum2.innerHTML = (String(num2));
            docMethod.innerHTML = (" x ");
            docResult.innerHTML = (num1 * num2);
            break;
        case 4:
            // division
            docNum2.innerHTML = (String(num2));
            docMethod.innerHTML = (" / ");
            docResult.innerHTML = (num1 / num2).toFixed(2);
            break;
    }
    // sets the first part of the equation displayed to the user to = _____ (unknown - user needs to guess this)
    docNum1.innerHTML = ("____");
    // stores the answer for the user in variable trueAnswer
    trueAnswer = (num1);
}

// function event triggers when ever the user clicks the answer button
docButton.addEventListener('click', function () {
    // retrievs the users input number from the input field
    userAnswer = parseInt(docInput.value);
    if (userAnswer == trueAnswer) {
        // increased the score by one
        score++;
        // adds and removes the outline effect for the button
        docInput.classList.add("correct-outline")
        setTimeout(function () {
            docInput.classList.remove("correct-outline")
        }, 300)
    } else {
        // adds and removes the outline effect for the button
        docInput.classList.add("incorrect-outline")
        setTimeout(function () {
            docInput.classList.remove("incorrect-outline")
        }, 300)
    }

    // resets the users input field
    docInput.value = "";
    // runs program again whilst questions still remain
    if (question < totalQuestions) {
        game();
    } else {
        // once all questions are completed the program updates users interface and displays their % successful
        updateInfo();
        contentText.innerHTML = "Game Over you got " + getPercent(score, question) + "%";
        docButton.classList.add("hidden-element");
        docInput.classList.add("hidden-element")
    }
});




var difficulty, questionQty, minNum, maxNum;
handleOnboardingEvent = () =>{
    document.querySelector("#--value-HardMode").checked ? difficulty = "hard" : difficulty = "easy";
    questionQty = document.querySelector("#--value-QuestionQty").value;
    minNum = document.querySelector("#--value-SmallNum").value;
    maxNum = document.querySelector("#--value-LargeNum").vlaue;
}