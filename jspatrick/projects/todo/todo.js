// Global Start Function
function start(call){
    call.parentElement.classList.add("hidden");
}

var grid = document.querySelector(".grid");
var input = document.querySelector("#input");

var popup = document.querySelector(".edit-popup");
var activeEdit;

// Creates a new list
function newList() {
    var gridList = document.querySelectorAll(".grid .list");
        var template = document.querySelector("#template-list");
        var copy = template.content.cloneNode(true);
        copy.querySelector("button").setAttribute("loc", gridList.length);
        grid.appendChild(copy);
};

// Creates a new task in the calling list
function newTask(call){
    loc = call.getAttribute("loc");
    var list = document.querySelectorAll(".grid .list")[loc].querySelector(".tasks");
    var template = document.querySelector("#template-task")
    var copy = template.content.cloneNode(true);
    list.appendChild(copy);
}

// Calls the popup box for updating an element
function updateTask(call){
    popup.classList.remove("hidden")
    input.value = call.innerHTML;
    var loc = call.getBoundingClientRect();
    popup.style.left = loc.x+"px";
    popup.style.top = loc.y+"px";
    activeEdit = call;
}

// Updates the DOM element with a new "text"
function taskChange(){
    activeEdit.innerHTML = input.value;
    input.value = "";
    popup.classList.add("hidden");
    
}

// Completes a task by putting a line through it
function completeTask(call){   
    call.parentElement.querySelector("p").style.textDecoration = "line-through"
}

// Removes a task completely
function removeTask(call){
    call.parentElement.remove(call);
}