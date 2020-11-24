const app = require('../utils/core');

app.querySelector('.form-switch', function (switchInputs) {
  for (const switchInput of switchInputs) {
    const toggleSwitch = function () {
      switchInput.classList.toggle('active');
    };

    switchInput.addEventListener('click', toggleSwitch);
  }
});