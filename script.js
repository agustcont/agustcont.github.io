const yesGifs = [
    "hug-kiss.gif",
    "kissy-cats.gif",
    "snow-cats.gif"
    // Add more for Yes Kitty
];

const noGifs = [
    "angry-cats.gif",
    "annoy-cat.gif",
    "huh-cat.gif"
    // Add more for No Kitty
];

document.getElementById('yesButton').addEventListener('click', function() {
    displayGif(true);
});

document.getElementById('noButton').addEventListener('click', function() {
    displayGif(false);
});

function displayGif(answer) {
    const gifContainer = document.getElementById('gifContainer');
    let selectedGif;
    if (answer) {
        selectedGif = yesGifs[Math.floor(Math.random() * yesGifs.length)];
    } else {
        selectedGif = noGifs[Math.floor(Math.random() * noGifs.length)];
    }
    gifContainer.innerHTML = `<img src="${selectedGif}" alt="Response GIF">`;
}
