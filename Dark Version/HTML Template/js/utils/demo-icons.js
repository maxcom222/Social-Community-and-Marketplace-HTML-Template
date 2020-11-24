app.querySelector('.icon-demo-list', function (lists) {
  const icons = [
    {
      name: 'Facebook',
      className: 'facebook'
    },
    {
      name: 'Twitter',
      className: 'twitter'
    },
    {
      name: 'Twitch',
      className: 'twitch'
    },
    {
      name: 'Youtube',
      className: 'youtube'
    },
    {
      name: 'Instagram',
      className: 'instagram'
    },
    {
      name: 'Discord',
      className: 'discord'
    },
    {
      name: 'Patreon',
      className: 'patreon'
    },
    {
      name: 'Google',
      className: 'google'
    },
    {
      name: 'Behance',
      className: 'behance'
    },
    {
      name: 'DeviantArt',
      className: 'deviantart'
    },
    {
      name: 'Artstation',
      className: 'artstation'
    },
    {
      name: 'Cross',
      className: 'cross'
    },
    {
      name: 'Logo Vikinger',
      className: 'logo-vikinger'
    },
    {
      name: 'Grid',
      className: 'grid'
    },
    {
      name: 'Dots',
      className: 'dots'
    },
    {
      name: 'Magnifying Glass',
      className: 'magnifying-glass'
    },
    {
      name: 'Comment',
      className: 'comment'
    },
    {
      name: 'Thumbs Up',
      className: 'thumbs-up'
    },
    {
      name: 'Friend',
      className: 'friend'
    },
    {
      name: 'Group',
      className: 'group'
    },
    {
      name: 'Marketplace',
      className: 'marketplace'
    },
    {
      name: 'Add Friend',
      className: 'add-friend'
    },
    {
      name: 'Remove Friend',
      className: 'remove-friend'
    },
    {
      name: 'Delete',
      className: 'delete'
    },
    {
      name: 'Messages',
      className: 'messages'
    },
    {
      name: 'Send Message',
      className: 'send-message'
    },
    {
      name: 'Back Arrow',
      className: 'back-arrow'
    },
    {
      name: 'Shopping Bag',
      className: 'shopping-bag'
    },
    {
      name: 'Notification',
      className: 'notification'
    },
    {
      name: 'Settings',
      className: 'settings'
    },
    {
      name: 'Cross Thin',
      className: 'cross-thin'
    },
    {
      name: 'Newsfeed',
      className: 'newsfeed'
    },
    {
      name: 'Overview',
      className: 'overview'
    },
    {
      name: 'Members',
      className: 'members'
    },
    {
      name: 'Badges',
      className: 'badges'
    },
    {
      name: 'Quests',
      className: 'quests'
    },
    {
      name: 'Streams',
      className: 'streams'
    },
    {
      name: 'Events',
      className: 'events'
    },
    {
      name: 'Forums',
      className: 'forums'
    },
    {
      name: 'Small Arrow',
      className: 'small-arrow'
    },
    {
      name: 'Big Arrow',
      className: 'big-arrow'
    },
    {
      name: 'Public',
      className: 'public'
    },
    {
      name: 'Private',
      className: 'private'
    },
    {
      name: 'Join Group',
      className: 'join-group'
    },
    {
      name: 'Leave Group',
      className: 'leave-group'
    },
    {
      name: 'More Dots',
      className: 'more-dots'
    },
    {
      name: 'Profile',
      className: 'profile'
    },
    {
      name: 'Timeline',
      className: 'timeline'
    },
    {
      name: 'Photos',
      className: 'photos'
    },
    {
      name: 'Videos',
      className: 'videos'
    },
    {
      name: 'Blog Posts',
      className: 'blog-posts'
    },
    {
      name: 'Forum',
      className: 'forum'
    },
    {
      name: 'Store',
      className: 'store'
    },
    {
      name: 'Star',
      className: 'star'
    },
    {
      name: 'Play',
      className: 'play'
    },
    {
      name: 'Share',
      className: 'share'
    },
    {
      name: 'Pinned',
      className: 'pinned'
    },
    {
      name: 'Status',
      className: 'status'
    },
    {
      name: 'Big Grid View',
      className: 'big-grid-view'
    },
    {
      name: 'Small Grid View',
      className: 'small-grid-view'
    },
    {
      name: 'List Grid View',
      className: 'list-grid-view'
    },
    {
      name: 'Plus',
      className: 'plus'
    },
    {
      name: 'Plus Small',
      className: 'plus-small'
    },
    {
      name: 'Minus Small',
      className: 'minus-small'
    },
    {
      name: 'Poll',
      className: 'poll'
    },
    {
      name: 'Camera',
      className: 'camera'
    },
    {
      name: 'Gif',
      className: 'gif'
    },
    {
      name: 'Tags',
      className: 'tags'
    },
    {
      name: 'Quote',
      className: 'quote'
    },
    {
      name: 'Pin',
      className: 'pin'
    },
    {
      name: 'Ticket',
      className: 'ticket'
    },
    {
      name: 'Events Monthly',
      className: 'events-monthly'
    },
    {
      name: 'Events Weekly',
      className: 'events-weekly'
    },
    {
      name: 'Events Daily',
      className: 'events-daily'
    },
    {
      name: 'Info',
      className: 'info'
    },
    {
      name: 'Check',
      className: 'check'
    },
    {
      name: 'Trophy',
      className: 'trophy'
    },
    {
      name: 'Clock',
      className: 'clock'
    },
    {
      name: 'Return',
      className: 'return'
    },
    {
      name: 'Dribbble',
      className: 'dribbble'
    },
    {
      name: 'Item',
      className: 'item'
    },
    {
      name: 'Wallet',
      className: 'wallet'
    },
    {
      name: 'Earnings',
      className: 'earnings'
    },
    {
      name: 'Revenue',
      className: 'revenue'
    },
    {
      name: 'Login',
      className: 'login'
    }
  ];

  const createIcon = function (iconName) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    svg.classList.add(`icon-${iconName}`);
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#svg-${iconName}`);

    svg.appendChild(use);

    return svg;
  };

  const createIconString = function (icon) {
    const iconString = `
    <!-- ICON ${icon.name.toUpperCase()} -->
    <svg class="icon-${icon.className}">
      <use xlink:href="#svg-${icon.className}"></use>
    </svg>
    <!-- /ICON ${icon.name.toUpperCase()} -->`;

    return iconString;
  };

  const createDemoIconString = function (icon) {
    const iconString = `
    <!-- ICON ${icon.name.toUpperCase()} -->
    <svg class="icon-${icon.className} demo-icon">
      <use xlink:href="#svg-${icon.className}"></use>
    </svg>
    <!-- /ICON ${icon.name.toUpperCase()} -->`;

    return iconString;
  };

  const createDemoBox = function (iconData) {
    const container = document.createElement('div'),
          iconContainer = document.createElement('div'),
          icon = createIcon(iconData.className),
          title = document.createElement('p'),
          text = document.createElement('p'),
          button = document.createElement('p'),
          buttonInactiveText = document.createElement('span'),
          buttonActiveText = document.createElement('span');

    container.classList.add('demo-box');
    iconContainer.classList.add('demo-box-icon-wrap');
    icon.classList.add('demo-box-icon');
    title.classList.add('demo-box-title');
    text.classList.add('demo-box-text');
    button.classList.add('button', 'full');
    buttonInactiveText.classList.add('inactive-text');
    buttonActiveText.classList.add('active-text');

    title.innerHTML = iconData.name;
    text.innerHTML = `.icon-${iconData.className}`;
    buttonInactiveText.innerHTML = 'Copy SVG';
    buttonActiveText.innerHTML = 'Copied!';

    iconContainer.appendChild(icon);
    container.appendChild(iconContainer);
    container.appendChild(title);
    container.appendChild(text);
    button.appendChild(buttonInactiveText);
    button.appendChild(buttonActiveText);
    container.appendChild(button);

    return {
      container: container,
      trigger: button
    }
  };

  const copyCode = function (code) {
    const input = document.createElement('textarea');

    input.innerHTML = code;

    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');

    input.remove();
  };

  // ICON BACKLOG
  const divWrap = document.createElement('div');
  divWrap.style.width = '80px';
  divWrap.style.position = 'fixed';
  divWrap.style.top = '80px';
  divWrap.style.left = '0';
  document.body.appendChild(divWrap);

  for (const list of lists) {
    // Sort icons array
    const sortedIcons = icons.sort(function (firstEl, secondEl) {
      if (firstEl.name < secondEl.name) {
        return -1;
      }

      if (firstEl.name > secondEl.name) {
        return 1;
      }

      return 0;
    });

    for (const icon of sortedIcons) {
      const demoBox = createDemoBox(icon);

      list.appendChild(demoBox.container);

      demoBox.trigger.addEventListener('click', function () {
        const iconCode = createIconString(icon);
        copyCode(iconCode);

        demoBox.trigger.classList.add('active');

        window.setTimeout(function () {
          demoBox.trigger.classList.remove('active');
        }, 2000);

        // ICON BACKLOG
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.marginTop = '30px';
        div.innerHTML = createDemoIconString(icon);

        divWrap.appendChild(div);
      });
    }
  }
});