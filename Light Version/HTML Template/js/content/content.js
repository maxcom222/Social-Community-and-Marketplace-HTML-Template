/*-------------------
    CONTENT TABS
-------------------*/
app.plugins.createTab({
  triggers: '.tab-box-option',
  elements: '.tab-box-item'
});

/*------------------------
    CONTENT DROPDOWNS
------------------------*/
app.plugins.createDropdown({
  trigger: '.widget-box-post-settings-dropdown-trigger',
  container: '.widget-box-post-settings-dropdown',
  offset: {
    top: 30,
    right: 9
  },
  animation: {
    type: 'translate-top',
    speed: .3,
    translateOffset: {
      vertical: 20
    }
  }
});

app.plugins.createDropdown({
  trigger: '.reaction-item-dropdown-trigger',
  container: '.reaction-item-dropdown',
  triggerEvent: 'hover',
  offset: {
    bottom: 38,
    left: -16
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 20
    }
  }
});

app.plugins.createDropdown({
  trigger: '.reaction-options-dropdown-trigger',
  container: '.reaction-options-dropdown',
  triggerEvent: 'click',
  offset: {
    bottom: 54,
    left: -16
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 20
    }
  },
  closeOnDropdownClick: true
});

app.plugins.createDropdown({
  trigger: '.reaction-options-small-dropdown-trigger',
  container: '.reaction-options-small-dropdown',
  triggerEvent: 'click',
  offset: {
    bottom: 30,
    left: -80
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 16
    }
  },
  closeOnDropdownClick: true
});

app.plugins.createDropdown({
  trigger: '.post-settings-dropdown-trigger',
  container: '.post-settings-dropdown',
  offset: {
    bottom: 30,
    right: 0
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 16
    }
  }
});

/*----------------------------
    CONTENT PROGRESS BARS
----------------------------*/
/*-----------------------
    EXP TO NEXT LEVEL
-----------------------*/
app.plugins.createProgressBar({
  container: '#exp-to-next-level',
  height: 6,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#exp-to-next-level',
  height: 6,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 200,
    stop: 162
  },
  linkText: true,
  linkUnits: 'exp',
  invertedProgress: true,
  animateOnScroll: true
});

/*----------------
    BADGE ITEM
----------------*/
app.plugins.createProgressBar({
  container: '#badge-bronze',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-bronze',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-silver',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-silver',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 100
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-gold',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-gold',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 500,
    stop: 461
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-platinum',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-platinum',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1000,
    stop: 461
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-traveller',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-traveller',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 5,
    stop: 4
  },
  invertedProgress: true,
  linkText: true,
  linkUnits: 'topics',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-caffeinated',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-caffeinated',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 0
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-upowered',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-upowered',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 50,
    stop: 42
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-scientist',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-scientist',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-ncreature',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-ncreature',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 100
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-warrior',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-warrior',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-liked',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-liked',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 500,
    stop: 462
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-sloved',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-sloved',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1000,
    stop: 462
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-qconq',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-qconq',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 4
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-villain',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-villain',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 89
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-age',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-age',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 730,
    stop: 605
  },
  invertedProgress: true,
  linkText: true,
  linkUnits: 'days',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-tstruck',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-tstruck',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 50,
    stop: 41
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-uexp',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-uexp',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 20,
    stop: 17
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-globet',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-globet',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 8
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-verifieds',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-verifieds',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-gempost',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-gempost',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 0
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-peoplesp',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-peoplesp',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 200,
    stop: 181
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-rulerm',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-rulerm',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 5,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-marketeer',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-marketeer',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 7
  },
  invertedProgress: true,
  linkText: true,
  linkUnits: 'items',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-tycoon',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-tycoon',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 32
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-mightiers',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-mightiers',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 50,
    stop: 26
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-phantom',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-phantom',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-forumsf',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-forumsf',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 20,
    stop: 13
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-fcultivator',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-fcultivator',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 33
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-splanner',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-splanner',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 25,
    stop: 9
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-collector',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-collector',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 5,
    stop: 2
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-prophoto',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-prophoto',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 500,
    stop: 24
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-rmachine',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-rmachine',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 50,
    stop: 41
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-bronzec',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-bronzec',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-silverc',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-silverc',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-goldc',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-goldc',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 1
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

app.plugins.createProgressBar({
  container: '#badge-platinumc',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#badge-platinumc',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 1,
    stop: 0
  },
  linkText: true,
  linkUnits: '/',
  emptyText: 'locked',
  completeText: 'unlocked!'
});

