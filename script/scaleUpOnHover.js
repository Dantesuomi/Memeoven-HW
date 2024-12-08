document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("hoverImage");

    function scaleUp() {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.3s ease"; // Smooth scaling
    }

    function scaleDown() {
        image.style.transform = "scale(1)";
    }

    image.addEventListener("mouseover", scaleUp);
    image.addEventListener("mouseout", scaleDown);
});