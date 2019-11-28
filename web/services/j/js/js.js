
          //CHANGE LA VERSION SELON JOUR / NUIT

$(document).ready(function() {
    var now = new Date().getHours();
            if( now >= 7 && now <= 19 ){
                  $("#j-nuit").hide();
                  $("#j-jour").show();
            } else{
                  $("#j-jour").hide();
                  $("#j-nuit").show();
            }
 });




          //MET L'HEURE ACTUELLE DANS LA PAGE D'ACCUEIL

$(function() {
  var heure = new Date().getHours();
  var minutes = new Date().getMinutes();

        if ( minutes < 10){
            $('.j-n-txt-jeu-mystere').prepend(heure + ':0' + minutes)
        } else {
            $('.j-n-txt-jeu-mystere').prepend(heure + ':' + minutes)
        }
  });

$(function() {
  var heure = new Date().getHours();
  var minutes = new Date().getMinutes();

        if ( minutes < 10){
            $('.j-txt-jeu-mystere').prepend(heure + ':0' + minutes)
        } else {
            $('.j-txt-jeu-mystere').prepend(heure + ':' + minutes)
        }
  });




          //AFFICHER LE MEILLEUR SCORE DE SNAKE

  $(function(){
    $('.highscore').text(localStorage.jsSnakeHighScore);

    setInterval(function(){
      $('.highscore').text(localStorage.jsSnakeHighScore);
    },1000);
    });



          // LIEN ENTRE LES PAGES

$(function(){

  // NUIT

  $('.j-n-goto-page1').on('click', function(){
    $('.j-n-page').hide();  // 1. On cache tous les écrans
    $('.j-n-page1').show(); // 2. Puis on affiche l'écran
  });

  $('.j-n-goto-page2').on('click', function(){
    $('.j-n-page').hide();  // 1. On cache tous les écrans
    $('.j-n-page2').show(); // 2. Puis on affiche l'écran
  });

  $('.j-n-goto-page3').on('click', function(){
    $('.j-n-page').hide();  // 1. On cache tous les écrans
    $('.j-n-page3').show(); // 2. Puis on affiche l'écran
  });

  $('.j-n-goto-pop-up1').on('click', function(){
    $('.j-n-pop-up1').show(); // 2. Puis on affiche l'écran
  });

  $('.j-n-goto-ferme-pop-up').on('click', function(){
    $('.j-n-pop-up1').hide();
  });

  $('.j-n-goto-pop-up2').on('click', function(){
    $('.j-n-pop-up1').hide();
    $('.j-n-pop-up2').show(); // 2. Puis on affiche l'écran
  });

  $('.j-n-goto-pop-up3').on('click', function(){
    $('.j-n-pop-up-comment-jouer-mystere').show(); // 2. Puis on affiche l'écran
  });

  $('.j-n-goto-pop-up4').on('click', function(){
    $('.j-n-pop-up-comment-jouer-favori').show(); // 2. Puis on affiche l'écran
  });

  // Fermer les pop up quand on clique à l'exterieur

  $('.j-n-pop-up1').bind('click', function(){
    $('.j-n-pop-up1').hide();
  });

  $('.j-n-pop-up2').bind('click', function(){
    $('.j-n-pop-up2').hide();
  });

  $('.j-n-pop-up-comment-jouer-mystere').bind('click', function(){
    $('.j-n-pop-up-comment-jouer-mystere').hide();
  });

  $('.j-n-pop-up-comment-jouer-favori').bind('click', function(){
    $('.j-n-pop-up-comment-jouer-favori').hide();
  });




    //JOUR

    $('.j-goto-page1').on('click', function(){
      $('.j-page').hide();  // 1. On cache tous les écrans
      $('.j-page1').show(); // 2. Puis on affiche l'écran
    });

    $('.j-goto-page2').on('click', function(){
      $('.j-page').hide();  // 1. On cache tous les écrans
      $('.j-page2').show(); // 2. Puis on affiche l'écran
    });

    $('.j-goto-page3').on('click', function(){
      $('.j-page').hide();  // 1. On cache tous les écrans
      $('.j-page3').show(); // 2. Puis on affiche l'écran
    });

    $('.j-goto-pop-up1').on('click', function(){
      $('.j-pop-up1').show(); // 2. Puis on affiche l'écran
    });

    $('.j-goto-ferme-pop-up').on('click', function(){
      $('.j-pop-up1').hide();
    });

    $('.j-goto-pop-up2').on('click', function(){
      $('.j-pop-up1').hide();
      $('.j-pop-up2').show(); // 2. Puis on affiche l'écran
    });

    $('.j-goto-pop-up3').on('click', function(){
      $('.j-pop-up-comment-jouer-mystere').show(); // 2. Puis on affiche l'écran
    });

    $('.j-goto-pop-up4').on('click', function(){
      $('.j-pop-up-comment-jouer-favori').show(); // 2. Puis on affiche l'écran
    });

    // Fermer les pop up quand on clique à l'exterieur

    $('.j-pop-up1').bind('click', function(){
      $('.j-pop-up1').hide();
    });

    $('.j-pop-up2').bind('click', function(){
      $('.j-pop-up2').hide();
    });

    $('.j-pop-up-comment-jouer-mystere').bind('click', function(){
      $('.j-pop-up-comment-jouer-mystere').hide();
    });

    $('.j-pop-up-comment-jouer-favori').bind('click', function(){
      $('.j-pop-up-comment-jouer-favori').hide();
    });






  // Exemple 2 : affichage en fondu

  // $('.goto-page2').on('click', function(){
  //   $('.j-page').not('.j-page2').fadeOut(500);
  //   $('.j-page2').fadeIn(500);
  // });
  //
  // $('.goto-page3').on('click', function(){
  //   $('.j-page').not('.j-page3').fadeOut(500);
  //   $('.j-page3').fadeIn(500);
  // });

  // Exemple 3 (demander à JB, Kévin, quiconque) : affichage avec transitions CSS

  /*
    La logique est différente ici :
    Tous les écrans sont toujours affichés MAIS ils sont cachés (à gauche, en haut, en bas, à droite, comme vous voulez) en CSS.
    Pour révéler un écran, on va changer un attribut du contenant .z-content, qu'on utilisera comme sélecteur pour faire apparaître l'écran.

    Le sélecteur CSS sera donc :

    .z-content[data-current-page="z-page3"] .z-page {
      (cacher les écrans)
    }

    .z-content[data-current-page="z-page3"] .z-page3 {
      (afficher CET écran)
    }
  */

  /*
  $('.goto-page3').on('click', function(){
    $('.z-content').attr('data-current-page', 'z-page3');
  });
  */

});
