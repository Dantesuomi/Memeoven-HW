function showOverlay(imageElement) {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.textContent = "Me, trying to flirt: eyes wide, pretending to know what I'm doing";  

    var container = imageElement.parentElement;
    container.appendChild(overlay);

    overlay.addEventListener('click', function() {
        overlay.remove();
    });
}
