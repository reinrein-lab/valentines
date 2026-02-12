document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');

    // Envelope Toggle
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    // Music Toggle
    musicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = "⏸ Pause Music";
            musicBtn.classList.add('playing');
        } else {
            bgMusic.pause();
            musicBtn.textContent = "🎵 Play Music";
            musicBtn.classList.remove('playing');
        }
    });
});
