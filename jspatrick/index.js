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
    document.querySelector("nav").classList.add("hidden");
});

function loadMenu() {
    document.querySelector("nav").classList.remove("hidden");
}