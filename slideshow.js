var slideIndex = 0;

function showSlides() {
    "use strict";
    var i, slidesR = document.getElementsByClassName("slideR"), slidesL = document.getElementsByClassName("slideL");

    for (i = 0; i < slidesR.length; (i += 1)) {
        slidesR[i].style.display = "none";
        slidesL[i].style.display = "none";
    }

    slideIndex += 1;
    if (slideIndex >= slidesR.length) {slideIndex = 0; }

    slidesR[slideIndex].style.display = "block";
    slidesL[slideIndex].style.display = "block";
    setTimeout(function () {showSlides(); }, 5000); // Change image every 2 seconds
}

showSlides();
