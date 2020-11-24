app.plugins.createAccordion({
  triggerSelector: '.accordion-trigger',
  contentSelector: '.accordion-content',
  startOpenClass: 'accordion-open',
  selectedClass: 'selected',
  linkTriggers: false
});

app.plugins.createAccordion({
  triggerSelector: '.accordion-trigger-linked',
  contentSelector: '.accordion-content-linked',
  startOpenClass: 'accordion-open',
  selectedClass: 'selected',
  linkTriggers: true
});