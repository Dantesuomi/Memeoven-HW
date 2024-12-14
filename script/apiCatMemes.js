async function getCatMemes() {
    try {
        const response = await fetch(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        );

        const data = await response.json();
        return data;
    }
    catch (e) {
        console.error('Error fetching data from The Cat API:', e);
    }
}

async function generateCatMemes() {
    const catMemesContainer = document.getElementById("cat-memes-container");
    const catMemeData = await getCatMemes();

    for (let i = 0; i < catMemeData.length; i++) { 
        const catMeme = document.createElement('div');
        const item = catMemeData[i];
        const memeId = i;
        catMeme.innerHTML = `
        <div class="mb-5">
            <div class="mt-5 text-center">
                <span class="fonts">
                    <a class="text-white" href="">Kitty</a>
                </span>
            </div>
            <div class="text-center">
                <a href="">
                    <img src="${item.url}" class="custom-image">
                </a>
            </div>
            <div class="button-container text-center text-warning mt-2">
                <div id="memeError${memeId}" class="d-flex justify-content-center mt-3"></div>
                <button type="button" class="btn" onclick="increaseMemeLikeCount(${memeId})">
                    <img src="images/like.svg" alt="like" class="square icon-small">
                </button>
                <span id="meme${memeId}">0</span>
                <button type="button" class="btn">
                    <img src="images/comments.svg" alt="comment" class="square icon-small">
                </button>
                <span id="commentCount">0</span>
                <button type="button" class="btn" onclick="makeMemeFavourite(${memeId})">

                    <img src="images/save.svg" id="favouriteMeme${memeId}" alt="save" class="square icon-small">
                </button>
                <span>
                    <a href="" class="link-style">@CatMemeMaster</a>
                </span>
            </div>
            <div class="text-center mt-3">
                <a href="" class="btn btn-secondary me-2 text-white">animals</a>
            </div>
        </div>
        `
        catMemesContainer.appendChild(catMeme);
    };
}

document.addEventListener('DOMContentLoaded', async function() {
    try {
        generateCatMemes();
        console.log("Cat memes loaded successfully");
    }
    catch (e) {
        console.error("Failed to load cat memes", e)
    }
});