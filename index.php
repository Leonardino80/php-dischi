<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="public/css/app.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <title>php-dischi con ajax</title>
  </head>
  <body>

    <div class="container">
    </div>

    <script src="src/js/app.js" charset="utf-8"></script>

    <script class="card_finale" type="text/x-handlebars-template">
      <div class="card" data-index="{{id}}">
        <div class="immagine">
          <img src="immagini/{{immagine}}" alt="{{immagine}}">
        </div>
        <ul class="card_data">
          <li>Titolo: {{titolo}}</li>
          <li>Artista: {{artista}}</li>
          <li>Anno: {{anno}}</li>
        </ul>
      </div>
    </script>

  </body>
</html>
