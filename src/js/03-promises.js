const formEl = document.querySelector('.form');
const amountEl = document.querySelector('input[name=amount]');
const delayEl = document.querySelector('input[name=delay]');
const delayStepEl = document.querySelector('input[name=step]');

function onSubmit(e) {
  e.preventDefault();
  const amount = +amountEl.value;
  let delayTime = +delayEl.value;
  const delayStepTime = +delayStepEl.value;
  for (let index = 1; index < amount + 1; index++) {
    // setTimeout(() => {
    //   console.log(`delayTime is ${delayTime}`);
    // }, delayTime);
    createPromise(index, delayTime);
    delayTime += delayStepTime;
  }
}

// function createPromise(position, delay) {
//   console.log(position);
//   console.log(delay);
// }

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
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

formEl.addEventListener('submit', onSubmit);
