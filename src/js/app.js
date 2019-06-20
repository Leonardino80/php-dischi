var $ = require('jquery');

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
        var array_option = [];
        // Aggiungo le options alla select
        //  verificando che ogni artista venga inserito una sola volta
        if (!array_option.includes(dischi[i].Artist)) {
          $("select").append('<option value="'+[i]+'">' + dischi[i].Artist + "</option>");
          array_option.push(dischi[i].Artist);
        }
        var context = {
        "immagine": dischi[i].Cover,
        "titolo": dischi[i].Title,
        "artista": dischi[i].Artist,
        "anno": dischi[i].Year,
        "id": [i],
        };

        //  inserisco handlebars nel html
        var html = template(context);
        $(".container_php_ajax").append(html);
      };
    },
    'error': function() {
    alert('Errrore in GET');
    }
  });

  // al cambio del valore della select visualizzo solo gli album dell'artista scelto
  $("select").change(function(){
   // Svuoto il container delle card visualizzate prima del change select
   $(".container_php_ajax").empty();
   // Leggo il valore dell'option scelta dall'utente
   var artista_scelto = $("select").val();
   // Effettuo chiamata ajax per inviare l'artista scelto dall'utente
    $.ajax({
     'url': 'http://localhost:8888/php-dischi/data.php',
     'method': 'GET',
     // la chiamata mi restituisce
     'success': function(data) {
       // La chiamata mi restituisce un array con gli album del singolo artista
       var dischi = JSON.parse(data);
       // genero l'oggetto context senza cicli con l'indice dell'artista selezionato
        var context = {
         "immagine": dischi[artista_scelto].Cover,
         "titolo": dischi[artista_scelto].Title,
         "artista": dischi[artista_scelto].Artist,
         "anno": dischi[artista_scelto].Year,
         "id": dischi[artista_scelto],
        }
       // Genero la var html e inserisco nel html
       var html = template(context);
       $(".container_php_ajax").append(html);
     },

     'error': function() {
       alert('Errrore in GET');
     }
    });

  });
});
