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
    // console.log('oi');
}


function mudaBg2() {
    var x = document.getElementById("myInput");
    x.style.background = "#CE99F0";
    var z = document.getElementById("myInputs");
    z.style.background = "#CE99F0";
    // console.log('oi');

}

// pega valor do input

function errorUserandSenha() {
    var user = document.getElementById("myInput");
    var user2 = document.getElementById("myInputs");
    if (user.value.length < 3) {
        document.getElementById("myInput").style.border = "1px solid red";
        document.getElementById("error").style.display = "block";
    } else if (user2.value.length < 4) {
        document.getElementById("error2").style.display = "block";
        document.getElementById("myInputs").style.border = "1px solid red";
    } else if (user.value.length >= 3 && user2.value.length >= 4) {
        document.getElementById("myInput").style.border = "none";
        document.getElementById("myInputs").style.border = "none";
        document.getElementById("error").style.display = "none";
        document.getElementById("error2").style.display = "none";
    }
}


// icons-redes

function openWindow() {
    var git = document.getElementById("git");
    if (git.className === "git") {
        git = window.open("https://github.com/mayzinng");
    }
}

function openWindow2() {
    var linkedin = document.getElementById("linkedin");
    if (linkedin.className === "linkedin") {
        linkedin = window.open("https://www.linkedin.com/in/maysa-raquel/");
    }
}