// Set the target time (tomorrow at 6:00 AM IST)
const now = new Date();
const target = new Date();
target.setDate(now.getDate() + 1);
target.setHours(6, 0, 0, 0);

// Adventure sound
const sound = document.getElementById('adventure-sound');

// Countdown logic
function updateCountdown() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "Time to explore Wayanad!";
        sound.play();
        return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');

    document.getElementById('countdown').textContent = `${hours} : ${minutes} : ${seconds}`;
}

// WhatsApp Share Button
function updateShareButton() {
    const shareText = encodeURIComponent("🌄 Countdown to our Wayanad trip has begun! Check it out here!");
    const shareURL = window.location.href;
    document.getElementById('share-button').href = `https://wa.me/?text=${shareText}%0A${shareURL}`;
}

// Init
updateCountdown();
updateShareButton();
setInterval(updateCountdown, 1000);
