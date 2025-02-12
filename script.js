const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const launchDate = new Date('2025-04-01T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Launching in ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        countdownElement.innerHTML = "We're live!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
