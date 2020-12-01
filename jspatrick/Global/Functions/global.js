/* This document contains the global javascript functions */

/* All Global functions will be prefixed with globalFunction */
/* All Global javascript should be functions */

// Hide Target Object (Targeting by class or ID "#id" or ".class")
const globalHide = (target) => document.querySelectorAll(target).classList.add("--global-hidden");

// Parse the value this to hide the calling object, or this.parentElement to hide the parent element
function globalHideSelf(target){target.classList.add("--global-hidden")};

// Shows an element by ID or Class
const globalShow = (target) => document.querySelectorAll(target).classList.remove("--global-hidden");

// Random Int
const globalRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

// Throw Alert
const globalAlert = (title, text) => {
    const alertDOM = document.querySelector("#--global-alert-template").content.cloneNode(true);
    alertDOM.querySelector("h1").innerHTML = (title);
    alertDOM.querySelector("p").innerHTML = (text);
    document.body.appendChild(alertDOM)
}

// Collect Theme Cookies
document.cookie.split(';').includes('data-theme=dark') ? document.querySelector("html").setAttribute("data-theme", "dark") : document.cookie = "data-theme=light; path=/";

// Theme Toggle 
const globalThemeToggle = () => {
    document.querySelector('html').getAttribute('data-theme') == 'light' ? document.querySelector('html').setAttribute("data-theme", "dark") : document.querySelector('html').setAttribute("data-theme", "light");
    document.cookie = `data-theme=${document.querySelector('html').getAttribute('data-theme')}; path=/`;
}
