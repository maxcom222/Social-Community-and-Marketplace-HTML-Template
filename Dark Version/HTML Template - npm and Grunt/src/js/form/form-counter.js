const app = require('../utils/core');

app.querySelector('.form-counter', function (counters) {
  for (const counter of counters) {
    const value = counter.querySelector('.form-counter-value'),
          increaseButton = counter.querySelector('.form-counter-control-increase'),
          decreaseButton = counter.querySelector('.form-counter-control-decrease'),
          increaseBy = counter.getAttribute('data-increase-by') ? Number.parseInt(counter.getAttribute('data-increase-by'), 10) : 1,
          minValue = counter.getAttribute('data-min') ? Number.parseInt(counter.getAttribute('data-min'), 10) : 1;

    const increaseValue = function () {
      value.innerHTML = Number.parseInt(value.innerHTML, 10) + increaseBy;
    };

    const decreaseValue = function () {
      if (Number.parseInt(value.innerHTML) === minValue) return;
      value.innerHTML = Number.parseInt(value.innerHTML, 10) - increaseBy;
    };

    increaseButton.addEventListener('click', increaseValue);
    decreaseButton.addEventListener('click', decreaseValue);
  }
});