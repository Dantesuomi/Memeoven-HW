const likedMemes = new Set();

function increaseMemeLikeCount(memeId) {
    if (likedMemes.has(memeId)) {
        var messageElement = document.getElementById('memeError' + memeId);
        messageElement.innerHTML = `<p class="alert alert-danger">You've already liked this meme, stop clicking!</p>`
        return;
    }

    const counterElement = document.getElementById('meme' + memeId);
    let currentValue = parseInt(counterElement.textContent);
    let updatedValue = currentValue + 1;

    counterElement.textContent = updatedValue;
    likedMemes.add(memeId);
}