/*-------------------
    QUEST PREVIEW
-------------------*/
app.plugins.createProgressBar({
  container: '#quest-preview-nth',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-preview-nth',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 65
  },
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-preview-sk',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-preview-sk',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 85
  },
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-preview-bp',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-preview-bp',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 32
  },
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-preview-htp',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-preview-htp',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 0
  },
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-preview-sm',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-preview-sm',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 49
  },
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-sk',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-sk',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 8,
    stop: 7
  },
  linkText: true,
  linkUnits: '/'
});

app.plugins.createProgressBar({
  container: '#quest-fu',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-fu',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 50,
    stop: 50
  },
  linkText: true,
  linkUnits: '/'
});

app.plugins.createProgressBar({
  container: '#quest-nth',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-nth',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 67
  },
  linkText: true,
  linkUnits: '%'
});

app.plugins.createProgressBar({
  container: '#quest-sm',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-sm',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 5
  },
  linkText: true,
  linkUnits: '/'
});

app.plugins.createProgressBar({
  container: '#quest-line-ps',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-ps',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 100
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-nth',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-nth',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 67
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-fu',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-fu',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 50,
    stop: 50
  },
  linkText: true,
  linkUnits: '/',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-ph',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-ph',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 20,
    stop: 20
  },
  linkText: true,
  linkUnits: '/',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-tr',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-tr',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 2
  },
  linkText: true,
  linkUnits: '/',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-sk',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-sk',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 8,
    stop: 7
  },
  linkText: true,
  linkUnits: '/',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-bp',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-bp',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 30,
    stop: 12
  },
  linkText: true,
  linkUnits: '/',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-htp',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-htp',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 0
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#quest-line-sm',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#quest-line-sm',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 5
  },
  linkText: true,
  linkUnits: '/',
  animateOnScroll: true
});

/*------------------
    POLL RESULT
------------------*/
app.plugins.createProgressBar({
  container: '#poll-result-1',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#poll-result-1',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 62
  },
  linkText: true,
  linkUnits: '%'
});

app.plugins.createProgressBar({
  container: '#poll-result-2',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#poll-result-2',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 27
  },
  linkText: true,
  linkUnits: '%'
});

app.plugins.createProgressBar({
  container: '#poll-result-3',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#poll-result-3',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 11
  },
  linkText: true,
  linkUnits: '%'
});


/*---------------------
    POST ENGAGEMENT
---------------------*/
app.plugins.createProgressBar({
  container: '#post-engagement-1',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#post-engagement-1',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 89
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#post-engagement-2',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#post-engagement-2',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 74
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#post-engagement-3',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#post-engagement-3',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 53
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#post-engagement-4',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#post-engagement-4',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 48
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#post-engagement-5',
  height: 4,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#post-engagement-5',
  height: 4,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 21
  },
  linkText: true,
  linkUnits: '%',
  animateOnScroll: true
});

/*-----------------
    TOP COUNTRY
-----------------*/
app.plugins.createProgressBar({
  container: '#top-country-1',
  width: 178,
  height: 6,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#top-country-1',
  width: 178,
  height: 6,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 25362,
    stop: 25362
  },
  split: {
    parts: 30,
    gap: 2,
    color: '#fff'
  },
  linkText: true,
  linkUnits: false,
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#top-country-2',
  width: 178,
  height: 6,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#top-country-2',
  width: 178,
  height: 6,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 25362,
    stop: 18201
  },
  split: {
    parts: 30,
    gap: 2,
    color: '#fff'
  },
  linkText: true,
  linkUnits: false,
  animateOnScroll: true
});

app.plugins.createProgressBar({
  container: '#top-country-3',
  width: 178,
  height: 6,
  lineColor: '#e7e8ee'
});

app.plugins.createProgressBar({
  container: '#top-country-3',
  width: 178,
  height: 6,
  gradient: {
    colors: ['#615dfa', '#41efff']
  },
  scale: {
    start: 0,
    end: 25362,
    stop: 9567
  },
  split: {
    parts: 30,
    gap: 2,
    color: '#fff'
  },
  linkText: true,
  linkUnits: false,
  animateOnScroll: true
});

