// gets the document references
var button = document.querySelector("#input-btn");
var input = document.querySelector("#input-field");
var content = document.querySelector("#content");

button.addEventListener("click", function() {
    // set the content to the cheque text value
    userNumber = input.value;
    newValue = main(userNumber)
    content.innerHTML = newValue;
    // clear value
    input.value = ("");
});

var actionAlert = false;
// the main cheque function
function main(userNumber) {
    // initialises the number sequences
    ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    hundreds = ["", "", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "hexdecillion", "septendecillion", "octodecillion", "novemdecilion", "vigintillion", "unvigintillion", "duovigintillion", "quattuorvigintillion", "quinvigintillion", "hexvigintillion", "septenvigintillion", "octovigintillion", "novemvigintillion", "trigintillion", "untrigintillion", "duotrigintillion", "quattuortrigintillion", "quintrigintillion", "hextrigintillion", "septentrigintillion", "octotrigintillion", "novemtrigintillion"];

    // setting the initial variables
    var chequeString = ("");
    var numberArray = [];
    var chequeArray = [];
    var temp = [];
    var cents = ('');
    // removes the cents
    if ((String(userNumber).split("")).includes(".")) {
        temp = userNumber.split("")
        cents = temp.splice([String(userNumber).indexOf(".")], temp.length - 1);
    }
    // sperates the cents from the main number for proccessing sepeartely
    if (cents != "") {
        userNumber = userNumber.split("");
        cents = userNumber.splice((userNumber.join("")).indexOf("."), cents.length)
        userNumber = (userNumber.join(""))
    }

    // userNumber as Int and as Str
    userNumberInt = parseInt(userNumber)
    userNumberStr = String(userNumber)
        // converts number into an array
    userNumArray = (userNumberStr.split("")).reverse();
    length = Math.ceil(userNumArray.length / 3);
    for (i = 0; i < (length); i++) {
        numberArray.push((userNumArray.splice(0, 3)).reverse().join(""))
    }
    numberArray = numberArray.reverse();

    // processes and 3 character long number to return its cheque word format
    function getNumber(num) {
        // adjusts numbers so that they are all the same (basicly lets the code work even if numbers like 001 are in the middle of a number like 9990001999)
        if (num < 10 && num.length < 3) {
            num = "00" + String(num);
        } else if (num < 100 && num.length < 3) {
            num = "0" + String(num);
        }

        // initialises the string
        var functionString = ('');
        num = String(num);
        if (num.charAt(0) != "0") {
            functionString += (ones[parseInt(num.charAt(0))]) + " hundred";
        }
        if (num.charAt(1) != "0") {
            if (num.charAt(0) != 0) {
                functionString += " and ";
            }
            if ((parseInt(num.charAt(1) + num.charAt(2)) >= 20)) {
                functionString += (tens[parseInt(num.charAt(1))]) + " ";
            } else {
                functionString += (ones[parseInt(String(num.charAt(1) + num.charAt(2)))]);
            }
        }
        if (num.charAt(1) == "0" && num.charAt(2) != "0" && num.charAt(0) != "0") {
            functionString += " and "
        }
        if (num.charAt(2) != "0" && ((parseInt(String(num.charAt(1) + num.charAt(2))) >= 20) || (parseInt(String(num.charAt(1) + num.charAt(2))) < 10))) {
            if ((parseInt(num.charAt(1) + num.charAt(2)) >= 20)) {
                functionString = functionString.trim();
                functionString += "-";
            }
            functionString += "" + (ones[parseInt(num.charAt(2))]);
        } else if (parseInt(num) == 0 && chequeArray.length == 0) {
            functionString += ("zero");
        }
        return (functionString)
    }


    // determiens which points in the array need to have a special number value (thousand, million) etc. put and add "special"
    for (group of numberArray) {
        if (parseInt(group) != 0) {
            chequeArray.push((getNumber((group))) + " special");
        } else {
            chequeArray.push((getNumber((group))));
        }
    }

    // adds the hundreds values to the code (big numbers) to replace the "special" tags
    for (i = 1; i <= chequeArray.length; i++) {
        chequeArray[(chequeArray.length - i)] = chequeArray[(chequeArray.length - i)].replace("special", hundreds[i]);
    }
    if (!(chequeArray[chequeArray.length - 1].includes("and")) && chequeArray[chequeArray.length - 1] != "") {
        if (chequeArray.length > 1) {
            chequeArray[chequeArray.length - 1] = "and " + chequeArray[chequeArray.length - 1]
        }
    }
    // cleans up unneeded string parts
    chequeString = chequeArray.join(", ")
    chequeString = chequeString.replace(/ , /gi, ' ');
    chequeString = chequeString.replace(/ /gi, ' ');
    // if there is an extra , on the end of the string, removes it
    if (chequeString.charAt(chequeString.length - 2) == (",")) {
        chequeString = chequeString.split("")
        chequeString[chequeString.length - 2] = "";
        chequeString = chequeString.join("");
    }
    // appends dollars to the string
    chequeString += " dollars"
        // if the user has entered cents then this code will append the cents value
    if (cents != "") {
        // removes the "." full stop from the cents value
        cents = cents.join('').replace(".", "")
        if (cents.length == 1) {
            // if the numer is like 10.1 then the cents is really 10 so appends the 0
            cents = cents + "0";
        } else if (cents.charAt(0) == "0") {
            // if the cents is 05 then the number is really 5 so removes the 0
            cents = cents.replace("0", "")
        }
        actionAlert = true;
        // appends the value of the cents once proccessed through the number function and removes the appended dollar string added by the number function.
        chequeString += (" and " + main(cents) + " cents").replace("dollars", "");
        actionAlert = false;
    } else if (cents == "" && actionAlert != true) {
        chequeString += (" and zero cents");
    }
    // returns the cheque string :)
    return (chequeString);
}