function navigateToPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const targetPage = document.getElementById(`page${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}


//background floating
function createFloatingElements() {
  const container = document.getElementById('floatingContainer');
  const items = ['❤️', '🌺', '🎈', '🌸', '✨', '💕'];
  
  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.classList.add('floating-item');
    span.innerText = items[Math.floor(Math.random() * items.length)];
    span.style.left = `${Math.random() * 100}vw`;
    span.style.animationDuration = `${6 + Math.random() * 6}s`;
    span.style.animationDelay = `${Math.random() * 5}s`;
    span.style.fontSize = `${1 + Math.random() * 1.5}rem`;
    container.appendChild(span);
  }
}


//page1
const btnYes=document.querySelector(".yes");
const btnNo=document.querySelector(".no");

btnYes.addEventListener('click', () => {
  navigateToPage(2);
});

function moveNoButton(){
    const x=Math.random() * (window.innerWidth-btnNo.offsetWidth-100);
    const y=Math.random() * (window.innerHeight-btnNo.offsetHeight-100);

   btnNo.style.position=`fixed`;
   btnNo.style.left = `${Math.max(20, x)}px`;
   btnNo.style.top = `${Math.max(20, y)}px`;

}


btnNo.addEventListener("mouseenter",moveNoButton);
btnNo.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    moveNoButton();
})


//part 2
const flame = document.getElementById('flame');
const wishMessage = document.getElementById('wishmsg');
const btnToPage3 = document.getElementById('btntopage3');

flame.addEventListener('click', () => {
  if (!flame.classList.contains('extinguished')) {
    flame.classList.add('extinguished');
    
    // Trigger confetti celebration
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    setTimeout(() => {
     wishmsg.classList.remove('hidden');
    btnToPage3.classList.remove('hidden');
    }, 600);
  }
});

btnToPage3.addEventListener('click', () => {
  navigateToPage(3);
});



//page3
const envelopeContainer = document.getElementById('envelopeContainer');
const letterCard = document.getElementById('letterCard');
const typewriterText = document.getElementById('typewriterText');
const btnToPage4 = document.getElementById('btnToPage4');

const letterMessage = `My goloh baby,
Please dont go away,I know i am not an ideal person whom you should be with for 50 or more years.I say you things that i shouldn't and other ones would have left me.But i know you will never.
I am so lucky to have you.I haven't seen someone who loves his partner more than anyone like u do and i dont know which one i will put no 1 between the beauty of your face and the love for reading.
Baby do whatever you want,whatever it takes talk or get help to research whatever it is just do it i will be alr8 and i have thought many things but adrita will cheat on his partner this thought will never be on my mind even if it will happend i still dont gonna believe it.
Baby sorry sorry maf kardo na i love u and i behaves rude with u😓,plz tolerate me and trust me i will do good in life and we will have a beautiful family
And for billion times and for eternity and for the next life and every moment i just wanna say

                           আমি তোমাকে অনেক ভালোবাসি❤️😚`

let letterOpened = false;

envelopeContainer.addEventListener('click', () => {
  if (!letterOpened) {
    letterOpened = true;
    envelopeContainer.style.display = 'none';
    letterCard.classList.remove('hidden');
    startTypewriter(letterMessage, typewriterText, () => {
      btnToPage4.classList.remove('hidden');
    });
  }
});

function startTypewriter(text, element, callback) {
  let index = 0;
  element.innerText = '';
  
  function typeNextChar() {
    if (index < text.length) {
      element.innerText += text.charAt(index);
      index++;
      setTimeout(typeNextChar, 5);
    } else if (callback) {
      callback();
    }
  }
  
  typeNextChar();
}

btnToPage4.addEventListener('click', () => {
  navigateToPage(4);
});

//page4
const btnToPage5 = document.getElementById('btnToPage5');

btnToPage5.addEventListener('click', () => {
  navigateToPage(5);
});


//page5
const interactiveHeart = document.getElementById('interactiveHeart');
const clickCounterText = document.getElementById('clickCounterText');
const heartStatusMessage = document.getElementById('heartStatusMessage');
const btnToPage6 = document.getElementById('btnToPage6');

let heartClickCount = 0;

const heartMessages = [
  "Click me again! 💕",
  "More love! 💖",
  "Still counting... 💞",
  "You mean everything to me! ✨",
  "Almost overflowing... 💓",
  "There isn't a number big enough. ∞❤️"
];

interactiveHeart.addEventListener('click', () => {
  heartClickCount++;
  
  // Pulse Animation
  interactiveHeart.classList.remove('pulse-anim');
  void interactiveHeart.offsetWidth; // Trigger reflow
  interactiveHeart.classList.add('pulse-anim');

  clickCounterText.innerText = `Love Level: ${heartClickCount}`;

  if (heartClickCount <= heartMessages.length) {
    heartStatusMessage.innerText = heartMessages[heartClickCount - 1];
  }

  if (heartClickCount >= heartMessages.length) {
    btnToPage6.classList.remove('hidden');
  }
});

btnToPage6.addEventListener('click', () => {
  navigateToPage(6);
});


//page6
function triggerGrandFinaleConfetti() {
  if (typeof confetti === 'function') {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}

const giftBox = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');


let giftOpened = false;

giftBox.addEventListener('click', () => {
  
  if (!giftOpened) {
    giftOpened = true;
    giftBox.style.transform = 'scale(1.3) rotate(15deg)';
    
    setTimeout(() => {
      giftBox.innerText = '🎈🌸🌹';
      giftMessage.classList.remove('hidden');
      btnRestart.classList.remove('hidden');

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }, 400);
  }
  triggerGrandFinaleConfetti();
});

// const btnRestart = document.getElementById('btnRestart');

// btnRestart.addEventListener('click', () => {
//   // Reset state variables
//   heartClickCount = 0;
//   clickCounterText.innerText = 'Love Level: 0';
//   heartStatusMessage.innerText = 'Click me!';
//   btnToPage6.classList.add('hidden');

//   letterOpened = false;
//   envelopeContainer.style.display = 'block';
//   letterCard.classList.add('hidden');
//   typewriterText.innerText = '';
//   btnToPage4.classList.add('hidden');

//   flame.classList.remove('extinguished');
//   wishMessage.classList.add('hidden');
//   btnToPage3.classList.add('hidden');

//   giftOpened=false;
//   giftBox.innerText = '🎁';
//   giftBox.style.transform = 'none';
//   giftMessage.classList.add('hidden');

//   // Navigate back to Page 1
//   navigateToPage(1);
// });


//initialisation
document.addEventListener('DOMContentLoaded', () => {
  createFloatingElements();
});