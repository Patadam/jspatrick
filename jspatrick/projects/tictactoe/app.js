// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT

// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT

// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT

// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT

// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT

// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT

// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT

// // TESTING ENVIRONMENT
// // THIS CODE IS DEPRICATED OLD DO NOT USE FOR FINAL PRODUCTIOIN
// // THIS CODE IS A TESTING ENVIRONMENT NOT FOR FINAL USE
// // TESTING ENVIRONMENT



















// document reference items
const container = document.querySelector("#ttt-grid");
var containerItems = document.querySelectorAll("#ttt-grid li");

// other variables
var playerValue = ("X");
var gameInProgress = true;
var winner = ("none")

// board array varaible
let board = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];

// function to update the game board display with the gameboard JS
function updateEvent() {
    for (i = 0; i < board.length; i++) {
        containerItems[i].innerHTML = board[i];
    }
    if (winner != "none") {
        console.log("Game Over: " + winner + " wins!")
    }
}


// adds an event listener to every square
function initiateGame() {
    for (j = 0; j < containerItems.length; j++) {
        containerItems[j].addEventListener("click", function() {
            if (gameInProgress == true) {
                this.style.pointerEvents = "none";
                this.innerHTML = playerValue;
                for (i = 0; i < containerItems.length; i++) {
                    board[i] = containerItems[i].innerHTML;
                }
                playerSwap();
                winner = checkWin();
                updateEvent();
            }
        });
    };
}

// function swaps the current player
function playerSwap() {
    if (playerValue == "X") {
        playerValue = ("O");
    } else {
        playerValue = ("X");
    }
}

function checkWin() {
    if (gameInProgress == true) {
        for (p = 0; p < board.length; p++) {
            // check horizontal
            if ((board[p] != "#") && (board[p] == board[p + 1]) && (board[p] == board[p + 2])) {
                gameInProgress = false;
                return (board[p])
            }
            // check vertical

            // check diagonal
            else {
                return ("none")
            }
        }
    }
}



updateEvent();
initiateGame();