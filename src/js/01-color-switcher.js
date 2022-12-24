const startButtonRef = document.querySelector('button[data-start]');
const stopButtonRef = document.querySelector('button[data-stop]');

startButtonRef.addEventListener('click', handleStartButtonClick);
stopButtonRef.addEventListener('click', handleStopButtonClick);

let intervalId = null;
stopButtonRef.setAttribute('disabled', true);

function handleStartButtonClick() {
  startButtonRef.setAttribute('disabled', true);
  stopButtonRef.removeAttribute('disabled');
  intervalId = setInterval(handleColorSwitch, 1000);
}

function handleStopButtonClick() {
  startButtonRef.removeAttribute('disabled');
  stopButtonRef.setAttribute('disabled', true);
  clearInterval(intervalId);
}

function handleColorSwitch() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
