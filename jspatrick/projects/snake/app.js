var base = document.querySelector("html");
if (document.cookie.replace("data-theme=","") == "dark"){
    base.setAttribute("data-theme", "dark");
}


// DOM Variable References
var grid = document.querySelector("#grid");
var list = document.querySelectorAll("#grid li");

// Static Variables
var width = (32);
var height = (20);
var boundaries = [];
var speed = (0);
var bodyCollision = true;

// Dynamic Variables
var score, direction, game;
var highscore = 0;
var trials = 0;
var totalscore = 0;
var path = [];
var noApple = [];
var introText = ("Speed: {speed} = {int}\nBody Collisions: {bodyCollision} = {bool}\n\n--------- Snake Stats ----------");

// Functions // 
// Math Random Function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// updates the DOM objects
function updateDOM() {
    grid = document.querySelector("#grid");
    list = document.querySelectorAll("#grid li");
}
// Generates an apple at a location
function createApple() {
    do {
        apple = randomInt(0, (list.length - 1));
    } while ((boundaries.includes(apple) || noApple.includes(apple) || path.includes(apple)));
    var appleDOM = document.createElement("div");
    appleDOM.classList.add("apple");
    list[apple].appendChild(appleDOM);
};
// Generates a  head at a location
function createHead() {
    head = (((height / 2) * width) - (width / 2));
    list[head].classList.add("head");
}
// Resets the variables
function resetVariables() {
    score = 0;
    path = [];
};
// Generates the boundaries
function createBoundary() {
    // User Boundaries
    for (i = 0; i < width; i++) {
        boundaries.push(i);
    }
    for (i = ((width * height) - width); i < (width * height); i++) {
        boundaries.push(i);
    }
    for (i = 0; i < height; i++) {
        boundaries.push(i * width);
        boundaries.push((i * width) + width - 1);
    };
    // Apple Boundaries
    for (i = width; i < (width * 2); i++) {
        noApple.push(i);
    }
    for (i = ((width * height) - (width * 2)); i < (width * height); i++) {
        noApple.push(i);
    }
    for (i = 0; i < height; i++) {
        noApple.push((i * width) + 1);
        noApple.push((i * width) + width - 2);
    };
};
// Clears the game board and resets
function handleGameReset() {
    // Clear grid inner content
    grid.innerHTML = ("");
    // Generate New Grid
    for (i = 0; i < (width * height); i++) {
        var widget = document.createElement("li");
        widget.classList.add("grid-widget");
        widget.setAttribute("cord", [i - (width * (Math.floor(i / width))), Math.floor(i / width)]);
        grid.appendChild(widget);
    };
    // Updates DOM Objects
    updateDOM();
    // Sets the boundaries
    createBoundary();
    // Creates Apple
    createApple();
    // Creates Head
    createHead();
    // Clears the variables
    resetVariables();
};
// Functions used in the frame event
// Resets Grid Styling
function clearGrid() {
    for (i = 0; i < list.length; i++) {
        if (list[i].classList.contains("body") || list[i].classList.contains("head")) {
            list[i].classList.remove('body');
            list[i].classList.remove('head');
        };
        if (boundaries.includes(i)) {
            list[i].classList.add("boundary")
        };
    };
};
// Checks if the user is on an apple
function checkApple() {
    if (head == apple) {
        score++;
        list[apple].innerHTML = ("");
        createApple();
    };
};
// Gets the direction the AI wants to take
function getDirection() {
    var options = [0, 90, 180, 270];
    var currentDirection = direction;
    var dir = 0;

    // Remove options if going to collide
    for (way of options) {
        if (!(checkDirection(way, 1))) {
            options.splice((options.indexOf(way)), 1);
        };
        if (!(checkDirection(way, 2))) {
            options.splice((options.indexOf(way)), 1);
        };
    };
    // Remove option to go 180 degrees (backwards)
    if (currentDirection == 0) {
        options.splice((options.indexOf(180)), 1);
    } else if (currentDirection == 90) {
        options.splice((options.indexOf(270)), 1);
    } else if (currentDirection == 180) {
        options.splice((options.indexOf(0)), 1);
    } else if (currentDirection == 270) {
        options.splice((options.indexOf(90)), 1);
    };
    // function will return if you crash at the distance specifed in the direction specified
    function checkDirection(fdirection, distance) {
        if (fdirection == (0)) {
            point = (head - (width * (1 + distance)));
        } else if (fdirection == (90)) {
            point = (head + (distance));
        } else if (fdirection == (180)) {
            point = (head + (width * (1 + distance)));
        } else if (fdirection == (270)) {
            point = (head - (distance));
        };
        // Checks for collision returns true if the path is clear
        if (boundaries.includes(point) && distance == 1) {
            return (false);
        } else if (path.includes(point)) {
            return (false)
        } else {
            return (true);
        }
    };
    // Find the distance to the x cord of the apple;
    distanceToX = (list[head].getAttribute("cord").split(",")[0] - list[apple].getAttribute("cord").split(",")[0]);
    distanceToY = (list[head].getAttribute("cord").split(",")[1] - list[apple].getAttribute("cord").split(",")[1]);
    tempX = distanceToX;
    tempY = distanceToY;
    if (tempX < 0) {
        tempX = tempX * -1;
    };
    if (tempY < 0) {
        tempY = tempY * -1;
    };
    shortRoute = ("y");
    if (tempX < tempY) {
        shortRoute = ("x");
    };

    // head is on the same x Cord
    if ((list[head].getAttribute("cord").split(",")[0]) == (list[apple].getAttribute("cord").split(",")[0])) {
        if (head > apple && currentDirection != 180) {
            dir = (0);
        } else if (head < apple && currentDirection != 0) {
            dir = (180);
        };
    } else if ((list[head].getAttribute("cord").split(",")[1]) == (list[apple].getAttribute("cord").split(",")[1])) {
        // head is on the same y Cord
        if (head > apple && currentDirection != 90) {
            dir = (270);
        } else if (head < apple && currentDirection != 270) {
            dir = (90);
        };
    } else {
        if (shortRoute = ('x')) {
            if (distanceToX < 0) {
                dir = (90);
            } else {
                dir = (270);
            };
        } else if (shortRoute = ("y")) {
            if (distanceToY > 0) {
                dir = (180);
            } else {
                dir = (0);
            };
        };
    };
    // Prevents the pathfinding from traveling in a 180 degree turn
    if ((dir == 0) && (currentDirection == 180)) {
        dir = options[randomInt(0, options.length - 1)]
    } else if ((dir == 90) && (currentDirection == 270)) {
        dir = options[randomInt(0, options.length - 1)]
    } else if ((dir == 180) && (currentDirection == 0)) {
        dir = options[randomInt(0, options.length - 1)]
    } else if ((dir == 270) && (currentDirection == 90)) {
        dir = options[randomInt(0, options.length - 1)]
    };
    return (dir);
};
// Makes a movement in the specified direction
function handleMovement() {
    if (direction == (0)) {
        head = (head - width);
    } else if (direction == (90)) {
        head = (head + 1);
    } else if (direction == (180)) {
        head = (head + width);
    } else if (direction == (270)) {
        head = (head - 1);
    };
};
// checks for a collsion event
function checkCollision() {
    // Collision with boundary & body
    if (boundaries.includes(head)) {
        return (true);
    };
    if (path.includes(head) && (bodyCollision == true)) {
        return (true);
    };
};
// Updates the snake's path
function updatePath() {
    // add a new data point to the path
    path.unshift(head);
    // if the path is greater than the score (snake length)
    if (path.length >= score + 2) {
        path.pop(0);
    };
};
// renders the snake
function renderSnake() {
    try {
        list[head].classList.add('head')
    } catch (err) {}
    for (part in path) {
        if (part != 0) {
            try {
                list[path[part]].classList.add("body");
            } catch (err) {};
        }
    }
};
// Handles each frame of the game;
function handleFrameEvent() {
    // Clears the grid
    clearGrid();
    // Get a direction to take (AI)
    direction = getDirection();
    // Move in that direction
    handleMovement();
    // Check if you crashed or collided (died)
    if (checkCollision()) {
        if (score > highscore) {
            highscore = score;
        }
        trials++;
        totalscore += score;
        console.clear();
        console.log(introText);
        console.log("Highscore: " + highscore);
        console.log("Average: " + (totalscore / trials) + " @ (" + trials + ")")
        handleGameReset();
    };
    // Updates the body path
    updatePath();
    // Check if you hit an apple
    checkApple();
    // Renders the snake onto the grid
    renderSnake();
}
// Run Main Game Code
function startGame() {
    handleGameReset();
    game = setInterval(handleFrameEvent, speed);
}
// Patrick Richardson (2020)