document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButton = document.getElementById("playButton");
    const progressBar = document.getElementById("progressBar");
    const currTime = document.querySelector(".curr-time");
    const totTime = document.querySelector(".tot-time");
    const volumeBar = document.getElementById("volumeBar");

    playButton.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.src = "./assets/player_icon3.png"; 
        } else {
            audioPlayer.pause();
            playButton.src = "./assets/pause1.png"; 
        }
    });

    audioPlayer.addEventListener("timeupdate", function () {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        currTime.textContent = formatTime(audioPlayer.currentTime);
        totTime.textContent = formatTime(audioPlayer.duration);
    });

    progressBar.addEventListener("input", function () {
        const seekTime = (audioPlayer.duration * this.value) / 100;
        audioPlayer.currentTime = seekTime;
    });

    volumeBar.addEventListener("input", function () {
        audioPlayer.volume = this.value / 100;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
});
