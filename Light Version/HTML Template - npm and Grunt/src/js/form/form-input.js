const app = require('../utils/core');

app.querySelector('.form-input', function (elements) {
  for (const el of elements) {
    if (el.classList.contains('always-active')) continue;
    
    const input = el.querySelector('input'),
          textarea = el.querySelector('textarea'),
          activeClass = 'active';

    let inputItem = undefined;

    if (input) inputItem = input;
    if (textarea) inputItem = textarea;

    if (inputItem) {
      inputItem.addEventListener('focus', function () {
        el.classList.add(activeClass);
      });

      inputItem.addEventListener('blur', function () {
        if (inputItem.value === '') {
          el.classList.remove(activeClass);
        }
      });
    }
  }
});