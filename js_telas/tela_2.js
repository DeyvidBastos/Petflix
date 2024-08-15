const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const fullscreenBtn = document.getElementById('fullscreenBtn');
playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = '⏯️';
    }        });
muteBtn.addEventListener('click', () => {
    videoPlayer.muted = !videoPlayer.muted;
    muteBtn.textContent = videoPlayer.muted ? '🔈' : '🔇';});
volumeSlider.addEventListener('input', () => {
    videoPlayer.volume = volumeSlider.value;
    muteBtn.textContent = videoPlayer.volume == 0 ? '🔈' : '🔇';       });
videoPlayer.addEventListener('timeupdate', () => {
    const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.value = progress;});
progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * videoPlayer.duration;
    videoPlayer.currentTime = time;   });

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        videoPlayer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }      });

  