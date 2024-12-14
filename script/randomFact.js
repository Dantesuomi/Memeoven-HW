async function getRandomUselessFact() {
    try {
        const response = await fetch(
            "https://uselessfacts.jsph.pl/api/v2/facts/random"
        );

        const data = await response.json();
        return data;
    }
    catch(e) {
        console.error('Error fetching random useless fact:', e)
    }
}

async function generateRandomUselessFact() {
    const randomFactContainer = document.getElementById("useless-facts");
    const randomFactData = await getRandomUselessFact();
    const randomFact = document.createElement('div');
    randomFact.innerHTML = `
    <p class="card-text text-white">${randomFactData.text}</p>
    `
    randomFactContainer.appendChild(randomFact);
}

document.addEventListener('DOMContentLoaded', async function() {
    try {
        generateRandomUselessFact();
        console.log("Random Useless Fact loaded successfully");
    }
    catch (e) {
        console.error("Failed to load Random Useless Fact", e)
    }
});