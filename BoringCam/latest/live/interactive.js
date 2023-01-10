var top = 0;
var left = 0;

function openClassLive(students, yawns, drowsy, phones, bored, id) {
    var el = document.getElementById("rcw3")
    el.classList.add("right-controls--appear")
}

function checkPress(){
    console.log("works.")
}

function transform(){
    let element4 = document.getElementById("bc")
    element4.classList.add("boredChart--transform")

    element4.innerHTML = '<div><h3 class="globaltext1">Close settings to view the page</h3></div>';

    let element = document.getElementById("rc")
    element.classList.add("right-controls--transform")

    let element2 = document.getElementById("lc")
    element2.classList.add("left-controls--transform")

    let element3 = document.getElementById("OD")
    element3.classList.add("optionsDisplay")

    let element5 = document.getElementById("cm")
    element5.classList.add("widgets--transform")

    let element6 = document.getElementById("live")
    element6.classList.add("change--transform")
}

function appear(){
    let element = document.getElementById("rc")
    element.classList.add("right-controls--appear")
}