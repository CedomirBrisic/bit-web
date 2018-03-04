var stopMario = document.querySelector(".stop");
var runMario = document.querySelector(".run");
var pozadina = document.querySelector(".pozadina");

document.onkeydown = run;
document.onkeyup = stop;

function run(x) {
    if (x.keyCode == '39') {
        stopMario.style = "z-index: -1";
        runMario.style = "z-index: 1";
        pozadina.style = "background-position-x:" -500 + "px";
    }
}

function stop(x){
    if(x.keyCode == "39"){
        stopMario.style = "z-index: 1";
            runMario.style = "z-index: -1";  
    }
}
