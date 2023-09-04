$('.pop-up').hide(0);
$('.playlists-container').hide(0);

$('.playlist-button').click(function(){
  $('.playlists-container').show(0);
  $('.playlist').fadeIn(300);
  $('.playlistp-button').hide(0);
});
$('.pop-up span').click(function() {
  $('.playlists-container').hide(0);
  $('.playlist').hide(0);
  $('.playlist-button').show(0);
});