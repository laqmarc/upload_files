<?php

//config.php

//Include Google Client Library for PHP autoload file
require_once 'vendor/autoload.php';

//Make object of Google API Client for call Google API
$google_client = new Google_Client();

//Set the OAuth 2.0 Client ID
$google_client->setClientId('915021776079-78lbct69eo5gh0gs0el8f69688c37lp2.apps.googleusercontent.com');

//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret('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');

//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('http://localhost/upload-files');


$google_client->addScope('email');

$google_client->addScope('profile');

//start session on web page
session_start();

?>