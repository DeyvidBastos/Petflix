const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');
const progressBar = document.getElementById('progresso-bara');
const progressContainer = document.querySelector('.progresso');

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

volumeControl.addEventListener('input', (event) => {
    video.volume = event.target.value;
});

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
});

progressContainer.addEventListener('click', (event) => {
    const progressTime = (event.offsetX / progressContainer.offsetWidth) * video.duration;
    video.currentTime = progressTime;
});
