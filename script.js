function menu() {
    var x = document.getElementById("menu-responsivo");
    if (x.className === "menu-") {
        x.className += "responsivo";
    } else {
        x.className = "menu-";
    }

}