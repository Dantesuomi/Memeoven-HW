function makeMemeFavourite(memeId) {
    const imageElement = document.getElementById('favouriteMeme' + memeId);
    imageElement.src = "images/save_clicked.svg";
}
