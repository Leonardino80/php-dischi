// var $ = require('jquery');

$(document).ready(function(){
  // alert('prova')

  // impostazione di handlebars tramite jquery
  var card = $('.card_finale').html();
  var template = Handlebars.compile(card);

  $.ajax({
    // chiamata al server locale
    'url': 'http://localhost:8888/php-dischi/data.php',
    'method' : 'GET',
    'success': function(data){
      // converto la stringa in array di oggettileggendo il linguaggio json
      var dischi = JSON.parse(data);
      console.log(dischi);
      // ciclo for sui 10 oggetti dell'array
      for (var i = 0; i < dischi.length; i++) {
        console.log(dischi[i]);
        var context = {
        "immagine": dischi[i].Cover,
        "titolo": dischi[i].Title,
        "artista": dischi[i].Artist,
        "anno": dischi[i].Year,
        "id": dischi[i],
        };

        //  inserisco handlebars nel html
        var html = template(context);
        $(".container").append(html);
      };
    },
    'error': function() {
    alert('Errrore in GET');
    }
  });

});
