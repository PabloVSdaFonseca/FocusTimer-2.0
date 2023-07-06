import Sound from "./sounds.js"

const sound = Sound();
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);
const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffeeShop = document.querySelector('.coffeeShop');
const buttonFire = document.querySelector('.fire');

/* -- Timer -- */

function countDown() {

  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (minutes <= 0 && seconds <= 0) {
      Sound().timeEnd();
      return;
    };

    if ( seconds <= 0 ) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");


    countDown(); /*Recursividade: quando uma função chama ela mesma*/

  }, 1000);
};

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut)
};

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
};


/* -- Botões -- */

function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
};

function pauseTimer() {
  clearTimeout(timerTimeOut);
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  sound.pressButton();
};

buttonPlay.addEventListener('click', function() {
  countDown();
  play();
  sound.pressButton();
});

buttonPause.addEventListener('click', pauseTimer);

buttonStop.addEventListener('click', () => {
  resetTimer();
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  sound.pressButton();
});

buttonPlus.addEventListener('click', () => {
  minutesDisplay.textContent = String(minutes += 5).padStart(2, "0"); 
  sound.pressButton();
});

buttonMinus.addEventListener('click', () => {
  if (minutes > 0) {
  minutesDisplay.textContent = String(minutes -= 5).padStart(2, "0"); 
  };
  sound.pressButton();
});

/* -- Botões de som -- */

function resetCards() {
  buttonForest.classList.remove('cardSelected');
  buttonRain.classList.remove('cardSelected');
  buttonCoffeeShop.classList.remove('cardSelected');
  buttonFire.classList.remove('cardSelected');
};

buttonForest.addEventListener('click', function() {
  let cardSelected = buttonForest.classList.contains('cardSelected');

  sound.forestAudio();
  resetCards();
  buttonForest.classList.add('cardSelected');
  
  if (cardSelected) {
    sound.soundForest.pause();
    buttonForest.classList.remove('cardSelected');
    return;
  }

});

buttonRain.addEventListener('click', function() {
  let cardSelected = buttonRain.classList.contains('cardSelected');

  sound.rainAudio();
  resetCards();
  buttonRain.classList.add('cardSelected');

  if (cardSelected) {
    sound.soundRain.pause();
    buttonRain.classList.remove('cardSelected');
    return;
  }
});

buttonCoffeeShop.addEventListener('click', function() {
  let cardSelected = buttonCoffeeShop.classList.contains('cardSelected');

  sound.coffeeAudio();
  resetCards();
  buttonCoffeeShop.classList.add('cardSelected');

  if (cardSelected) {
    sound.soundCoffeeShop.pause();
    buttonCoffeeShop.classList.remove('cardSelected');
    return;
  }
});

buttonFire.addEventListener('click', function() {
  let cardSelected = buttonFire.classList.contains('cardSelected');

  sound.fireAudio();
  resetCards();
  buttonFire.classList.add('cardSelected');

  if (cardSelected) {
    sound.soundFire.pause();
    buttonFire.classList.remove('cardSelected');
    return;
  }
});


