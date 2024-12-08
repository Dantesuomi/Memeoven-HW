document.addEventListener("DOMContentLoaded", function () {
    const row = document.querySelector(".parallax-row");
    const image = row.querySelector(".custom-image");

    function startParallax(event) {
        const { offsetX, offsetY } = event;
        const { offsetWidth, offsetHeight } = row;
        const xPercent = (offsetX / offsetWidth - 0.5) * 2; 
        const yPercent = (offsetY / offsetHeight - 0.5) * 2; 
        const maxTranslate = 15; 
        const translateX = xPercent * maxTranslate;
        const translateY = yPercent * maxTranslate;
        image.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    function resetParallax() {
        image.style.transform = "translate(0, 0)"; 
    }

    row.addEventListener("mousemove", startParallax);
    row.addEventListener("mouseleave", resetParallax); 
});