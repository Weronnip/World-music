import('../music')

let track_name = document.querySelector('.nama-track');
let track_artist = document.querySelector('.nama-artist');

let track = document.querySelector('.content-music');
let playtract = document.querySelector('playTrack')

let track_index = 0;

const music_list = [
    {
        name : 'Antarctica  -',
        artist : '$uicideboy$',
        music : 'music/$uicideboy$ - Antarctica.mp3'
    }
]

loadTrack(track_index);

function listTrack (track_index){
    
    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
}