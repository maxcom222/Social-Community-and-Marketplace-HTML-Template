<?php

  $count = $_GET['count'];
  $screen_name = $_GET['screen_name'];

  $ACCESS_KEYS = array(
    'consumer_key' => 'YOUR_CONSUMER_KEY',
    'consumer_secret' => 'YOUR_CONSUMER_SECRET',
    'access_token_key' => 'YOUR_ACCESS_TOKEN_KEY',
    'access_token_secret' => 'YOUR_ACCESS_TOKEN_SECRET'
  );

  require_once('twitteroauth/autoload.php');

  $connection = new \Abraham\TwitterOAuth\TwitterOAuth($ACCESS_KEYS['consumer_key'], $ACCESS_KEYS['consumer_secret'], $ACCESS_KEYS['access_token_key'], $ACCESS_KEYS['access_token_secret']);


  $params = [
    'screen_name' => $screen_name,
    'count' => $count
  ];

  $result = $connection->get('statuses/user_timeline', $params);

  header('Content-Type: application/json');
  echo json_encode($result);
?>