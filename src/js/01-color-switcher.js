import Notiflix from 'notiflix';

const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

let timerID = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStopEl.disabled = true;

function onBtnStartElClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
  timerID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStopElClick() {
  if (!btnStartEl.disabled) {
    return;
  }
  clearInterval(timerID);
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;

  Notiflix.Notify.info(`Nice color!`);
}

btnStartEl.addEventListener('click', onBtnStartElClick);
btnStopEl.addEventListener('click', onBtnStopElClick);
