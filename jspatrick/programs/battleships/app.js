width = (10);
height = (10);
size = ("32px")
document.querySelector("html").style.gridTemplateColumns = ("repeat(" + width + ", " + size + ")")
let root = document.documentElement;
root.style.setProperty("--width", width);
root.style.setProperty("--size", size);

var grid1 = document.querySelector("#grid1");
var grid2 = document.querySelector("#grid2");
var text = document.querySelector(".target");

var player1Boats = 0;
var player2Boats = 0;


class gridsq {
    constructor(id, owner) {
        this.id = id;
        this.owner = owner;
        this.boat = false;
        this.clicked = false;
    }
}

function getUserBoats(user) {
    if (user == "p1") {
        var grid = player1Grid;
        var list = player1List;
        var boats = player1Boats;
    } else {
        var grid = player2Grid;
        var list = player2List;
        var boats = player2Boats;
    };

    toast = document.createElement("ul");
    toast.classList.add("grid");
    toast.id = ("toast");
    console.log(toast);
    for (i = 0; i < (width * height); i++) {
        var widget = document.createElement("input");
        widget.type = ("checkbox")
        widget.setAttribute("location", i);
        widget.classList.add("start");
        widget.addEventListener("click", function() {
            if (boats < 10) {
                list[this.getAttribute("location")].boat = true;
                boats++;
            } else {
                document.querySelector("#toast").classList.add("hidden");
            }
        });
        toast.appendChild(widget);
    }
    document.documentElement.appendChild(toast);
}


function generateList(owner) {
    var list = [];
    for (i = 0; i < (width * height); i++) {
        list.push(new gridsq(i, owner))
    }
    return (list)
}

function clearGrid(owner) {
    if (owner == "p1") {
        grid1.innerHTML = ("");
    } else {
        grid2.innerHTML = ("");
    }
}

function updateGrid(owner, id, event) {
    if (owner == "p1") {
        var list = player1List;
    } else {
        var list = player2List;
    };
    if (event == "clicked") {
        list[id].clicked = true;
    };
}

function generateGrid(owner) {
    grid1.classList.toggle("hidden");
    grid2.classList.toggle("hidden");
    if (owner == "p1") {
        var grid = document.querySelector("#grid1");
        var list = player1List;
        text.innerHTML = ("1");
    } else {
        var grid = document.querySelector("#grid2");
        var list = player2List;
        text.innerHTML = ("2");
    };
    for (item of list) {
        var widget = document.createElement('li');
        widget.setAttribute("location", item.id);
        widget.addEventListener("click", function() {
            if (list[this.getAttribute("location")].clicked == false) {
                updateGrid(owner, this.getAttribute("location"), "clicked");
                nextPlayer(owner);
            } else {
                console.log("This spot has already been clicked")
            };
        });
        if ((item.boat) && (item.clicked)) {
            widget.classList.add("hit");
        } else if (item.clicked && (!(item.boat))) {
            widget.classList.add("miss");
        } else {
            widget.classList.add("clear");
        };
        grid.appendChild(widget);
    }
    return (grid);
}

player1List = generateList("p1");
player1Grid = generateGrid("p1");
player2List = generateList("p2");
player2Grid = generateGrid("p2");

function nextPlayer(currentPlayer) {
    clearGrid(currentPlayer);
    generateGrid(currentPlayer);
}


getUserBoats("p1");
getUserBoats("p2");