console.log("Welcome To The Spotify")
//Initialize the Variables
let songIndex = 0;
let audioElement= new Audio('Song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Let me Love You",filePath:"Song1.mp3",coverPath:"1b.jpg"},
    {songName:"Cielo - Huma-Huma",filePath:"Song2.mp3",coverPath:"2.jpg"},
    {songName:"DEAF KEV - Invincible",filePath:"Song3.mp3",coverPath:"3.jpg"},
    {songName:"Shape of you",filePath:"Song4.mp3",coverPath:"4.jpg"},
    {songName:"Janji-Heroes-Tonight",filePath:"Song5.mp3",coverPath:"5.jpg"},
    {songName:"Suagr-Brownie",filePath:"Song6.mp3",coverPath:"6.jpg"},
    {songName:"SHumraazi",filePath:"Song7.mp3",coverPath:"7.jpg"},
    {songName:"Kahani Suno 2.0",filePath:"Song8.mp3",coverPath:"8.jpg"},
    {songName:"Kinna Chir",filePath:"Song9.mp3",coverPath:"9.jpg"},
    {songName:"Judai",filePath:"Song10.mp3",coverPath:"10.jpg"},
    
]
songItems.forEach((element,i)=>{
   //console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();
// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})


// Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
   progressBar.value = progress;
});
progressBar.addEventListener('change',()=>{
    audioElement.currentTime= progressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
   })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})