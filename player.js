window.player = {
    cover: document.querySelector('.card-image'),
    title: document.querySelector('.card-content h5'),
    artist: document.querySelector('.artist'),
    audio: document.querySelector('audio'),
    audioList: audios,
    currentAudio: {},
    currentPlaying: 0,
    start() {
        this.update();

        this.audio.onended = () => {
            this.next()
        }
    },
    next() {
        if (this.currentPlaying == this.audioList.length - 1) {
            this.restart()
        } else {
            this.currentPlaying++
            this.update()
        }
    },
    update() {
        this.currentAudio = this.audioList[this.currentPlaying];
        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center /cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist
        this.audio.src = path(this.currentAudio.file);
    },
    restart() {
        this.currentPlaying = 0
        this.update()
    }
}