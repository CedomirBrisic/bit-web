var igrac = document.querySelector(".igrac");
var lopta = document.querySelector(".lopta");
var width = igrac.clientWidth;
var height = igrac.clientHeight;
var teren = document.querySelector("body");

teren.addEventListener("click", klik);
teren.addEventListener("keypress", goal);

var vertical = 0;

function klik(event) {
    var horizontal = event.clientX - width/2;
    vertical = event.clientY - height/2;
    igrac.style.top = vertical+"px";
    igrac.style.left = horizontal+"px";
}

function goal(event){
    lopta.style.position = "fixed";
    lopta.style.right = "60px";
    lopta.style.top = vertical + "px";
}