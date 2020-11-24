app.querySelector('.tweet-feed', function (tweetFeeds) {
  const wrapHashtag = function (text) {
    const regex = /(#\w+)\s/igm;

    return text.replace(regex, '<span class="highlighted">$1</span> ');
  };

  const wrapAt = function (text) {
    const regex = /(@\w+)\s/igm;

    return text.replace(regex, '<span class="highlighted">$1</span> ');
  };

  const createTweetItem = function (tweetData) {
    const tweet = document.createElement('div'),
          tweetAuthor = document.createElement('a'),
          tweetAuthorFigure = document.createElement('figure'),
          tweetAuthorImage = document.createElement('img'),
          tweetAuthorTitle = document.createElement('p'),
          tweetAuthorText = document.createElement('p'),
          tweetText = document.createElement('a'),
          tweetTimestamp = document.createElement('p');

    tweet.classList.add('tweet');
    tweetAuthor.classList.add('tweet-author');
    tweetAuthorFigure.classList.add('tweet-author-image', 'picture', 'tiny', 'circle', 'liquid');
    tweetAuthorTitle.classList.add('tweet-author-title');
    tweetAuthorText.classList.add('tweet-author-text');
    tweetText.classList.add('tweet-text');
    tweetTimestamp.classList.add('tweet-timestamp');

    tweetAuthorFigure.appendChild(tweetAuthorImage);
    tweetAuthor.appendChild(tweetAuthorFigure);
    tweetAuthor.appendChild(tweetAuthorTitle);
    tweetAuthor.appendChild(tweetAuthorText);

    tweet.appendChild(tweetAuthor);
    tweet.appendChild(tweetText);
    tweet.appendChild(tweetTimestamp);

    const authorURL = `https://twitter.com/${tweetData.user.screen_name}`,
          tweetURL = tweetData.entities.urls.length ? tweetData.entities.urls[0].url : authorURL,
          tweetDate = app.dateDiff(new Date(tweetData.created_at));

    tweetAuthor.setAttribute('href', authorURL);
    tweetAuthor.setAttribute('target', '_blank');
    tweetAuthorImage.setAttribute('src', tweetData.user.profile_image_url_https);
    tweetAuthorTitle.innerHTML = tweetData.user.name;
    tweetAuthorText.innerHTML = `@${tweetData.user.screen_name}`;
    tweetText.setAttribute('href', tweetURL);
    tweetText.setAttribute('target', '_blank');
    tweetText.innerHTML = wrapAt(wrapHashtag(tweetData.text));
    tweetTimestamp.innerHTML = `${tweetDate.value} ${tweetDate.unit} ago`;

    app.liquidifyStatic(tweetAuthorFigure, tweetAuthorImage);

    return tweet;
  };

  const TweetComponent = function (tweetsData) {
    const container = document.createElement('div');

    container.classList.add('tweets');

    for (const tweetData of tweetsData) {
      container.appendChild(createTweetItem(tweetData));
    }

    return container;
  };

  app.query({
    url: 'includes/getTweets.php?screen_name=YOUR_SCREEN_NAME&count=3'
  }).then(function (response) {
    const tweets = JSON.parse(response);

    for (const tweetFeed of tweetFeeds) {
      tweetFeed.appendChild(TweetComponent(tweets));
    }
  }).catch(function (error) {
    console.log(error);
  });
});