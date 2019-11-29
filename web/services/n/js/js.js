var stats = {
  a:20,
  v:25,
  t:4,
  j:20,
  p:5,
  c:2,
};


function modeHome() {
    var hauteurServiceA = stats.a / 100 * 90;
    if (hauteurServiceA < 8) {
      hauteurServiceA = 8;}
    $('#serviceA').css('height', hauteurServiceA+'vh');

    var hauteurServiceV = stats.v / 100 * 90;
    if (hauteurServiceV < 8) {
      hauteurServiceV = 8;}
    $('#serviceV').css('height', hauteurServiceV+'vh');

    var hauteurServiceT = stats.t / 100 * 90;
    if (hauteurServiceT < 8) {
      hauteurServiceT = 8;}
    $('#serviceT').css('height', hauteurServiceT+'vh');

    var hauteurServiceJ = stats.j / 100 * 90;
    if (hauteurServiceJ < 8) {
      hauteurServiceJ = 8;}
    $('#serviceJ').css('height', hauteurServiceJ+'vh');

    var hauteurServiceP = stats.p / 100 * 90;
    if (hauteurServiceP < 8) {
      hauteurServiceP = 8;}
    $('#serviceP').css('height', hauteurServiceP+'vh');

    var hauteurServiceC = stats.c / 100 * 90;
    if (hauteurServiceC < 8) {
      hauteurServiceC = 8;}
    $('#serviceC').css('height', hauteurServiceC+'vh');
}






$(function (){
  modeHome();

  $("#profil .handler").on("click", function(){
    $("#pageprofil").toggle();

  })
})

$(function (){
  $("#exit").on("click", function(){
    $("#exit1").toggle();
  })
})

$(function (){
  $("#exit1 .switch").on("click", function(){
    $("#exit1").hide();
    $("#exit2").show();
  })
})

$(function (){
  $("#exit2 .button-ok").on("click", function(){
    $("#exit2").hide();
    $("#exit3").show();
  })
})

var somme = Math.floor(stats.t + stats.p + stats.j + stats.c + stats.v + stats.a)
$('#conteneur').css('height', somme +'vh');






$(function (){
  $("#conteneur").on("click", function(){
    $('body').toggleClass('is-service-open');

    if ($('body').hasClass('is-service-open')) {
      modeService();
    } else {
      modeHome();
    }

    $("#service").toggle();



  })
})


function modeService() {
  console.log(somme);
    var hauteurServiceA2 = map_range(stats.a, 0, somme, 0, 100);
    $('#serviceA').css('height', hauteurServiceA2 +'vh');

    console.log(hauteurServiceA2);

    var hauteurServiceV2 = (stats.v * 100) / somme;
    $('#serviceV').css('height', hauteurServiceV2 +'vh');

    var hauteurServiceT2 = (stats.t * 100) / somme;
    $('#serviceT').css('height', hauteurServiceT2 +'vh');

  var hauteurServiceJ2 = (stats.j * 100) / somme;
  $('#serviceJ').css('height', hauteurServiceJ2 +'vh');

  var hauteurServiceP2 = (stats.p * 100) / somme;
  $('#serviceP').css('height', hauteurServiceP2 +'vh');

  var hauteurServiceC2 = (stats.c * 100) / somme;
  $('#serviceC').css('height', hauteurServiceC2 +'vh');
}

$( function() {
{
    var availableTags=    [
        {
           "category": "Divertissement",
           "subcategory": "Gaming",
           "label": "Papy Grenier - GTA SAN ANDREAS",
           "author": "Joueur du grenier",
           "duration": "3min14",
           "hydratation": 34,
           "url" : "../video/PAPY_GRENIER.mp4"
        },
        {
            "category": "Musique",
            "subcategory": "Pop",
            "label": "Walk Alone (feat. Tom Walker)",
            "author": "Rudimental",
            "duration": "6min33",
            "hydratation": 83,
            "url" : "../music/rudimental.ogg"
        },
        {
            "category": "Connaissance",
            "subcategory": "Cuisine",
            "label": "Gâteau à la carotte et à la canelle",
            "author": "YouCook",
            "duration": "5min02",
            "hydratation": 14,
            "url" : "../video/gateau.mp4"
        }

    ]
 }

 $( "#site-search" ).autocomplete({
  source: availableTags
});

  } );



  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}