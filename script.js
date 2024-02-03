document.getElementById('yesButton').addEventListener('click', function () {
    displayGif(true);
});

document.getElementById('noButton').addEventListener('click', function () {
    displayGif(false);
});

function displayGif(answer) {
    const gifContainer = document.getElementById('gifContainer');
    if (answer) {
        gifContainer.innerHTML = '<img src="hug-kiss.gif" alt="Celebration GIF">';
    } else {
        gifContainer.innerHTML = '<img src="huh-cat.gif" alt="Denial GIF">';
    }
}