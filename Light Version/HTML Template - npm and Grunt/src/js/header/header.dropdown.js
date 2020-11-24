const plugins = require('../utils/plugins'),
      app = require('../utils/core');

/*--------------------
    HEADER SEARCH
--------------------*/
app.querySelector('#search-main', function (el) {
  const headerSearchDropdown = plugins.createDropdown({
    container: '.header-search-dropdown',
    offset: {
      top: 57,
      left: 0
    },
    animation: {
      type: 'translate-top'
    },
    controlToggle: true,
    closeOnWindowClick: false
  });
  
  const searchInput = el[0],
        breakpointWidth = 960;

  let previousValue = '';

  const hideSearchDropdownOnKey = function (e) {
    // ESC key pressed
    if (e.keyCode === 27) {
      headerSearchDropdown.hideDropdowns();
      previousValue = '';
      window.removeEventListener('keydown', hideSearchDropdownOnKey);
    }
  };

  const toggleSearchDropdown = function (e) {
    if (previousValue === '' && e.target.value !== '') {
      headerSearchDropdown.showDropdowns();
      window.addEventListener('keydown', hideSearchDropdownOnKey);
    } else if (e.target.value === '') {
      headerSearchDropdown.hideDropdowns();
      window.removeEventListener('keydown', hideSearchDropdownOnKey);
    }
    previousValue = e.target.value;
  };

  const interactiveInputAction = searchInput.parentElement.querySelector('.interactive-input-action');

  const hideSearchDropdown = function () {
    headerSearchDropdown.hideDropdowns();
    window.removeEventListener('keydown', hideSearchDropdownOnKey);
    previousValue = '';
  };

  if (window.innerWidth > breakpointWidth) {
    searchInput.addEventListener('input', toggleSearchDropdown);
    interactiveInputAction.addEventListener('click', hideSearchDropdown);
  }
});

/*----------------------
    HEADER DROPDOWNS
----------------------*/
plugins.createDropdown({
  trigger: '.header-dropdown-trigger',
  container: '.header-dropdown',
  offset: {
    top: 64,
    right: 6
  },
  animation: {
    type: 'translate-top'
  }
});

plugins.createDropdown({
  trigger: '.header-settings-dropdown-trigger',
  container: '.header-settings-dropdown',
  offset: {
    top: 64,
    right: 22
  },
  animation: {
    type: 'translate-top'
  }
});