import Notiflix from 'notiflix';

// елементи сторінки
const formEl = document.querySelector('.form');
const amountEl = document.querySelector('input[name=amount]');
const delayEl = document.querySelector('input[name=delay]');
const delayStepEl = document.querySelector('input[name=step]');

// при submit
function onSubmit(e) {
  e.preventDefault();

  const amount = +amountEl.value;
  let delayTime = +delayEl.value;
  const delayStepTime = +delayStepEl.value;
  let timeoutDelay = +delayEl.value;

  for (let i = 1; i < amount + 1; i++) {
    setTimeout(() => {
      createPromise(i, delayTime);
      delayTime += delayStepTime;
    }, timeoutDelay);
    timeoutDelay += delayStepTime;
  }
}

// проміси
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

// подія
formEl.addEventListener('submit', onSubmit);
