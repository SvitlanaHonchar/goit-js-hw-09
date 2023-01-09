const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

createPromise()
  .then(({ position, delay }) =>
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
  )
  .catch(({ position, delay }) =>
    console.log(`❌ Rejected promise ${position} in ${delay}ms`)
  );

function onSubmit(e) {
  e.preventDefault();
}

formEl.addEventListener('submit', onSubmit);
