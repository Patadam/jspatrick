var grid = document.querySelector(".grid");


function newList() {
    var gridList = document.querySelectorAll(".grid .list");
    if (gridList.length < 2) {
        var template = document.querySelector("template");
        var copy = template.content.cloneNode(true);
        grid.appendChild(copy);
    }
};