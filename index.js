const home = document.getElementById("home-score");
const guest = document.getElementById("guest-score");
const nbaSound = document.getElementById("nba-sound");
const timeoutSound = document.getElementById("timeout-sound");

const homeAdd1 = document.getElementById("homeAdd1");
const homeAdd2 = document.getElementById("homeAdd2");
const homeAdd3 = document.getElementById("homeAdd3");

const guestAdd1 = document.getElementById("guestAdd1");
const guestAdd2 = document.getElementById("guestAdd2");
const guestAdd3 = document.getElementById("guestAdd3");

let homeScore = 0;
let guestScore = 0;

home.textContent = homeScore;
guest.textContent = guestScore;

function homeadd1() {
  homeScore = homeScore + 1;
  home.textContent = homeScore;
}

function homeadd2() {
  homeScore = homeScore + 2;
  home.textContent = homeScore;
}

function homeadd3() {
  homeScore = homeScore + 3;
  home.textContent = homeScore;
}

// guest part
function guestadd1() {
  guestScore = guestScore + 1;
  guest.textContent = guestScore;
}

function guestadd2() {
  guestScore = guestScore + 2;
  guest.textContent = guestScore;
}

function guestadd3() {
  guestScore = guestScore + 3;
  guest.textContent = guestScore;
}

homeAdd1.addEventListener("click", homeadd1);
homeAdd2.addEventListener("click", homeadd2);
homeAdd3.addEventListener("click", homeadd3);

guestAdd1.addEventListener("click", guestadd1);
guestAdd2.addEventListener("click", guestadd2);
guestAdd3.addEventListener("click", guestadd3);

/// audio button
const audio = new Audio();
audio.src = "nba.mp3";

function generate() {
  if (!audio.paused) {
    /* Check if it's not paused */
    audio.pause(); /* To pause the audio */
    audio.currentTime = 0; /* To reset the time back to 0 */
    nbaSound.textContent = "NBA Sound";
  } else {
    audio.play(); /* To make it play again */
    nbaSound.textContent = "Stop";
  }
  setTimeout(() => {
    nbaSound.textContent = "NBA Sound";
  }, 12000);
}

///////////
const audiotimeout = new Audio();
audiotimeout.src = "timeout-sound.mp3";

function timeoOut() {
  if (!audiotimeout.paused) {
    /* Check if it's not paused */
    audiotimeout.pause(); /* To pause the audio */
    audiotimeout.currentTime = 0; /* To reset the time back to 0 */
    timeoutSound.textContent = "Time Out";
  } else {
    audiotimeout.play(); /* To make it play again */
    timeoutSound.textContent = "Stop";
  }
  setTimeout(() => {
    timeoutSound.textContent = "Time Out";
  }, 5000);
}
