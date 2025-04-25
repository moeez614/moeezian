console.log("moeez");
// hello javascript;;
const mobile = document.getElementById("navbar");
const icon = document.createElement("i");
const menu = document.getElementById("container");
const mobileline = document.getElementById("menu");


if (window.matchMedia("(max-width:768px").matches) {
    mobile.style.display = "none";
    icon.classList.add("fa-solid", "fa-bars");
    menu.appendChild(icon);
    menu.style.display = "flex";
    menu.style.justifyContent = "space-between";
    menu.style.paddingRight = "20px";
    icon.style.fontSize = "20px";
    icon.addEventListener("click", function () {
        mobile.style.display = "block";
        mobileline.style.flexWrap = "wrap";
        mobileline.style.paddingTop = "13px";
        icon.style.display = "none";

    })
}

// navbar end edit
const os = document.getElementById("os");

document.addEventListener("DOMContentLoaded", function () {
    setInterval(function () {
        os.innerHTML = "Companies"
        os.style.color = "#0D47A1"
        os.style.borderBottom = "2px solid #0D47A1"
    }, 2000)
    setInterval(function () {
        os.innerHTML = "Agencies"
    }, 3000)
    setInterval(function () {
        os.innerHTML = "Startups"
    }, 4000)
})

// animation end
