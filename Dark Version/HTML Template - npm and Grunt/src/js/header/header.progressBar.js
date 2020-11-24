const plugins = require('../utils/plugins');

plugins.createProgressBar({
  container: '#logged-user-level',
  height: 4,
  lineColor: '#5538b5'
});

plugins.createProgressBar({
  container: '#logged-user-level',
  height: 4,
  gradient: {
    colors: ['#40d04f', '#d9ff65']
  },
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
  lineColor: '#5538b5'
});

plugins.createProgressBar({
  container: '#logged-user-level-cp',
  height: 4,
  gradient: {
    colors: ['#40d04f', '#d9ff65']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 62
  },
  linkText: true,
  linkUnits: 'exp',
  invertedProgress: true
});