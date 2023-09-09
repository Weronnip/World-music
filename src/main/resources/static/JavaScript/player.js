import('../music')

let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let name_track = document.querySelector('.name-track')
let artist_track = document.querySelector('.artist-track')
let playlist = document.querySelector('.content-music');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.bx-shuffle');
let curr_track = document.createElement('audio');
let curr_add_track = document.addEventListener('audio')

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        name : 'Antarctica ',
        artist : '- $uicideboy$',
        music : 'music/$uicideboy$ - Antarctica.mp3'
    },
    {
        name : 'Kill Yourself (Part III) ',
        artist : '- $uicideboy$',
        music : 'music/$uicideboy$ - Kill Yourself (Part III).mp3'
    },
    {
        name : ' Mentalite(slowed+rewerb) ',
        artist : '- Baby Gang',
        music : 'music/Baby Gang - Mentalite(slowed+rewerb).mp3'
    },
    {
        name : 'ZEMLYA ',
        artist : '- EDWXRDX',
        music : 'music/EDWXRDX - ZEMLYA.mp3'
    },
    {
        name : 'Own Paradise (Slowed) ',
        artist : '- LXAES',
        music : 'music/LXAES - Own Paradise (Slowed).mp3'
    },
    {
        name : 'Ooes - Ночь (Minus) ',
        artist : '- LXAES',
        music : 'music/LXAES Kkknellerstation - Ooes -  Ночь (Minus).mp3'
    },
    {
        name : 'Нашла другого ',
        artist : '- Юрий Шатунов',
        music : 'music/Юрий Шатунов- Нашла другого.mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

playlist(index_track)

function playlist(index_track) {

    curr_add_track.src = music_list[index_track].music;
    curr_add_track.playlist()

    name_track.textContent = music_list[index_track].name;
    artist_track.textContent = music_list[index_track].artist;
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="bx bx-pause-circle""></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="bx bx-play-circle"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}