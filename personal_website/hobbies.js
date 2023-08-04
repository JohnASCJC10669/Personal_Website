var audio = new Audio('peaches.mp3');

let playButton = document.getElementById("playButton")

playButton = addEventListener("click", PlaySong)

function PlaySong(){
audio.play();
}