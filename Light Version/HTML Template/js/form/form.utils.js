/*-----------------
    FORM INPUT
-----------------*/
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

/*-------------------
    FORM COUNTER
-------------------*/
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

/*-------------------
    FORM SWITCH
-------------------*/
app.querySelector('.form-switch', function (switchInputs) {
  for (const switchInput of switchInputs) {
    const toggleSwitch = function () {
      switchInput.classList.toggle('active');
    };

    switchInput.addEventListener('click', toggleSwitch);
  }
});

/*------------------
    FORM RATING
------------------*/
app.querySelector('.form-rating', function (ratingInputs) {
  for (const ratingInput of ratingInputs) {
    const filledClass = 'filled',
          ratingItems = Array.from(ratingInput.children);

    const getStarsRating = function () {
      let rating = 0;

      for (const ratingItem of ratingItems) {
        if (ratingItem.classList.contains(filledClass)) {
          rating++;
        }
      }

      return rating;
    };

    const setStarsRating = function () {
      ratingInput.setAttribute('data-rating', getStarsRating());
    };

    const fillStar = function (item) {
      item.classList.add(filledClass);
    };

    const emptyStar = function (item) {
      item.classList.remove(filledClass);
    };

    const toggleStars = function () {
      const itemIndex = ratingItems.indexOf(this);

      for (let i = 0; i <= itemIndex; i++) {
        fillStar(ratingItems[i]);
      }

      for (let i = itemIndex + 1; i < ratingItems.length; i++) {
        emptyStar(ratingItems[i]);
      }

      setStarsRating();
    };

    for (const ratingItem of ratingItems) {
      ratingItem.addEventListener('click', toggleStars);
    }

    setStarsRating();
  }
});

/*------------------------
    INTERACTIVE INPUT
------------------------*/
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