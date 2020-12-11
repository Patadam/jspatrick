var messageField = document.querySelector("#input-message");
var maskField = document.querySelector("#input-mask");
var buttonEncrpyt = document.querySelector("#encrypt-btn");
var buttonDecrpyt = document.querySelector("#decrypt-btn");
var outputText = document.querySelector("#output");
var maskCheck = document.querySelector("#checkbox-mask");

const dictionary = {
    "UUUUU": "A",
    "UUUUL": "B",
    "UUULU": "C",
    "UUULL": "D",
    "UULUU": "E",
    "UULUL": "F",
    "UULLU": "G",
    "UULLL": "H",
    "ULUUU": "I",
    "ULUUL": "J",
    "ULULU": "K",
    "ULULL": "L",
    "ULLUU": "M",
    "ULLUL": "N",
    "ULLLU": "O",
    "ULLLL": "P",
    "LUUUU": "Q",
    "LUUUL": "R",
    "LUULU": "S",
    "LUULL": "T",
    "LULUU": "U",
    "LULUL": "V",
    "LULLU": "W",
    "LULLL": "X",
    "LLUUU": "Y",
    "LLUUL": "Z",
    "LLLLU": ".",
    "LLLLL": " ",
}

buttonEncrpyt.addEventListener("click", function () {
    message = (messageField.value).toUpperCase();
    mask = ('');
    outputText.innerHTML = String(encrypt(String(message), mask));
});
buttonDecrpyt.addEventListener("click", function () {
    message = messageField.value;
    outputText.innerHTML = String(decrypt(String(message)));
});

function encrypt(message, mask) {
    // converts the message into an array
    var messageArray = message.split('');
    // some other variables
    var finalMessage = ('');
    var codedArray = [];
    var reversedDictionary = {};

    // reverse the dictionary, key values pairs
    Object.entries(dictionary).forEach(([key, value]) => {
        reversedDictionary[value] = (key);
    });

    // for every character in the message array, push its encoded format (UUULL etc.) into codedAray
    for (letter of messageArray) {
        codedArray.push(reversedDictionary[letter]);
    }

    // join coded array into a single string then split
    codedArray = codedArray.join('').split('');

    // checks mask logic
    if (maskCheck.checked == true) {
        mask = maskField.value;
    } else {
        mask = codedArray.join('');
    }

    // convert mask into an array
    mask = mask.split('');
    var codedIndex = 0;
    var maskIndex = 0;
    const contrabandList = [" ", ",", ".", "?"]
    while (codedIndex < codedArray.length) {
        if (contrabandList.includes(mask[maskIndex]) == false) {
            if (codedArray[codedIndex] == "U") {
                mask[maskIndex] = mask[maskIndex].toUpperCase();
            } else if (codedArray[codedIndex] == "L") {
                mask[maskIndex] = mask[maskIndex].toLowerCase();
            }
            codedIndex++;
            maskIndex++;
        } else {
            maskIndex++;
        }
    }
    // converts the mask into a string and makes finalMessage = to mask
    finalMessage = mask.join('')
    return (finalMessage)
};

function decrypt(message) {
    var newMessage = message.split("");
    var codedArray = [];
    var contrabandList = [".", ",", "?", "!", " "];
    // remove full stops & punctuation && remove spaces
    for (letter of newMessage) {
        if (contrabandList.includes(letter)) {
            newMessage[newMessage.indexOf(letter)] = ('');
        }
    }
    newMessage = (newMessage.join("")).split("")
    for (letter of newMessage) {
        if (letter == letter.toUpperCase()) {
            codedArray.push("u")
        } else {
            codedArray.push("l")
        }
    }
    length = Math.floor(codedArray.length / 5);
    for (i = 0; i < length; i++) {
        codedArray.push(codedArray.splice(0, 5).join(""));
    }
    newMessage = ('');
    for (block of codedArray) {
        newMessage += dictionary[block.toUpperCase()];
    }
    newMessage = newMessage.replace(/undefined/gi, "");
    console.log("Decrypted Message: " + newMessage)
    return (newMessage);
};