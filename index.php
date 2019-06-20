<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="public/css/app.css">
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <title>php-dischi con ajax</title>
  </head>
  <body>
    <h1>PHP</h1>
    <div class="container_php">

      <div class="hidden">
        <?php include 'data.php'?>
      </div>

      <?php
      foreach ($dischi as $key => $value) {
      ?>

      <div class="card" data-type="<?php $key ?>">
        <img src="immagini/<?php echo ($value['Cover']) ?>" alt="<?php echo ($value['Cover']) ?>">
        <ul class="card_data">
          <li>Titolo: <?php echo ($value['Title']) ?></li>
          <li>Artista: <?php echo ($value['Artist']) ?></li>
          <li>Anno:<?php echo ($value['Year']) ?></li>
        </ul>
      </div>
      <?php
      }
      ?>


    </div>
    <h1>PHP & Ajax</h1>

    <select>
      <option value="">scegli artista</option>
    </select>

    <div class="container_php_ajax">


    </div>

    <script src="public/js/app.js" charset="utf-8"></script>

    <script class="card_finale" type="text/x-handlebars-template">
      <div class="card" data-type="{{id}}">
        <img src="immagini/{{immagine}}" alt="{{immagine}}">
        <ul class="card_data">
          <li>Titolo: {{titolo}}</li>
          <li>Artista: {{artista}}</li>
          <li>Anno: {{anno}}</li>
        </ul>
      </div>
    </script>

  </body>
</html>
