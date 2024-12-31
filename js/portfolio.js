// js for light and dark theme

var icon = document.getElementById("icon")

icon.onclick = function () {
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains("dark-mode")) {
        icon.src = "assets/sun.png"
    }
    else {
        icon.src = "assets/moon.svg"
    }
}


//  js for navbar toggle
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navbar = document.querySelector('.nav-bar');
    navbar.classList.toggle("active")
}


// document.addEventListener('contextmenu', event => event.preventDefault());
