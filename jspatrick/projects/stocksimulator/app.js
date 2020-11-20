 //Initialise Variables
 var hours = (12);
 var allStocks = ["Apple", "Grenade", "Zoom"];
 var balance = (10);
 var stockValue = 10,
     stockQty = 0;

 //function resets the variable values
 function resetValues() {
     hours = (12);
     userBalance = (10);
     stockValue = randomInt(1, 25);
     currentStock = allStocks[randomInt(0, 3)];
     stockQty = randomInt(20, 45);
     maxStocks = (40);
     bankBalance = (0);
 }

 //function to generate a random interger
 function randomInt(min, max) {
     return (Math.floor(Math.random() * (max - min) + min));
 }

 //Declare DOM objects
 var hoursDOM = document.querySelector("#hoursDOM span");
 var stockValueDOM = document.querySelector("#stockValueDOM .target");
 var stockQtyDOM = document.querySelector("#stocksQtyDOM .target");
 var userBalanceDOM = document.querySelector("#userBalanceDOM .target");
 var avaliableStocksDOM = document.querySelector("#avaliable-stocksDOM .target");
 var maxStocksDOM = document.querySelector("#maxStocksDOM .target");
 var currentStockDOM = document.querySelector("#currentStockDOM .target");
 var bankBalanceDOM = document.querySelector("#bankBalanceDOM .target");
 var popupContainerDOM = document.querySelector(".popup-alert-container");
 var popupTypeDOM = document.querySelector("#popupTypeDOM .target");
 var popupValueDOM = document.querySelector("#popupValueDOM .target");
 var popupInputDOM = document.querySelector(".input");
 var eventHistory = document.querySelector("#history-text");


 //Update the visual display
 function handleDisplayUpdate() {
     hoursDOM.innerHTML = hours;
     stockValueDOM.innerHTML = stockValue;
     stockQtyDOM.innerHTML = stockQty;
     userBalanceDOM.innerHTML = balance;
 }

 //Push a new message to the event history
 function pushHistoryEvent(message) {
     eventHistory.innerHTML = eventHistory.innerHTML + ("<br>" + message)
 }

 //Tick Event (wait 1 hour)
 function handleWaitEvent() {
     if (hours >= 1) {
         stockValue = randomInt(1, 25);
         hours--;
         pushHistoryEvent("[" + hours + "] One hour has passed.");
         handleDisplayUpdate();
     }
 }

 //Buy Event
 function handleBuyEvent() {
     popupContainerDOM.classList.remove("hidden");
     popupTypeDOM.innerHTML = ("buy");
     popupValueDOM.innerHTML = (stockValue);

 }

 //Sell Event
 function handleSellEvent() {
    popupContainerDOM.classList.remove("hidden");
    popupTypeDOM.innerHTML = ("sell");
    popupValueDOM.innerHTML = (stockValue);
 }

 //Submit Event
 function handleSubmitEvent(call) {
     popupContainerDOM.classList.add("hidden");
     if (call.parentElement.querySelector(".target").innerHTML == "buy") {
         if ((popupInputDOM.value * stockValue) <= balance) {
             stockQty += parseInt(popupInputDOM.value);
             balance = balance - (parseInt(popupInputDOM.value * stockValue));
             pushHistoryEvent("[" + hours + "] You bought " + popupInputDOM.value + " stocks for $" + (popupInputDOM.value * stockValue));
             handleDisplayUpdate();
         }
     } else if (call.parentElement.querySelector(".target").innerHTML == "sell") {
        if ((popupInputDOM.value <= stockQty)) {
            stockQty = stockQty - parseInt(popupInputDOM.value);
            balance = balance + (parseInt(popupInputDOM.value * stockValue));
            pushHistoryEvent("[" + hours + "] You sold " + popupInputDOM.value + " stocks for $" + (popupInputDOM.value * stockValue));
            handleDisplayUpdate();
        }
    }
 }

 //Open Bank Menu Event
 function handleBankEvent() {

 }

 //upgrade event
 function handleUpgradeEvent() {

 }
