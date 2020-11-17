var base = document.querySelector("html");
// Toggles the theme
function toggleTheme() {
    if (base.getAttribute("data-theme") == "light") {
        base.setAttribute("data-theme", "dark");
    } else {
        base.setAttribute("data-theme", "light");
    }
}