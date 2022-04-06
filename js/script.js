// menu responsivo

function menu() {
    var x = document.getElementById("menu-responsivo");
    if (x.className === "menu-") {
        x.className += "responsivo";
    } else {
        x.className = "menu-";
    }

}

function mudaBg() {
    var v = document.getElementById("myInput");
    v.style.background = "#fff";
    var b = document.getElementById("myInputs");
    b.style.background = "#fff";
    console.log('oi');
}


function mudaBg2() {
    var x = document.getElementById("myInput");
    x.style.background = "#CE99F0";
    var z = document.getElementById("myInputs");
    z.style.background = "#CE99F0";
    console.log('oi');
}