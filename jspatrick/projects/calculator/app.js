const result = document.querySelector("#result")
const calcuation = document.querySelector("#calculation")
const keyList = document.querySelectorAll(".key")

let inputString = ("");
var specialList = ["X", "/", "-", "+"];

// for (var item of keyList) {
//     item.addEventListener("mouseup", function (ref) {
//         inputString += ref.target.innerHTML;
//         updateDisplay();
//     });
// }



// function updateDisplay() {

//     var userArray = inputString.split("")
//     // reset display
//     calculation.innerHTML = ("")
//     for (var item of userArray) {
//         if (item == "C") {
//             inputString = ("");
//             calculation.innerHTML = ("")
//         } else if (item == "=") {
//             inputString = inputString.replace(/=/gi, "");
//             calculate();
//         } else if (specialList.includes(item)) {
//             calculation.innerHTML += (" " + item.toLowerCase() + " ");
//         } else {
//             calculation.innerHTML += item;
//         }
//     }
// }

// function calculate() {
//     var userArray = inputString.split("");
//     var newArray = [];
//     var temp = ("");

//     for (var item of userArray) {
//         if (specialList.includes(item) == false) {
//             temp += item;
//         } else if (specialList.includes(item)) {
//             newArray.push(temp);
//             temp = ("")
//             if (item == "X") {
//                 newArray.push("*")
//             } else {
//                 newArray.push(item);
//             }
//         }
//     }
//     if (temp != ("")) {
//         newArray.push(temp);
//     }
//     console.log(newArray);
// }

function wrightNum(num) {
    calculation.textContent += num;
}

function op(btn) {
    if (calculation.textContent.length !== 0) {
        if (!['+', '-', "x", '/'].includes(calculation.textContent[calculation.textContent.length - 1])) {
            result.textContent = calc(formula());
            calculation.textContent += btn;
        } else {
            calculation.textContent = calculation.textContent.slice(0, formula.length - 1);
            calculation.textContent += btn;
        }
    }
}

document.getElementById('num0').addEventListener('click', function () {
    wrightNum(0)
}); +
document.getElementById('num1').addEventListener('click', function () {
    wrightNum(1)
});
document.getElementById('num2').addEventListener('click', function () {
    wrightNum(2)
});
document.getElementById('num3').addEventListener('click', function () {
    wrightNum(3)
});
document.getElementById('num4').addEventListener('click', function () {
    wrightNum(4)
});
document.getElementById('num5').addEventListener('click', function () {
    wrightNum(5)
});
document.getElementById('num6').addEventListener('click', function () {
    wrightNum(6)
});
document.getElementById('num7').addEventListener('click', function () {
    wrightNum(7)
});
document.getElementById('num8').addEventListener('click', function () {
    wrightNum(8)
});
document.getElementById('num9').addEventListener('click', function () {
    wrightNum(9)
});


document.getElementById('addition').addEventListener('click', function () {
    op('+')
});
document.getElementById('subtraction').addEventListener('click', function () {
    op('-')
});
document.getElementById('division').addEventListener('click', function () {
    op('/')
});
document.getElementById('multiplication').addEventListener('click', function () {
    op('x')
});


document.getElementById('clear').addEventListener('click', function () {
    calculation.textContent = '';
    result.textContent = 0;
});

document.getElementById('dot').addEventListener('click', function () {
    op('.')
});

document.getElementById('equal').addEventListener('click', function () {
    result.textContent = (calc(formula()).length !== 0) ? calc(formula()) : result.textContent;
    calculation.textContent = result.textContent;
});

/// code
function formula() {
    var calMath = '';
    calculation.textContent.split('').map(element => {
        if (element === 'X') {
            calMath += '*';
        } else {
            calMath += element;
        }
    })
    return (calMath);
}

function calc(formula) {
    if (['+', '-', "X", "/"].includes(formula[formula.length - 1])) {
        formula = formula.slice(0, formula.length - 1);
    }
    return eval(formula)
}

function writeNum(num) {
    calculation.textContent += num;
}