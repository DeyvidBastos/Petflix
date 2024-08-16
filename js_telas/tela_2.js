const video = document.getElementById('video');
const botaoPlayPause = document.getElementById('play-pause');
const barraProgresso = document.getElementById('barra-progresso');
const progresso = document.getElementById('progresso');
const botaoMute = document.getElementById('mute');
const controleVolume = document.getElementById('volume');
const botaoTelaCheia = document.getElementById('tela-cheia');
const controles = document.querySelector('.controles');

botaoPlayPause.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        botaoPlayPause.textContent = 'Pausar';
    } else {
        video.pause();
        botaoPlayPause.textContent = 'Reproduzir';
    }
});

video.addEventListener('timeupdate', () => {
    const porcentagemProgresso = (video.currentTime / video.duration) * 100;
    progresso.style.width = `${porcentagemProgresso}%`;
});

barraProgresso.addEventListener('click', (e) => {
    const novoTempo = (e.offsetX / barraProgresso.offsetWidth) * video.duration;
    video.currentTime = novoTempo;
});

botaoMute.addEventListener('click', () => {
    video.muted = !video.muted;
    botaoMute.textContent = video.muted ? 'Som' : 'Mudo';
});

controleVolume.addEventListener('input', (e) => {
    video.volume = e.target.value;
});
botaoTelaCheia.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

let timeoutControles;
video.addEventListener('mousemove', () => {
    controles.classList.remove('ocultos');
    clearTimeout(timeoutControles);
    timeoutControles = setTimeout(() => {
        controles.classList.add('ocultos');
    }, 3000);
});

video.addEventListener('ended', () => {
    botaoPlayPause.textContent = 'Reproduzir';
});
