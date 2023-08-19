// ==NAVMENU==
let hamBurger = document.querySelector(`#hamburger`);
let navList = document.querySelector(`.nav-list`);

hamBurger.onclick = function () {
    hamBurger.classList.toggle("uil-times");
    navList.classList.toggle("active");
};
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("uil-times");
    navList.classList.remove("active");
    autoInput.classList.remove("hide");
  })
);
// ======SLIDER====
var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i=0; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function hideAd(){
    document.querySelector(`.ad-header`).style.display = 'none';
    document.querySelector('.health-tips').style.marginTop = '7rem';
}



