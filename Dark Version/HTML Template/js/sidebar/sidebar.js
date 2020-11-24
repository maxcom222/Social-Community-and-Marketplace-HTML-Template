/*-------------------
    CONTENT GRID 
-------------------*/
app.querySelector('.content-grid', function (el) {
  const sidebar = {
          chat: {
            active: false,
            minWidth: 80,
            maxWidth: 300
          },
          navigation: {
            active: false,
            minWidth: 80,
            maxWidth: 300
          }
        },
        breakpointWidth = 1366;

  const updateGridPosition = function (contentGrid) {
    if (window.innerWidth > breakpointWidth) {
      const chatWidth = sidebar.chat.active ? sidebar.chat.maxWidth : sidebar.chat.minWidth,
            navigationWidth = sidebar.navigation.active ? sidebar.navigation.maxWidth : sidebar.navigation.minWidth,
            availableWidth = document.body.clientWidth - contentGrid.offsetWidth - chatWidth - navigationWidth,
            offsetX = (availableWidth / 2) + navigationWidth;

      contentGrid.style.transform = `translate(${offsetX}px, 0)`;
    } else {
      contentGrid.style.transform = `translate(0, 0)`;
    }
  };

  const updateGridPositions = function () {
    for (const grid of el) {
      updateGridPosition(grid);
    }
  };

  const setGridTransition = function (grid) {
    grid.style.transition = `transform .4s ease-in-out`;
  };

  const setGridTransitions = function () {
    for (const grid of el) {
      setGridTransition(grid);
    }
  };

  updateGridPositions();
  window.addEventListener('resize', updateGridPositions);
  // delay transition setup to avoid loading animation
  window.setTimeout(setGridTransitions, 300);

  /*-------------------
      CHAT WIDGET 
  -------------------*/
  app.querySelector('#chat-widget-messages', function (el) {
    const chatWidget = el[0],
          topOffset = 80,
          closedWidth = 80,
          openWidth = 300,
          chatWidgetMessages = chatWidget.querySelector('.chat-widget-messages'),
          chatWidgetForm = chatWidget.querySelector('.chat-widget-form'),
          chatWidgetButton = chatWidget.querySelector('.chat-widget-button'),
          closedClass = 'closed';
  
    const setChatMessagesDimensions = function () {
      if (chatWidget.classList.contains(closedClass)) {
        chatWidgetMessages.style.height = `${window.innerHeight - chatWidgetButton.offsetHeight - topOffset}px`;
      } else {
        chatWidgetMessages.style.height = `${window.innerHeight - chatWidgetForm.offsetHeight - chatWidgetButton.offsetHeight - topOffset}px`;
      }
    };
  
    const toggleChatWidget = function () {
      chatWidget.classList.toggle(closedClass);
      setChatMessagesDimensions();

      sidebar.chat.active = !chatWidget.classList.contains(closedClass);
      updateGridPositions();
    };
  
    const openChatWidget = function () {
      chatWidget.classList.remove(closedClass);
      setChatMessagesDimensions();

      sidebar.chat.active = true;
      updateGridPositions();
    };
  
    chatWidgetButton.addEventListener('click', toggleChatWidget);
  
    setChatMessagesDimensions();
    window.addEventListener('resize', setChatMessagesDimensions);
  
    app.querySelector('#chat-widget-message', function (el) {
      const chatMessageWidget = el[0],
            chatWidgetMessage = chatWidgetMessages.querySelectorAll('.chat-widget-message'),
            chatMessageWidgetHeader = chatMessageWidget.querySelector('.chat-widget-header'),
            chatMessageWidgetConversation = chatMessageWidget.querySelector('.chat-widget-conversation'),
            chatMessageWidgetCloseButton = chatMessageWidget.querySelector('.chat-widget-close-button'),
            hiddenClass = 'hidden';
  
      const setChatConversationDimensions = function () {
        chatMessageWidgetConversation.style.height = `${window.innerHeight - chatMessageWidgetHeader.offsetHeight - chatWidgetForm.offsetHeight - chatWidgetButton.offsetHeight - topOffset}px`;
      };
      
      const toggleChatMessageWidget = function () {
        chatMessageWidget.classList.toggle(hiddenClass);
      };
  
      const closeChatMessageWidget = function () {
        chatMessageWidget.classList.add(hiddenClass);
      };
  
      for (const widgetMessage of chatWidgetMessage) {
        widgetMessage.addEventListener('click', toggleChatMessageWidget);
        widgetMessage.addEventListener('click', openChatWidget);
      }
  
      chatWidgetButton.addEventListener('click', closeChatMessageWidget);
      chatMessageWidgetCloseButton.addEventListener('click', toggleChatMessageWidget);
  
      setChatConversationDimensions();
      window.addEventListener('resize', setChatConversationDimensions);
    });
  });
  
  /*------------------------
      NAVIGATION WIDGET 
  ------------------------*/
  app.querySelector('.navigation-widget-trigger', function (el) {
    const navigationTrigger = el[0],
          topOffset = 80,
          navigationWidget = document.querySelector('#navigation-widget'),
          navigationWidgetSmall = document.querySelector('#navigation-widget-small'),
          activeClass = 'active',
          hiddenClass = 'hidden',
          delayedClass = 'delayed';
  
    const setNavigationWidgetDimensions = function () {
      navigationWidget.style.height = `${window.innerHeight - topOffset}px`;
    };
  
    const toggleNavigationWidget = function () {
      navigationTrigger.classList.toggle(activeClass);

      navigationWidget.classList.toggle(delayedClass);
      navigationWidget.classList.toggle(hiddenClass);
      navigationWidgetSmall.classList.toggle(delayedClass);
      navigationWidgetSmall.classList.toggle(hiddenClass);

      sidebar.navigation.active = !navigationWidget.classList.contains(hiddenClass);
      updateGridPositions();
    };
  
    navigationTrigger.addEventListener('click', toggleNavigationWidget);
  
    setNavigationWidgetDimensions();
    window.addEventListener('resize', setNavigationWidgetDimensions);
  });

  /*-------------------------------
      NAVIGATION WIDGET MOBILE
  -------------------------------*/
  app.querySelector('.navigation-widget-mobile-trigger', function (el) {
    const navigationMobileTrigger = el[0],
          navigationWidgetMobile = document.querySelector('#navigation-widget-mobile'),
          navigationWidgetMobileCloseButton = navigationWidgetMobile.querySelector('.navigation-widget-close-button'),
          hiddenClass = 'hidden';

    const overlay = document.createElement('div');

    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.zIndex = 99998;
    overlay.style.backgroundColor = 'rgba(21, 21, 31, .96)';
    overlay.style.opacity = 0;
    overlay.style.visibility = 'hidden';
    overlay.style.transition = 'opacity .3s ease-in-out, visibility .3s ease-in-out';

    document.body.appendChild(overlay);

    const showOverlay = function () {
      overlay.style.opacity = 1;
      overlay.style.visibility = 'visible';
    };

    const hideOverlay = function () {
      overlay.style.opacity = 0;
      overlay.style.visibility = 'hidden';
    };
  
    const setNavigationWidgetMobileDimensions = function () {
      navigationWidgetMobile.style.height = `${window.innerHeight}px`;
    };
  
    const toggleNavigationWidgetMobile = function () {
      navigationWidgetMobile.classList.toggle(hiddenClass);

      const toggleOverlay = navigationWidgetMobile.classList.contains(hiddenClass) ? hideOverlay : showOverlay;
      toggleOverlay();
    };
  
    navigationMobileTrigger.addEventListener('click', toggleNavigationWidgetMobile);
    navigationWidgetMobileCloseButton.addEventListener('click', toggleNavigationWidgetMobile);
    overlay.addEventListener('click', toggleNavigationWidgetMobile);
  
    setNavigationWidgetMobileDimensions();
    window.addEventListener('resize', setNavigationWidgetMobileDimensions);
  });
});