/*----------------------
    CONTENT SLIDERS
----------------------*/
/*---------------------
    PROFILE HEADER 
---------------------*/
app.plugins.createSlider({
  container: '#profile-header-social-links-slider',
  items: 4,
  fixedWidth: 32,
  gutter: 8,
  loop: false,
  nav: false,
  controlsContainer: '#profile-header-social-links-slider-controls',
  responsive: {
    481: {
      fixedWidth: 40,
      gutter: 12
    }
  }
});

/*-------------------------
    SECTION NAVIGATION
-------------------------*/
app.plugins.createSlider({
  container: '#section-navigation-slider',
  fixedWidth: 122,
  nav: false,
  loop: false,
  controlsContainer: '#section-navigation-slider-controls'
});

/*-------------------------
    SECTION NAVIGATION
-------------------------*/
app.plugins.createSlider({
  container: '#section-navigation-medium-slider',
  fixedWidth: 160,
  nav: false,
  loop: false,
  controlsContainer: '#section-navigation-medium-slider-controls'
});

/*------------------------
    USER STATS SLIDER
------------------------*/
app.plugins.createSlider({
  container: '#user-stats-slider',
  fixedWidth: 113,
  nav: false,
  loop: false,
  controlsContainer: '#user-stats-slider-controls'
});

/*---------------------------
    REACTION STATS SLIDER
---------------------------*/
app.plugins.createSlider({
  container: '#reaction-stats-slider',
  fixedWidth: 146,
  nav: false,
  loop: false,
  controlsContainer: '#reaction-stats-slider-controls'
});

/*---------------------------
    STAT BLOCK SLIDER
---------------------------*/
app.plugins.createSlider({
  container: '#stat-block-slider',
  fixedWidth: 272,
  nav: false,
  loop: false,
  controlsContainer: '#stat-block-slider-controls'
});

/*-------------------
    STREAM SLIDER
-------------------*/
app.plugins.createSlider({
  container: '#stream-slider',
  fixedWidth: 184,
  gutter: 16,
  nav: false,
  controlsContainer: '#stream-slider-controls'
});

/*----------------
    STATS BOX
----------------*/
app.plugins.createSlider({
  container: '#stats-box-slider-items',
  mode: 'gallery',
  nav: false,
  speed: 1000,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: '#stats-box-slider-controls'
});

/*--------------------
    REACTION STAT
--------------------*/
app.plugins.createSlider({
  container: '#reaction-stat-slider-items',
  nav: false,
  speed: 600,
  controlsContainer: '#reaction-stat-slider-controls'
});

/*-----------------
    BADGE STAT
-----------------*/
app.plugins.createSlider({
  container: '#badge-stat-slider-items',
  nav: false,
  loop: false,
  speed: 600,
  controlsContainer: '#badge-stat-slider-controls'
});

/*-------------------
    PRODUCT BOX
-------------------*/
app.plugins.createSlider({
  container: '#product-box-slider-items',
  mode: 'gallery',
  speed: 1000,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: '#product-box-slider-controls',
  navContainer: '#product-box-slider-roster'
});

/*-------------------------
    USER PREVIEW STATS 
-------------------------*/
const createUserPreviewStatsSliders = function () {
  let i = 1;

  while (true) {
    const j = i < 10 ? `0${i}` : i;
  
    const upStatsSlider = app.plugins.createSlider({
      container: `#user-preview-stats-slides-${j}`,
      loop: false,
      controls: false,
      navContainer: `#user-preview-stats-roster-${j}`
    });
  
    if (!upStatsSlider) break;
  
    i++;
  }
};

createUserPreviewStatsSliders();

const centerTinySlider = function (sliderInfo, itemWidth, gutterWidth) {
  sliderInfo.container.style.width = `${sliderInfo.slideCount * itemWidth + (sliderInfo.slideCount - 1) * gutterWidth}px`;
};

/*--------------------------------
    USER PREVIEW SOCIAL LINKS
--------------------------------*/
const createUserPreviewSocialLinksSliders = function () {
  let i = 1;

  while (true) {
    const j = i < 10 ? `0${i}` : i;
  
    const upSocialLinkSlider = app.plugins.createSlider({
      container: `#user-preview-social-links-slider-${j}`,
      items: 4,
      fixedWidth: 32,
      gutter: 8,
      loop: false,
      nav: false,
      controlsContainer: `#user-preview-social-links-slider-controls-${j}`
    });
  
    if (!upSocialLinkSlider) break;
  
    centerTinySlider(upSocialLinkSlider.getInfo(), 32, 8);
  
    i++;
  }
};

createUserPreviewSocialLinksSliders();