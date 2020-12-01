// var base = document.querySelector("html");
// if (document.cookie.replace("data-theme=","") == "dark"){
//     base.setAttribute("data-theme", "dark");
//     document.querySelector(".switch input").checked = true;
// }
// // Toggles the theme
// function toggleTheme() {
//     if (base.getAttribute("data-theme") == "light") {
//         base.setAttribute("data-theme", "dark");
//         document.cookie = "data-theme=dark";
//     } else {
//         base.setAttribute("data-theme", "light");
//         document.cookie = "data-theme=light";
//     }


    
// }


// Collect Theme Cookies or Set Theme Cookies
document.cookie.split(';').includes('data-theme=dark') ? document.querySelector("html").setAttribute("data-theme", "dark") : document.cookie = "data-theme=light; path=/";

// Theme Toggle 
const toggleTheme = () => {
    document.querySelector('html').getAttribute('data-theme') == 'light' ? document.querySelector('html').setAttribute("data-theme", "dark") : document.querySelector('html').setAttribute("data-theme", "light");
    document.cookie = `data-theme=${document.querySelector('html').getAttribute('data-theme')}; path=/`;
}