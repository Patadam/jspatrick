// Initialise Variables
var hours = (12);
var allStocks = ["Apple", "Grenade", "Zoom"];
var balance = (10);
var value;

// function resets the variable values
function resetValues() {
    hours = (12);
    userBalance = (10);
    stockValue = randomInt(1, 25);
    currentStock = allStocks[randomInt(0, 3)];
    stockQty = randomInt(20, 45);
    maxStocks = (40);
    bankBalance = (0);
}

// function to generate a random interger
function randomInt(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}

// Declare DOM objects
const hoursDOM = document.querySelector("#hoursDOM span");
const stockValueDOM = document.querySelector("#stockValueDOM .target");
const stockQtyDOM = document.querySelector("#stocksQtyDOM .target");
const userBalanceDOM = document.querySelector("#userBalanceDOM .target");
const avaliableStocksDOM = document.querySelector("#avaliable-stocksDOM .target");
const maxStocksDOM = document.querySelector("#maxStocksDOM .target");
const currentStockDOM = document.querySelector("#currentStockDOM .target");
const bankBalanceDOM = document.querySelector("#bankBalanceDOM .target");
const popupTypeDOM = document.querySelector("#popupTypeDOM .target");
const popupValueDOM = document.querySelector("#popupValueDOM .target");


// Update the visual display
function handleDisplayUpdate() {
    hoursDOM.innerHTML = hours;
    stockValueDOM.innerHTML = sockValue;
    stockQtyDOM.innerHTML = stockQty;
}

// Push a new message to the event history
function pushHistoryEvent() {

}

// Tick Event (wait 1 hour)
function handleTickEvent() {

}

// Buy Event
function handleBuyEvent() {

}

// Sell Event
function handleSellEvent() {

}

// Submit Event
function handleSubmitEvent() {

}

// Open Bank Menu Event
function handleBankEvent() {

}

// upgrade event
function handleUpgradeEvent() {

}



// // Initialise Variables
// var hours, stocks, balance, value, state;

// // Declare Variable Values
// function reset() {
//     hours = (12);
//     stocks = (0);
//     balance = (10);
//     value = (randomInt(1, 10));
//     state = ("clear")
// }
// reset();

// // Declare DOM objects
// const inputBox = document.querySelector("#get-input");
// const input = document.querySelector("#input");
// const info = document.querySelector("#info");
// const valueInfo = document.querySelector("#value-target")
// const hoursInfo = document.querySelector("#hours span")
// const balInfo = document.querySelector("#balance-target")
// const stockInfo = document.querySelector("#stocks span")


// function randomInt(min, max) {
//     return (Math.floor(Math.random() * (max - min) + min));
// }

// function handleTickEvent(type) {
//     if (type == "full") {
//         if (hours >= 1) {
//             // the possible stock price range
//             value = randomInt(1, 25);
//             hours--;

//             // Update Visual Display
//             valueInfo.innerHTML = (value)
//             hoursInfo.innerHTML = (hours)
//             balInfo.innerHTML = (balance)
//             stockInfo.innerHTML = (stocks)

//         } else {
//             info.innerHTML = ("Game Over! The market is closed");
//             setTimeout(function() {
//                 var temp;
//                 if (parseInt(balance) != (10)) {
//                     temp = balance;
//                 }
//                 if (String(temp) == "undefined") {
//                     temp = (10);
//                 }
//                 reset();
//                 valueInfo.innerHTML = (value)
//                 hoursInfo.innerHTML = (hours)
//                 balInfo.innerHTML = (balance)
//                 stockInfo.innerHTML = (stocks)
//                 info.innerHTML = ("A new game has started!<br>Your previous balance was $" + temp)
//             }, 1000);
//         }
//     } else if (type == "visual") {
//         valueInfo.innerHTML = (value);
//         hoursInfo.innerHTML = (hours);
//         balInfo.innerHTML = (balance);
//         stockInfo.innerHTML = (stocks)
//     }

// }

// function handleBuyEvent() {
//     state = ("buy");
//     console.log("Buy Event Triggered");
//     inputBox.classList.remove("hidden");
//     info.innerHTML = ("How many stonks do you want to buy?");
// }

// function handleSellEvent() {
//     state = ("sell");
//     console.log("Sell Event Triggered");
//     inputBox.classList.remove("hidden");
//     info.innerHTML = ("How many stonks do you want to sell?");
// }

// function handleSubmitEvent() {
//     if (state == ("buy")) {
//         var qty = input.value;
//         if (qty * value <= balance) {
//             balance -= (qty * value);
//             stocks = parseInt(parseInt(stocks) + parseInt(qty));
//             info.innerHTML = ("You bought " + qty + " stonks for $" + value + " each");
//             handleTickEvent("visual");
//         } else {
//             info.innerHTML = ("An error occured: Insufficent Funds")
//         }
//     }
//     if (state == ("sell")) {
//         var qty = input.value;
//         if (qty <= stocks) {
//             balance += (qty * value);
//             stocks -= (qty);
//             info.innerHTML = ("You sold " + qty + " stonks for $" + value + " each");
//             handleTickEvent("visual");
//         } else {
//             info.innerHTML = ("You own insufficient stonks");
//         }
//     }
//     inputBox.classList.add("hidden");
// }
// handleTickEvent("visual");