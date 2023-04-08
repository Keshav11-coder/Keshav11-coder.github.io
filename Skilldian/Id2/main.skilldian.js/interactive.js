$(function () {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("html, body, canvas").css({ "width": w, "height": h });
});

const container = document.getElementById('c1');


var toggle = 0;

function flipper() {

    var flipWrap = document.getElementById("wf");
    var flip = document.getElementById("af");
    var cg = document.getElementById("cg");

    if (toggle == 0) {
        flipWrap.classList.remove("wrapperfb");
        flip.classList.remove("afb");
        flipWrap.classList.add("wrapperf");
        flip.classList.add("af");

        setTimeout(() => {
            cg.style.backgroundColor = "red";
        }, 200);
        toggle = 1;
    }
    else if (toggle == 1) {
        flipWrap.classList.remove("wrapperf");
        flip.classList.remove("af");
        flipWrap.classList.add("wrapperfb");
        flip.classList.add("afb");

        setTimeout(() => {
            cg.style.backgroundColor = "blue";
        }, 200);
        toggle = 0;
    }
}

function cleen(type) {
    var ginput = document.getElementById("i");
    var hello = document.getElementById("h");
    var hellot = document.getElementById("ht");
    var credits = document.getElementById("cct");
    var container = document.getElementById("c1");
    if(type == 0){
        ginput.value = '';
    }
    else if(type == 1){
        ginput.value = '';

        container.style.marginTop = "20%";
        hello.style.opacity = 1;
        hellot.style.display = "flex";
        hello.style.height = "20%";
        credits.style.opacity = 1;
    }

}

function tOp(){
    var hello = document.getElementById("h");
    var hellot = document.getElementById("ht");
    var credits = document.getElementById("cct");
    var container = document.getElementById("c1");

    container.style.marginTop = "3%";
    hello.style.opacity = 0;
    hellot.style.display = "none";
    hello.style.height = "1%";
    credits.style.opacity = 0;
}

function loadq(stage) {
    let qdiv = document.getElementById("wf");

    if (stage == 1) {
        qdiv.innerHTML = `
            <div class="a" id="af">
                <div class="gi-div" id="border-ray-div">
                    <input class="ginput-1" placeholder="name" id="i">
                </div>
                <div class="t-forw">
                    <div class="d-cancel"><div class="cancel cbtn" onclick="clear()"><h3 class="ccnl">clear</h3></div></div>
                    <div class="skip btn" id="cg" onclick=""><h3 class="ppl">skip</h3></div>
                    <div class="forw btn" onclick="loadq(2)"><h3 class="bl">next</h3></div>
                </div>
            </div>
        `;
    }
    else if(stage == 2){
        qdiv.innerHTML = `
            <div class="a" id="af">
                <div class="description">
                    <h3 class="--description">
                        Type your skill(s) in the text-box seperated by a space.<br>eg: Swift JavaScript React
                    </h3>
                </div>
                <div class="gi-div" id="border-ray-div">
                    <input class="ginput-1" onclick="tOp()" placeholder="skills" id="i">
                </div>
                <div class="t-forw">
                    <div class="d-cancel"><div class="cancel cbtn" onclick="cleen(1)"><h3 class="ccnl">cancel</h3></div></div>
                    <div class="skip btn" id="cg" onclick=""><h3 class="ppl">skip</h3></div>
                    <div class="forw btn" onclick="loadq(3)"><h3 class="bl">next</h3></div>
                </div>
            </div>
        `
    }
    else if(stage == 3){
        qdiv.innerHTML = `
            <div class="a" id="af">
                <div class="description">
                    <h3 class="--description">
                        Type your education level and the school's name in the text-box seperated by a space.
                    </h3>
                </div>
                <div class="gi-div" id="border-ray-div">
                    <input class="ginput-1" onclick="tOp()" placeholder="education" id="i">
                </div>
                <div class="t-forw">
                    <div class="d-cancel"><div class="cancel cbtn" onclick="cleen(1)"><h3 class="ccnl">cancel</h3></div></div>
                    <div class="skip btn" id="cg" onclick=""><h3 class="ppl">skip</h3></div>
                    <div class="forw btn" onclick="loadq(1); cleen(1)"><h3 class="bl">next</h3></div>
                </div>
            </div>
        `
    }
}