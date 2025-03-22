// 💘 Valentine Kitty Logic
const yesGifs = [
    "hug-kiss.gif",
    "kissy-cats.gif",
    "snow-cats.gif"
];

const noGifs = [
    "angry-cats.gif",
    "annoy-cat.gif",
    "huh-cat.gif"
];

document.getElementById('yesButton').addEventListener('click', function () {
    displayGif(true);
    confetti(); // celebration!
});

document.getElementById('noButton').addEventListener('click', function () {
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


// 🎓 Graduation Countdown Timer
const graduationDate = new Date("2025-06-04T10:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = graduationDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "🎉 She's Graduated! 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}, 1000);
