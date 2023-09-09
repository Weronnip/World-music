import('../music')


let name_track = document.querySelector('.name-track')
let artist_track = document.querySelector('.artist-track')
let playlist = document.querySelector('.content-music');

let track = document.querySelector('.content-music');
let playtract = document.querySelector('playTrack')

let track_index = 0;

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

track(track_index);

function track(track_index) {

    curr_track.src = music_list[track_index].music;

    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
}