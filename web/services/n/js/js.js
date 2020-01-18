var stats = {
  a:18,
  v:25,
  t:4,
  j:20,
  p:5,
  c:5,
};


function modeHome() {
  console.log("home");
  var hauteurServiceA = stats.a / 100 * 90;
  if (hauteurServiceA < 8) {
    hauteurServiceA = 8;
  }
  $('#serviceA').css('height', hauteurServiceA+'vh').children("div").html("Actualités");

  var hauteurServiceV = stats.v / 100 * 90;
  if (hauteurServiceV < 8) {
    hauteurServiceV = 8;
  }
  $('#serviceV').css('height', hauteurServiceV+'vh').children("div").html("Vidéos");

  var hauteurServiceT = stats.t / 100 * 90;
  if (hauteurServiceT < 8) {
    hauteurServiceT = 8;
  }
  $('#serviceT').css('height', hauteurServiceT+'vh').children("div").html("Troc");

  var hauteurServiceJ = stats.j / 100 * 90;
  if (hauteurServiceJ < 8) {
    hauteurServiceJ = 8;
  }
  $('#serviceJ').css('height', hauteurServiceJ+'vh').children("div").html("Jeux");

  var hauteurServiceP = stats.p / 100 * 90;
  if (hauteurServiceP < 8) {
    hauteurServiceP = 8;
  }
  $('#serviceP').css('height', hauteurServiceP+'vh').children("div").html("Posts");

  var hauteurServiceC = stats.c / 100 * 90;
  if (hauteurServiceC < 8) {
    hauteurServiceC = 8;
  }
  $('#serviceC').css('height', hauteurServiceC+'vh').children("div").html("Connaissances");
}



$(function (){
  modeHome();

$("body").on("click",function(){
  $("#exit1").hide();
  $("#other").hide();
  $("#pageprofil").hide();
})

  $("#profil .handler").on("click", function(){
    event.stopPropagation();
    $("#exit1").hide();
    $("#other").hide();
    $("#pageprofil").toggle();
  })
})

$(function (){
  $("#otherjardin").on("click", function(){
    event.stopPropagation();
    $("#pageprofil").hide();
    $("#exit1").hide();
    $("#other").toggle();
  })
})


$(function (){
  $("#exit").on("click", function(){
    event.stopPropagation();
    $("#other").hide();
    $("#pageprofil").hide();
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

$(function (){
  $("#exit3").on("click", function(){
    $("#exit3").hide();
    $("#new-page").show();
  })
})



var somme = Math.floor(stats.t + stats.p + stats.j + stats.c + stats.v + stats.a)
$('#conteneur').css('height', somme +'vh');




$(function (){
  $("#conteneur a").on("click", function(){
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
  $('#serviceA').css('height', hauteurServiceA2 +'vh').children("div").html("A");

  console.log(hauteurServiceA2);

  var hauteurServiceV2 = (stats.v * 100) / somme;
  $('#serviceV').css('height', hauteurServiceV2 +'vh').children("div").html("V");

  var hauteurServiceT2 = (stats.t * 100) / somme;
  $('#serviceT').css('height', hauteurServiceT2 +'vh').children("div").html("T");

  var hauteurServiceJ2 = (stats.j * 100) / somme;
  $('#serviceJ').css('height', hauteurServiceJ2 +'vh').children("div").html("J");

  var hauteurServiceP2 = (stats.p * 100) / somme;
  $('#serviceP').css('height', hauteurServiceP2 +'vh').children("div").html("P");

  var hauteurServiceC2 = (stats.c * 100) / somme;
  $('#serviceC').css('height', hauteurServiceC2 +'vh').children("div").html("C");
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
      },
      {
        "category": "Connaissance",
        "subcategory": "Meteo",
        "label": "La pluie en Auvergne",
        "author": "Saucissonman",
        "duration": "7min08",
        "hydratation": 14,
        "url" : "../video/gateau.mp4"
      },


      {
        "label": "La pluie en Auvergne",
      },
      {
        "label": "Aya Nakamura - Pookie",
      },
      {
        "label": "La Bretagne ça vous gagne",
      },
      {
        "label": "Flexitarienne, la nouvelle tendance",
      },
      {
        "label": "Coccinelle & Champignon",
      },
      {
        "label": "Comment cuisiner une tarte au camembert",
      },
      {
        "label": "Boule de Noël pour barbe",
      },
      {
        "label": "La reine des Neige",
      },
      {
        "label": "Recette du gratin Dauphinois - par Audrey",
      },
      {
        "label": "DarkJuly - la nouvelle star des réseaux sociaux",
      },
      {
        "label": "Clara-BZH vous présente sa nouvelle palette de maquillage",
      },
      {
        "label": "Chuchen",
      },
      {
        "label": "Miguelito a quitté Sarah",
      },

    ]
  }

  $( "#site-search" ).autocomplete({
    source: availableTags
  });

} );



function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


$(document).on("dblclick",function(){
  openFullscreen();
})

function openFullscreen() {
  var elem = document.getElementById("n");

  if(elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if(elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if(elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if(elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
