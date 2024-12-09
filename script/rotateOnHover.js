document.addEventListener("DOMContentLoaded", function () {
    const images = document.getElementsByClassName("rotateImage");

    function rotate(e) {
        const image = e.target;
        image.style.transform = "rotate(360deg)";
        image.style.transition = "transform .7s ease-in-out";
    }

    function clear(e) {
        const image = e.target;
        image.style.transform = null;
        image.style.transition = null;
    }

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", rotate);
        images[i].addEventListener("mouseout", clear);
    }
});