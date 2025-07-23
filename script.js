
let countdownNum = 5;
const countdownEl = document.getElementById('countdown');
const mainContent = document.getElementById('mainContent');
const music = document.getElementById('bgMusic');

const messageText = `
Tumhari har ek muskurahat dil chhoo leti hai 💖
Har pal, har saans mein tera naam hai 🌸
Aaj tumhara din hai — duniya ke sabse pyaare insaan ka 🎂
Janamdin Mubarak ho, Aakriti 🎈`;

function startTypewriter(text, elId, delay = 50) {
  const el = document.getElementById(elId);
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

function showConfetti() {
  for (let i = 0; i < 5; i++) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function startSurprise() {
  countdownEl.style.display = 'none';
  mainContent.style.display = 'block';
  music.play();
  startTypewriter(messageText, "typewriterText", 40);
  showConfetti();
}

function restartSurprise() {
  location.reload();
}

const countdownTimer = setInterval(() => {
  countdownNum--;
  if (countdownNum <= 0) {
    clearInterval(countdownTimer);
    startSurprise();
  } else {
    countdownEl.textContent = countdownNum;
  }
}, 1000);
