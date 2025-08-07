
const now = new Date();
const target = new Date();
target.setDate(now.getDate() + 1);
target.setHours(6, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = "Time to explore Wayanad!";
        return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');

    document.getElementById('countdown').innerHTML =
        `${hours} : ${minutes} : ${seconds}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Music button
document.getElementById('playMusicBtn').addEventListener('click', () => {
    const audio = document.getElementById('bgMusic');
    audio.play();
});
