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

    if (user.value.length <= 3) {
        document.getElementById("myInput").style.border = "1px solid red";
        console.log('adeus');
        document.getElementById("error").style.display = "block";
        console.log('olá');
    } else if (user2.value.length < 4) {
        document.getElementById("error2").style.display = "block";
        document.getElementById("myInputs").style.border = "1px solid red";
        console.log('bueno');
    } else if (user.value.length >= 4 && user2.value.length >= 4) {
        document.getElementById("myInput").style.border = "none";
        document.getElementById("myInputs").style.border = "none";
        document.getElementById("error").style.display = "none";
        document.getElementById("error2").style.display = "none";

        console.log('nada');
    }
}

// document.getElementsById('myInput').onblur = function() {
//     validaUser(this);
// };

// function validaUser(user) {
//     if (user.value.length < 2) {
//         alert('oi');
//     } else {
//         alert('adeus');
//     }
// };