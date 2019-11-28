<?php
<!--On chope le username-->
$user = $_GET['u'];
?>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>R.O.O.T.S</title>
    <link href="m-style.min.css" rel="stylesheet" type="text/css">
  </head>
  <body>
      <div class="m-chatContainer">
        <div class="m-chatHeader">
          <h3><?php echo ucwords($user); ?></h3>
      </div>
  </body>
</html>
