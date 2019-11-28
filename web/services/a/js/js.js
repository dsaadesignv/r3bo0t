$( document ).ready( $(function(){
    $('.a-page').hide();  // 1. On cache tous les écrans
    $('.a-page1').show(); // 2. Puis on affiche l'écran
    $('.a-pop-up1').hide();
    $('.a-pop-up2').hide();
    $('.pop-up-verger1').hide();
    $('#elem1').css('background','white')
    $('#elem1').css('color','black')
    $('.a-re').hide();
    $('.stop').hide();
    $('.contearebourd').text('Vous pouvez encore récolter 5 articles');
  }))




$(function(){
  $('.go-page1').on('click', function(){
    $('.a-page').hide();  // 1. On cache tous les écrans
    $('.a-page1').show(); // 2. Puis on affiche l'écran
  })

  //$('.go-article-oui').on('click', function(){
    //$('.a-page').hide();  // 1. On cache tous les écrans
    //$('.a-articleuh').show();
  //  $('.pop-up-verger1').hide();
    //$('.go-article').css('background','none')
  //  $('.go-article').css('color','black') // 2. Puis on affiche l'écran
  //})

  $('.go-page2').on('click', function(){
    $('.a-page').hide();  // 1. On cache tous les écrans
    $('.a-page2').show(); // 2. Puis on affiche l'écran
  })

  $('.a-intro i').on('mouseenter', function(){
    $('.a-pop-up1').show(); // 2. Puis on affiche l'écran
  })

  $('.a-pop-up1').on('click', function(){
    $('.a-pop-up1').hide(); // 2. Puis on affiche l'écran
  })

  $('.go-page3').on('click', function(){
    $('.a-page').hide();  // 1. On cache tous les écrans
    $('.a-page3').show(); // 2. Puis on affiche l'écran
  })
  });


$(function(){
  $('.go-article-oui').on('click', function(){

    var ppp = $('.pop-up-verger1').html()
    $(this).html(pp)





//////////compter le nmb d'articles
    var a= $('#cont1').css('z-index');
    var b= $('#cont2').css('z-index');
    var c= $('#cont3').css('z-index');
    var d= $('#cont4').css('z-index');
    var e= $('#cont5').css('z-index');

  if(a==0){
      $('#cont1').show();
      $('.contearebourd').text('Vous pouvez encore récolter 4 articles')
      $('.go-page3').text('Ma récolte (1/5)')
      $('#cont1').css('z-index','5')
    }

  else if(b==0) {
      $('#cont2').show();
      $('.contearebourd').text('Vous pouvez encore récolter 3 articles')
      $('.go-page3').text('Ma récolte (2/5)')
      $('#cont2').css('z-index','4')
    }
    else if(c==0) {
        $('#cont3').show();
        $('.contearebourd').text('Vous pouvez encore récolter 2 articles')
        $('.go-page3').text('Ma récolte (3/5)')
        $('#cont3').css('z-index','3')
        $('.contearebourd').css('left','65%')
      }
      else if(d==0) {
          $('#cont4').show();
          $('.contearebourd').text('Vous pouvez encore récolter 1 articles')
          $('.go-page3').text('Ma récolte (4/5)')
          $('#cont4').css('z-index','2')
          $('.contearebourd').css('left','87%')
        }
        else if(e==0) {
            $('#cont5').show();
            $('.contearebourd').text('Vous pouvez encore récolter 1 articles')
            $('.go-page3').text('Ma récolte (5/5)')
            $('#cont5').css('z-index','1')
            $('.contearebourd').hide()
          }
      if(e!=1){
        $('.a-page').hide();  // 1. On cache tous les écrans
        $('.a-articleuh').show();
        $('.pop-up-verger1').hide();
        $('.go-article').css('background','none')
        $('.go-article').css('color','black')
      }
      else if (e==1) {
        $('.pop-up-verger1 h2').text('C FINI!')
      }
  })
})



  // Exemple 2 : affichage en fondu

  /*$('.goto-page2').on('click', function(){
    $('.z-page').not('.z-page2').fadeOut(500);
    $('.z-page2').fadeIn(500);
  });

  $('.goto-page3').on('click', function(){
    $('.z-page').not('.z-page3').fadeOut(500);
    $('.z-page3').fadeIn(500);
  });

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
