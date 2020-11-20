// Dark Theme Settings
var base = document.querySelector("html");
if (document.cookie.replace("data-theme=","") == "dark"){
    base.setAttribute("data-theme", "dark");
};

// Start Widge Function
function start(call){
    call.parentElement.classList.add("hidden");
    initalise();
}

// Declare DOM References
var info = document.querySelector("#bs-info");

// Declare Dynamic Variables

// Declare Player Classes
class player {
    constructor(id){
        id = id
    }
}

// Initialises the player grid
function initalise(){
    info.innerHTML = ("(Player 1): Enter Boat Positions (10/10)");
}