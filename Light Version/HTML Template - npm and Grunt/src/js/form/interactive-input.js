const app = require('../utils/core');

app.querySelector('.interactive-input', function (elements) {
  for (const el of elements) {
    const input = el.querySelector('input'),
          inputResetIcon = el.querySelector('.interactive-input-action'),
          activeClass = 'active';

    if (input) {
      let previousValue = '';

      const resetInputOnKey = function (e) {
        // ESC key pressed
        if (e.keyCode === 27) {
          input.value = '';
          setActiveClass();
          window.removeEventListener('keydown', resetInputOnKey);
        }
      };

      const setActiveClass = function () {
        if (previousValue === '' && input.value !== '') {
          el.classList.add(activeClass);
          window.addEventListener('keydown', resetInputOnKey);
        } else if (input.value === '') {
          el.classList.remove(activeClass);
          window.removeEventListener('keydown', resetInputOnKey);
        }
      };

      input.addEventListener('input', setActiveClass);

      if (inputResetIcon) {
        inputResetIcon.addEventListener('click', function () {
          input.value = '';
          input.focus();
          setActiveClass();
        });
      }
    }
  }
});