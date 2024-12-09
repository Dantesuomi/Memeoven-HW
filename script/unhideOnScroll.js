let lastUnhidePosition = 0;

function unhideMeme() {
    const hiddenMemes = document.querySelectorAll('.hiddenMeme');
    const scrollPosition = window.scrollY;

    if (scrollPosition > lastUnhidePosition + 200) {
        hiddenMemes.forEach((meme, index) => {
            if (index < Math.floor((scrollPosition - lastUnhidePosition) / 200)) {
                meme.classList.remove('hiddenMeme');
                meme.classList.add('visibleMeme');
            }
        });
        lastUnhidePosition = scrollPosition - (scrollPosition % 200);
    }
}

window.onscroll = function () {
    unhideMeme();
};
