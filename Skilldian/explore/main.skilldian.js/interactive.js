function searchExtend(){
    var srbtn = document.getElementById("search");
    srbtn.classList.add("searchhover");

    var sin = document.getElementById("sin");

    sin.style.display = "unset"

    var simg = document.getElementById("simg");

    simg.classList.add("ssimg")

    simg.style.transform = "rotate(360deg)";
    simg.style.opacity = "0.6";

    var explrtext = document.getElementById("explrtext");
    var extext = document.getElementById("extext");

    explrtext.innerHTML = '<h3 class="explore-text" id="extext"></h3>'
    extext.style.margin = "0";

    var filters = document.getElementById("filters");

    setTimeout(() => {
        explrtext.style.display = "none";
    }, 1);

    filters.style.width = "10vw"

    filters.style.marginLeft = "2%";
}