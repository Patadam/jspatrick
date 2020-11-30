var width = 22;
var height = 22;
var list;

const updateDOM = () => list = document.querySelectorAll("#btdgrid div");
var gridSelected;

for (i = 0; i < (width * height) - 1; i++) {
    var widget = document.createElement("div");
    widget.classList.add('widget');
    widget.setAttribute("cord", [i - (width * (Math.floor(i / width))), Math.floor(i / width)]);
    widget.addEventListener("click", function(){gridSelected = this})
    document.querySelector("#btdgrid").appendChild(widget);
}
updateDOM();
console.log(list)






class tower {
    constructor(name, cost, dps, hp, income=0) {
        this.name = name;
        this.dps = dps;
        this.hp = hp;
        this.buy = cost;
        this.sell = cost * 0.8;
        this.income = income;
    }
}

shopList = ["Cow Gunner", "Cow Farmker", "Cow Laser"];

towerShop = {
    "Cow Gunner": new tower("Cow Gunner", 100, 1, 120),
    "Cow Farmker": new tower("Cow Farmker", 350, 0, 240, 1),
    "Cow Laser": new tower("Cow Laser", 600, 10, 400)
}


var selected = "";

myTower = new tower("monkey gunner", 100, 1, 120);
console.log(myTower.name)

function shopSelected(call) {
    selected = call.innerHTML;
    getplacement(selected);
}

function getplacement(tower) {
    tower = towerShop[tower]
    gridSelected.setAttribute("tower",tower.name);
    gridSelected.classList.add(tower.name.replace(" ",""));
}   