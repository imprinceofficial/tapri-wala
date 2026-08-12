const audio = document.getElementById("audio");
const mainBtn = document.getElementById("playMain");
const circleBtn = document.getElementById("circlePlay");
const title = document.getElementById("songTitle");
const artist = document.getElementById("songArtist");

// Add YOUR licensed audio stream/file URL here later.
// Example: const RADIO_URL = "https://your-domain.com/radio.mp3";
const RADIO_URL = "";

function toggleRadio() {
  if (!RADIO_URL) {
    alert("Tapri Wala radio abhi demo mode mein hai. YouTube/Spotify channel ya licensed radio stream connect karne ke baad yahan real music chalega.");
    return;
  }
  if (audio.paused) {
    audio.src = RADIO_URL;
    audio.play();
    mainBtn.innerHTML = "<span>❚❚</span> RADIO PLAYING";
    circleBtn.textContent = "❚❚";
  } else {
    audio.pause();
    mainBtn.innerHTML = "<span>▶</span> PLAY RADIO";
    circleBtn.textContent = "▶";
  }
}
mainBtn.addEventListener("click", toggleRadio);
circleBtn.addEventListener("click", toggleRadio);

function selectMood(mood) {
  title.textContent = mood;
  artist.textContent = "Tapri Wala playlist • Coming soon";
  document.querySelector(".now-playing").scrollIntoView({behavior:"smooth", block:"center"});
}

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".nav nav");
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.right = "0";
  nav.style.left = "0";
  nav.style.background = "#0a0908";
  nav.style.padding = "20px";
  nav.style.flexDirection = "column";
  nav.style.alignItems = "center";
});
