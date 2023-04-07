$(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("html, body, canvas").css({"width":w,"height":h});
});

const container = document.getElementById('c1');
  

var toggle = 0;

function flipper() {

    var flipWrap = document.getElementById("wf");
    var flip = document.getElementById("af");
    var cg = document.getElementById("cg");

    if(toggle == 0){
        flipWrap.classList.remove("wrapperfb");
        flip.classList.remove("afb");
        flipWrap.classList.add("wrapperf");
        flip.classList.add("af");

        setTimeout(() => {
            cg.style.backgroundColor = "red";
        }, 200);
        toggle=1;
    } 
    else if(toggle==1) {
        flipWrap.classList.remove("wrapperf");
        flip.classList.remove("af");
        flipWrap.classList.add("wrapperfb");
        flip.classList.add("afb");

        setTimeout(() => {
            cg.style.backgroundColor = "blue";
        }, 200);
        toggle=0;
    }
}

function clear(){
    var ginput = document.getElementById("iem");

    console.log(ginput.value);

    ginput.value = '';

    console.log(ginput.value);
}