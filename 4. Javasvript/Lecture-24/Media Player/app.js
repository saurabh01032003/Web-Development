let playSection = document.querySelector('#play-section');
let playBtn = document.querySelector('#play')
let songList = document.querySelector('#song-list')
let progress = document.querySelector("#progress")

let songs = [
    {
        name: "song1",
        id:0
    },
    {
        name: "song2",
        id:1
    },
    {
        name: "song3",
        id:2
    },
    {
        name: "song4",
        id:3
    }
]

let audio = new Audio("../Media/song1.mp3")

for(let song of songs){
    let li = document.createElement("li");
    li.innerText = song.name;
    li.setAttribute("id",song.id);
    songList.append(li);
}

playBtn.addEventListener("click", function(){
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains("fa-play")){
        playBtn.children[0].classList.remove("fa-play");
        playBtn.children[0].classList.add("fa-pause");
    }else{
        playBtn.children[0].classList.remove("fa-pause");
        playBtn.children[0].classList.add("fa-play");
    }
});

// Samay 
audio.addEventListener('timeupdate',function(){
    let currentProg = (audio.currentTime*100)/audio.duration;
    progress.value = currentProg;;
});

// input ke hishab se chalega
progress.addEventListener('input',function(){
    let updateTime = audio.duration*ProgressEvent.value/100;
    audio.currentTime = updateTime;
})

// gana khud choose karo
songList.addEventListener("click",function(e){
    let idd = e.target.getAttribute("id");
    audio.src = `../Media/song${idd}.mp3`;
})

songList.addEventListener("click",)