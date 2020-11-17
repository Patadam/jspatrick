var base = document.querySelector("html");
// Toggles the theme
function toggleTheme() {
    if (base.getAttribute("data-theme") == "light") {
        base.setAttribute("data-theme", "dark");
    } else {
        base.setAttribute("data-theme", "light");
    }
}

document.querySelector("#container").addEventListener("click", function () {
    if (!(document.querySelector("nav").classList.contains("animateHide"))) {
        document.querySelector("nav").classList.add("animateHide");
        document.querySelector("nav").classList.remove("animateShow");
    };
});

for (item of document.querySelectorAll("a")) {
    item.addEventListener("click", function () {
        for (item of document.querySelectorAll("a")) {
            item.setAttribute("selected", false);
        }
        this.setAttribute("selected", true);
    })
}


function loadMenu() {
    document.querySelector("nav").classList.add("animateShow");
    document.querySelector("nav").classList.remove("animateHide");
}