function onclicktest() {
    console.log("works.")
}

function next(){
    document.getElementById("classes").className = "N";
    document.getElementById("students").className = "students";
}

function back(){
    document.getElementById("classes").className = "classes";
    document.getElementById("students").className = "N";
}

function add(which){
    if(which == 0){
        document.getElementById("lp1").innerHTML += '<div class="ccwrapper"><div class="class" id="class1"><h3 class="globaltitle2">class new added</h3></div><div class="class-activity"><div class="activecircle" id="ac1"></div></div><div onclick="onclicktest()" class="ccnext"><i class="arrow right"></i></div></div><div class="cspacer2"></div>';
    }
    if(which == 1){
        document.getElementById("lp2").innerHTML += '<div class="ccwrapper"><div class="student" id="student1"><h3 class="globaltitle2">Name</h3></div><div class="student-age"><h3 class="globaltitle2">* yrs.</h3></div><div class="student-bdate"><h3 class="globaltitle3">*</h3></div></div><div class="cspacer2"></div>'
    }
}

setInterval(() => {
    
}, 1000);