var navBar = document.querySelector(".header");

function mudarCor(){
    navBar.classList.toggle("active", scrollY);
}

window.addEventListener("scroll", mudarCor)
