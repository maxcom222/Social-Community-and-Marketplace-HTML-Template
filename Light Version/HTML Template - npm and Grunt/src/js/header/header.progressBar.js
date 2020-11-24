const plugins = require('../utils/plugins');

plugins.createProgressBar({
  container: '#logged-user-level',
  height: 4,
  lineColor: '#4a46c8'
});

plugins.createProgressBar({
  container: '#logged-user-level',
  height: 4,
  lineColor: '#41efff',
  scale: {
    start: 0,
    end: 100,
    stop: 62
  },
  linkText: true,
  linkUnits: 'exp',
  invertedProgress: true
});

plugins.createProgressBar({
  container: '#logged-user-level-cp',
  height: 4,
  lineColor: '#4a46c8'
});

plugins.createProgressBar({
  container: '#logged-user-level-cp',
  height: 4,
  lineColor: '#41efff',
  scale: {
    start: 0,
    end: 100,
    stop: 62
  },
  linkText: true,
  linkUnits: 'exp',
  invertedProgress: true
});