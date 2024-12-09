function unhideMeme(ev){
    const hiddenMemes = document.querySelectorAll('.hiddenMeme');
    if(window.scrollY>600){
        hiddenMemes.forEach(meme => {
            meme.classList.remove('hiddenMeme');
            meme.classList.add('visibleMeme');
        });
    }
}
window.onscroll = function() {unhideMeme()};