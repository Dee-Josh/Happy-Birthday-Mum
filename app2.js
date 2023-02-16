const countdownContainer = document.querySelector(".countdown-container");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const sec = document.getElementById("seconds");

const dayP = document.querySelector("#day-p");
const hourP = document.querySelector("#hour-p");
const minuteP = document.querySelector("#minute-p");
const secondsP = document.querySelector("#seconds-p");

const playSongs = document.querySelectorAll(".birthday-img-btn");
const stopSong = document.querySelector(".stop-music");




const picture = document.querySelectorAll(".birthday-img");
const pictures = document.querySelector(".birthday-img");
const header = document.querySelector(".header");
const gallery = document.querySelector(".gallery-display-container");
const xmarks = document.querySelectorAll(".fa-xmark");

const homeButton = document.querySelector(".back-to-home");
const countD = document.querySelector(".countdown-container");

const happyMarquee = document.querySelector(".happy-marquee")
const confecti = document.querySelector(".overall");


const audio = new Audio;

const birthdaySongs = [
    "./sounds/1.mp3",
    "./sounds/2.mp3",
    "./sounds/3.mp3",
    "./sounds/4.mp3",
    "./sounds/5.mp3",
    "./sounds/6.mp3",
    "./sounds/7.mp3",
    "./sounds/8.mp3",
    "./sounds/9.mp3",
    "./sounds/10.mp3"
];



playSongs.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const audioSource = Math.trunc(Math.random()*10);
        audio.src = birthdaySongs[audioSource];
        audio.play();
        console.log("Playing Song");
        stopSong.textContent = "Stop Song";
        playing = false;
    })
})

let playing = true;

stopSong.addEventListener('click', ()=>{

    if(playing){
        const audioSource = Math.trunc(Math.random()*10);
        audio.src = birthdaySongs[audioSource];
        audio.play();
        stopSong.textContent = "Stop Song";
        playing = false;
    }else{
        audio.pause();
        audio.currentTime = 0;
        stopSong.textContent = "Play Song";
        playing = true;
    }
})




// Set the date we're counting down to
var countDownDate = new Date("March 2, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    if(String(days).length < 2) {
        day.innerHTML = `0${days}`;
    }else{
        day.innerHTML = days;
    }

    if (String(hours).length < 2) {
        hour.textContent = `0${hours}`
    }else{
        hour.textContent = hours
    }

    if (String(minutes).length < 2) {
        minute.textContent = `0${minutes}`
    }else{
        minute.textContent = minutes
    }

    if (String(seconds).length < 2) {
        sec.textContent = `0${seconds}`
    }else{
        sec.textContent = seconds
    }

    if(day.textContent <= 1){
        dayP.textContent = "DAY";
    }else{
        dayP.textContent = "DAYS";
    }
    if(hour.textContent <= 1){
        hourP.textContent = "HR";
    }else{
        hourP.textContent = "HRS";
    }
    if(minute.textContent <= 1){
        minuteP.textContent = "MIN";
    }else{
        minuteP.textContent = "MINS";
    }
    if(sec.textContent <= 1){
        secondsP.textContent = "SEC";
    }else{
        secondsP.textContent = "SECS";
    }



    

    

  // If the count down is finished, write some text
  if (distance < 1) {
    clearInterval(x);
    alert("It's your Birthday Sir");

    happyMarquee.style.opacity = "1";
    countdownContainer.style.display = "none";
    document.body.style.overflowX = "hidden";
  }
}, 1000);


let pico;

let display = "true";
let displayImage;


picture.forEach((pic)=>{
    pic.addEventListener("click", ()=>{

        if (display === "true"){
            console.log("vjjvjv");
            displayImage = ()=>{
                pico = pic;
                    
                console.log(pic);
                pic.style.position = "absolute";
                pic.style.left = "50%";
                pic.style.transform = "translate(-50%, -0%)"
                pic.style.top = "0";
                pic.style.height = "100vh";
                if(window.screenX > 300){
                    pic.style.width = "100%"; 
                }else{
                    pic.style.maxWidth = "fit-content";
                    pic.style.width = "100%";
                }
                pic.style.maxHeight = "100vh";
                
                pic.style.zIndex = "1";
                document.body.style.overflow = "hidden";
            
            
                const xmark = pic.querySelector(".fa-xmark");
                xmark.style.opacity = 1;
                console.log(xmark);
                display = "false";
                header.style.opacity = "0";
                homeButton.style.display = "none"; 
                countD.style.display = "none"; 
            }
        }else{
            displayImage = ()=>{
                console.log("Nothing");
                display = "true";
                window.screenTop = 2000;
            }
        }

    

        displayImage();

        

    })

    // SOMETHING DELETED
})

xmarks.forEach((mark)=>{
    mark.addEventListener("click", ()=>{
        pico.style.position = "relative";
        // pico.style.left = "";
        // pico.style.top = "";
        pico.style.height = "";
        pico.style.width = "";
        pico.style.zIndex = "";
        document.body.style.overflow = "scroll";
        // header.style.display = "none";


        const xmark = pico.querySelector(".fa-xmark");
        xmark.style.opacity = 0;
        console.log("hdjdjdj");
        header.style.opacity = "1";
        homeButton.style.display = "block"; 
        countD.style.display = "flex";  
        stopSong.style.opacity = 1;
    })
})

// SOMETHING DELETED

// SOMETHING DELETED
