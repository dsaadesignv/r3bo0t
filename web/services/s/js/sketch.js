

$(document).ready(function(){ 


  //Slider  
  
  $( function() {
      $( "#slider-range-max1" ).slider({
        range: "max",
        max: 10,
        min: 1,
        value: 10,
        slide: function( event, ui ) {
          whenSliding(ui.value);
        }
      });
    });
  
    function whenSliding(value) {
      $( "#amount1" ).val( value );
      $('.simg_meme').hide();
  
      $('.simg_meme[data-slider="'+value+'"]').show();
    }
  
    whenSliding(10);
  
  
    
    $( function() {
      $( "#slider-range-max2" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 4,
        slide: function( event, ui ) {
          $( "#amount2" ).val( ui.value );
        }
      });
      $( "#amount2" ).val( $( "#slider-range-max2" ).slider( "value" ) );
    } );
  
  
    //URI compost
  
    $( function() {
      $( ".stexte-uri").hide();
      $( ".simg_compost1").hover (function () {
          $('.stexte-uri1').show();
      }, function(){
        $('.stexte-uri').hide();
      });
  
      $( ".simg_compost2").hover (function () {
        $('.stexte-uri2').show();
      }, function(){
      $('.stexte-uri').hide();
      });
  
      $( ".simg_compost3").hover (function () {
        $('.stexte-uri3').show();
      }, function(){
      $('.stexte-uri').hide();
      });
  
      $( ".simg_compost4").hover (function () {
        $('.stexte-uri4').show();
      }, function(){
      $('.stexte-uri').hide();
      });
  
      $( ".simg_compost5").hover (function () {
        $('.stexte-uri5').show();
      }, function(){
      $('.stexte-uri').hide();
      });
  
  
    });
  
    //Bouton Toogle privé et public
  
    $(function(){
      $('.stexte-switch-on').show();
      $( ".stexte-switch-off").hide();
      $('.s-switch-prive input').on('change', function(){
          
        if ($(this).is(':checked')) {
          console.log('checked');
          $('.stexte-switch-on').show();
          $( ".stexte-switch-off").hide();
        } else {
          console.log("nopre");
          $('.stexte-switch-off').show();
          $( ".stexte-switch-on").hide();
        }
      });
    });
  
    //Transition page
  
    $(function(){
      $('.s-page').hide();
      $('.s-page1').show();
      $('.s-titre').hide();
      $('.s-titre1').show();
  
  
      $('.s_button_navigateur_p1').on('click', function(){
        $('.s-page').not('.s-page2').fadeOut(500);
        $('.s-page2').fadeIn(500);
      });
  
      $('#ajout').on('click', function(){
  
        $('.s-page').not('.s-page1').fadeOut(500);
        $('.s-page1').fadeIn(500);
        $('.s-titre').not('.s-titre1').hide();
        $('.s-titre1').show();
  
        $(".simg-picto1").attr('src',"services/s/img/pictos_b.svg");
  
        $(".simg-picto2").attr('src',"services/s/img/picto_jardin.svg");
        $(".simg-picto3").attr('src',"services/s/img/picto_herbier.svg");
        $(".simg-picto4").attr('src',"services/s/img/pictos_compost.svg");
  
        return false;
      
      });
    
  
      $('#jardin').on('click', function(){
        $('.s-page').not('.s-page3').fadeOut(500);
        $('.s-page3').fadeIn(500);
        $('.s-titre').not('.s-titre2').hide();
        $('.s-titre2').show();
  
        $(".simg-picto2").attr('src',"services/s/img/picto_jardin2_b.svg");
  
        $(".simg-picto1").attr('src',"services/s/img/pictos-plus.svg");
        $(".simg-picto3").attr('src',"services/s/img/picto_herbier.svg");
        $(".simg-picto4").attr('src',"services/s/img/pictos_compost.svg");
        return false;
  
  
      });
  
      $('.s_button_navigateur_p2').on('click', function(){
        $('.s-page').not('.s-page3').fadeOut(500);
        $('.s-page3').fadeIn(500);
        $('.s-titre').not('.s-titre2').hide();
        $('.s-titre2').show();
  
        $(".simg-picto2").attr('src',"services/s/img/picto_jardin2_b.svg");
  
        $(".simg-picto1").attr('src',"services/s/img/pictos-plus.svg");
        $(".simg-picto3").attr('src',"services/s/img/picto_herbier.svg");
        $(".simg-picto4").attr('src',"services/s/img/pictos_compost.svg");
  
        
      });
  
      $('#herbier').on('click', function(){
        $('.s-page').not('.s-page4').fadeOut(500);
        $('.s-page4').fadeIn(500);
        $('.s-titre').not('.s-titre3').hide();
        $('.s-titre3').show();
  
        $(".simg-picto3").attr('src',"services/s/img/picto_herbier_b.svg");
  
        $(".simg-picto1").attr('src',"services/s/img/pictos-plus.svg");
        $(".simg-picto2").attr('src',"services/s/img/picto_jardin.svg");
        $(".simg-picto4").attr('src',"services/s/img/pictos_compost.svg");
        return false;
  
  
      });
  
      $('#compost').on('click', function(){
        $('.s-page').not('.s-page5').fadeOut(500);
        $('.s-page5').fadeIn(500);
        $('.s-titre').not('.s-titre4').hide();
        $('.s-titre4').show();
  
        $(".simg-picto4").attr('src',"services/s/img/pictos_compost_b.svg");
  
        $(".simg-picto1").attr('src',"services/s/img/pictos-plus.svg");
        $(".simg-picto2").attr('src',"services/s/img/picto_jardin.svg");
        $(".simg-picto3").attr('src',"services/s/img/picto_herbier.svg");
        return false;
      });
  
    });
  
  });
    
  
  