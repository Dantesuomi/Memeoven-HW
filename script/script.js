function makeMemeFavourite(memeId) {
    const imageElement = document.getElementById('favouriteMeme' + memeId);
    imageElement.src = "images/save_clicked.svg";
}

function unhideMeme() {
    const hiddenMemes = document.querySelectorAll('.hiddenMeme');
    hiddenMemes.forEach(meme => {
        meme.classList.remove('hiddenMeme');
        meme.classList.add('visibleMeme');
    });
}

window.onscroll = function() {unhideMeme()};
