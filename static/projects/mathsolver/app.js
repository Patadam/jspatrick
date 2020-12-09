document.body.appendChild(document.querySelector("#--global-onboarding-template").content.cloneNode(true));

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
var score, question, totalQuestions, minValue, maxValue, trueAnswer, difficulty;
[score, question, totalQuestions, minValue, maxValue, trueAnswer, difficulty] = [0, 0, 0, 0, 0, 0, '']

getPercent = () => (String(((score / (question)) * 100).toPrecision(3)));

updateInfo = () => {
    infoQuestion.innerHTML = `${question} of ${totalQuestions}`;
    infoSuccess.innerHTML = `${getPercent()}% (${score} of ${question} completed successfully)`;
}

contentDOM = document.querySelector("#content");

game = () => {
    question++;
    updateInfo();

    [num1, num2] = [globalRandomInt(parseInt(minValue), parseInt(maxValue)), globalRandomInt(parseInt(minValue), parseInt(maxValue))];
    difficulty == "easy" ? method = globalRandomInt(1, 2) : method = globalRandomInt(1, 4);

    method == 1 ? contentDOM.innerHTML = `____ + ${num2} = ${num1+num2}` : method == 2 ? contentDOM.innerHTML = `____ - ${num2} = ${num1-num2}` : method == 3 ? contentDOM.innerHTML = `____ x ${num2} = ${num1*num2}` : contentDOM.innerHTML = `____ / ${num2} = ${(num1/num2).toFixed(2)}`
}
handleOnboardingEvent = () => {
    globalHide(".--global-onboarding");
    document.querySelector("#--value-HardMode").checked ? difficulty = "hard" : difficulty = "easy";
    totalQuestions = parseInt(document.querySelector("#--value-QuestionQty").value);
    minValue = parseInt(document.querySelector("#--value-SmallNum").value);
    maxValue = parseInt(document.querySelector("#--value-LargeNum").value);
    [score, question] = [0, 0];
    try {introPopup.classList.add("--global-hidden");}catch(err){}; // This is the old code thing can probs get removed
    updateInfo();
    game();
}
docButton.addEventListener('click', function () {
    correct = () => {
        score++;
        docInput.classList.add("correct-outline")
        setTimeout(function () {
            docInput.classList.remove("correct-outline")
        }, 300)
    };
    incorrect = () => {
        docInput.classList.add("incorrect-outline")
        setTimeout(function () {
            docInput.classList.remove("incorrect-outline")
        }, 300)
    }
    gameOver = () => {
        updateInfo();
        contentText.innerHTML = "Game Over you got " + getPercent(score, question) + "%";
        docButton.classList.add("--global-hidden");
        docInput.classList.add("--global-hidden")
    }
    docInput.value == num1 ? correct() : incorrect();
    docInput.value = ('');
    question < totalQuestions ? game() : gameOver();
})