const plugins = require('../utils/plugins');

plugins.createAccordion({
  triggerSelector: '.accordion-trigger',
  contentSelector: '.accordion-content',
  startOpenClass: 'accordion-open',
  selectedClass: 'selected',
  linkTriggers: false
});

plugins.createAccordion({
  triggerSelector: '.accordion-trigger-linked',
  contentSelector: '.accordion-content-linked',
  startOpenClass: 'accordion-open',
  selectedClass: 'selected',
  linkTriggers: true
});