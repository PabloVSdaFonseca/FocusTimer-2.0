export default function() {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const soundForest = new Audio("sound/Floresta.wav");
  const soundRain = new Audio("sound/Chuva.wav");
  const soundCoffeeShop = new Audio("sound/Cafeteria.wav");
  const soundFire = new Audio("sound/Lareira.wav");


  function soundsOff() {
    soundForest.pause()
    soundRain.pause()
    soundCoffeeShop.pause()
    soundFire.pause()
  }

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function forestAudio() {
    soundsOff();
    soundForest.play();
    soundForest.loop = true;
  }

  function rainAudio() {
    soundsOff();
    soundRain.play();
    soundRain.loop = true;
  }

  function coffeeAudio() {
    soundsOff();
    soundCoffeeShop.play();
    soundCoffeeShop.loop = true; 
  }

  function fireAudio() {
    soundsOff();
    soundFire.play();
    soundFire.loop = true;
  }

  return {
    
    pressButton,
    timeEnd,

    forestAudio,
    rainAudio,
    coffeeAudio,
    fireAudio,

    soundsOff,

    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFire
  }
}
