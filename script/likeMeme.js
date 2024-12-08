function increaseMemeLikeCount(memeId) {
    const counterElement = document.getElementById('meme' + memeId);
    let currentValue = parseInt(counterElement.textContent);
    let updatedValue = currentValue + 1;
    counterElement.textContent = updatedValue;
}