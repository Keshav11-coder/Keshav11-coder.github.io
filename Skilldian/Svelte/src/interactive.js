$(function () {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("html, body").css({ "width": w, "height": h });
    var vh = document.getElementById("-html");
    var vb = document.getElementById("-body");
    console.log(vh.style.height, vh.style.width + "-{space}-" + vb.style.height, vb.style.width)
});