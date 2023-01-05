const inputEl = document.querySelector('input');
const btnStartEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minsEl = document.querySelector('span[data-minutes]');
const secsEl = document.querySelector('span[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// console.log(addLeadingZero('1'));

function timer(targetDate) {
  setInterval(() => {
    const delta = new Date(targetDate) - new Date();
    // console.log(delta);
    // console.log(convertMs(delta));

    daysEl.textContent = convertMs(delta).days;
    hoursEl.textContent = addLeadingZero(convertMs(delta).hours);
    minsEl.textContent = addLeadingZero(convertMs(delta).minutes);
    secsEl.textContent = addLeadingZero(convertMs(delta).seconds);
  }, 1000);
}

btnStartEl.addEventListener('click', () => {
  timer(new Date(`${inputEl.value}`));
});
