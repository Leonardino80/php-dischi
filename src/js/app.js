// var $ = require('jquery');
$(document).ready(function(){
  alert('ciao')
  $.ajax({
    'url': 'http://localhost:8888/php-dischi/data.php',
    'method' : 'GET',
    'success': function(data){
      var dischi = JSON.parse(data);
      console.log(dischi);
      for (var i = 0; i < dischi.length; i++) {
        console.log(dischi[i]);
        var context = {
        "immagine": dischi[i].Cover,
        "titolo": dischi[i].Title,
        "artista": dischi[i].Artist,
        "anno": dischi[i].Year,
      };
    },
    'error': function() {
    alert('Errrore in GET');
    }
  });

});
