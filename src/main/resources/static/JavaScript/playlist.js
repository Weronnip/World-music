import '../music'

let name_track = document.querySelector('.name-track');
let artist_track = document.querySelector('.artist-track');

let total_duration = document.querySelector('.total-duration');
let curr_track = document.createElement('audio')

let track_index = 0;
let updateTimer;

const music_list = [
    {
        name : 'Antarctica ',
        artist : '$uicideboy$',
        music : 'music/$uicideboy$ - Antarctica.mp3'
    },
    {
        name : 'Kill Yourself (Part III) ',
        artist : '$uicideboy$',
        music : 'music/$uicideboy$ - Kill Yourself (Part III).mp3'
    },
    {
        name : ' Mentalite(slowed+rewerb) ',
        artist : 'Baby Gang',
        music : 'music/Baby Gang - Mentalite(slowed+rewerb).mp3'
    },
    {
        name : 'ZEMLYA ',
        artist : 'EDWXRDX',
        music : 'music/EDWXRDX - ZEMLYA.mp3'
    },
    {
        name : 'Own Paradise (Slowed) ',
        artist : 'LXAES',
        music : 'music/LXAES - Own Paradise (Slowed).mp3'
    },
    {
        name : 'Ooes - Ночь (Minus) ',
        artist : 'LXAES',
        music : 'music/LXAES Kkknellerstation - Ooes -  Ночь (Minus).mp3'
    },
    {
        name : 'Нашла другого ',
        artist : 'Юрий Шатунов',
        music : 'music/Юрий Шатунов- Нашла другого.mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    name_track.textContent = music_list[track_index].name;
    artist_track.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
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