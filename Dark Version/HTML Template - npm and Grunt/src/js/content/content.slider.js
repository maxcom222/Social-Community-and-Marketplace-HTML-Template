const plugins = require('../utils/plugins');

/*---------------------
    PROFILE HEADER 
---------------------*/
plugins.createSlider({
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
plugins.createSlider({
  container: '#section-navigation-slider',
  fixedWidth: 122,
  nav: false,
  loop: false,
  controlsContainer: '#section-navigation-slider-controls'
});

/*-------------------------
    SECTION NAVIGATION
-------------------------*/
plugins.createSlider({
  container: '#section-navigation-medium-slider',
  fixedWidth: 160,
  nav: false,
  loop: false,
  controlsContainer: '#section-navigation-medium-slider-controls'
});

/*------------------------
    USER STATS SLIDER
------------------------*/
plugins.createSlider({
  container: '#user-stats-slider',
  fixedWidth: 113,
  nav: false,
  loop: false,
  controlsContainer: '#user-stats-slider-controls'
});

/*---------------------------
    REACTION STATS SLIDER
---------------------------*/
plugins.createSlider({
  container: '#reaction-stats-slider',
  fixedWidth: 146,
  nav: false,
  loop: false,
  controlsContainer: '#reaction-stats-slider-controls'
});

/*---------------------------
    STAT BLOCK SLIDER
---------------------------*/
plugins.createSlider({
  container: '#stat-block-slider',
  fixedWidth: 272,
  nav: false,
  loop: false,
  controlsContainer: '#stat-block-slider-controls'
});

/*-------------------
    STREAM SLIDER
-------------------*/
plugins.createSlider({
  container: '#stream-slider',
  fixedWidth: 184,
  gutter: 16,
  nav: false,
  controlsContainer: '#stream-slider-controls'
});

/*----------------
    STATS BOX
----------------*/
plugins.createSlider({
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
plugins.createSlider({
  container: '#reaction-stat-slider-items',
  nav: false,
  speed: 600,
  controlsContainer: '#reaction-stat-slider-controls'
});

/*-----------------
    BADGE STAT
-----------------*/
plugins.createSlider({
  container: '#badge-stat-slider-items',
  nav: false,
  loop: false,
  speed: 600,
  controlsContainer: '#badge-stat-slider-controls'
});

/*-------------------
    PRODUCT BOX
-------------------*/
plugins.createSlider({
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
  
    const upStatsSlider = plugins.createSlider({
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
  
    const upSocialLinkSlider = plugins.createSlider({
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
