$(document).ready(function(){
 //pokemon images and border colors
  function changePokemon() {
    
    var charmander = "http://vignette1.wikia.nocookie.net/nintendo/images/5/56/Charmander.png/revision/20141002083351?path-prefix=en";
    var squirtle = "http://vignette2.wikia.nocookie.net/nintendo/images/e/e3/Squirtle.png/revision/latest?cb=20141002083243&path-prefix=en";
    var bulbasaur = "http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en";
    var pokemon = [charmander, squirtle, bulbasaur];
    var borderColor = ["#D56C09", "#17CBDE", "#17BC6A"];
    //randomize pokemon image and border color
    var randomNumber = Math.floor((Math.random()*pokemon.length));
    var randomPokemon = pokemon[randomNumber];
    var randomColor = borderColor[randomNumber];
  // change scr to random pokemom image from array
  document.getElementById("imageid").src=randomPokemon;
    //change border color to random color from array
  document.getElementById("border").style.borderColor = randomColor;
    
 
  };
   function newQuote () {
      $.ajaxSetup({cache:false});
  //link to random quote API 
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
    //display quote
    $(".quote").html('"' + data.quoteText + '"');
    //display "-" + author
    $(".author").html(' - ' + data.quoteAuthor);
    
  });
  
   };
  //clicking on "more words" button changes quote and html 
    $("#getQuote").on("click", function(){
      changePokemon();
      newQuote ();
      
       });
  
  //tweet quote
$("#tweet").on("click", function(){
  var sentence = $('.quote').text();
  var person = $('.author').text();
  window.open("https://twitter.com/intent/tweet?text=" + sentence + person);
});
     
  });
