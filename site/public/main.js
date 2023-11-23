var navBar = document.querySelector(".header");

function mudarCor() {
    navBar.classList.toggle("active", scrollY);
}

window.addEventListener("scroll", mudarCor)


var cartoon = document.querySelector(".cartoonImg img");
var describe = document.querySelectorAll(".boxDescribe");
var zoomCartoon = document.getElementById("cartoonImgZoom");

function espandirImagemDescribe() {
    zoomCartoon.classList.add("active");
}

function removerImagemDescribe() {
    zoomCartoon.classList.remove("active");
}




