// імпорт бібліотеки
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

// знаходимо елементи на сторінці
const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minsEl = document.querySelector('span[data-minutes]');
const secsEl = document.querySelector('span[data-seconds]');

// змінна для інтервалу
let timerId = null;

// стан кнопки при завантаженні сторінки
btnStartEl.disabled = false;

// налаштування flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const pastTime = selectedDates[0] - new Date();
    // console.log(pastTime);
    if (pastTime < 0) {
      Notiflix.Notify.warning('Please choose a date in the future');
      //   alert('Please choose a date in the future');
      btnStartEl.disabled = true;
      return;
    }
    btnStartEl.disabled = false;
  },
  //   minDate: 'today',
};

// додати календар з бібліотеки
flatpickr('#datetime-picker', options);

// конвертація мс в день/години/хв/сек
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

// додаємо нулі якщо значення часу це одна цифра
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// ставимо інтервал та передаємо значення різниці часу в елементи
function timer(targetDate) {
  timerId = setInterval(() => {
    const delta = new Date(targetDate) - new Date();

    daysEl.textContent = convertMs(delta).days;
    hoursEl.textContent = addLeadingZero(convertMs(delta).hours);
    minsEl.textContent = addLeadingZero(convertMs(delta).minutes);
    secsEl.textContent = addLeadingZero(convertMs(delta).seconds);

    if (
      daysEl.textContent == 0 &&
      hoursEl.textContent == 0 &&
      minsEl.textContent == 0 &&
      secsEl.textContent == 0
    ) {
      clearInterval(timerId);

      const bodyEl = document.querySelector('body');
      const img =
        '<img src="https://i.giphy.com/media/ibopaMJuLJDrOHWuiA/giphy.webp" alt="fanfare">';
      bodyEl.insertAdjacentHTML('beforeend', img);
    }
  }, 1000);
}

// const timerStop = () => {
//   if (
//     daysEl.textContent == 0 &&
//     hoursEl.textContent == 0 &&
//     minsEl.textContent == 0 &&
//     secsEl.textContent == 0
//   ) {
//     clearInterval(timerId);
//   }
// };

// timerStop();

// подія
btnStartEl.addEventListener('click', () => {
  timer(new Date(`${inputEl.value}`));
  btnStartEl.disabled = true;
});
