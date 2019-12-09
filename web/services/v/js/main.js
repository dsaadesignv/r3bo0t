

 /*

██████╗ ███████╗███████╗███████╗ █████╗ ██████╗  ██████╗██╗  ██╗
██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║
██████╔╝█████╗  ███████╗█████╗  ███████║██████╔╝██║     ███████║
██╔══██╗██╔══╝  ╚════██║██╔══╝  ██╔══██║██╔══██╗██║     ██╔══██║
██║  ██║███████╗███████║███████╗██║  ██║██║  ██║╚██████╗██║  ██║
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝


 */

/* RESEARCH FUNCTION : each time we want a new list of content, call this function */

    function research(){
      $('#v-grid').removeClass('v-hide');
      $('.v-research_home').addClass('v-research');
      $('.v-research_home').removeClass('v-research_home');
      $('.v-item').remove();  /* remove old items (if there were other researches previously) */
      $('#v-grid h2').addClass("v-hide"); /* remove "récolte du jour" */
      $('#v-gardeners').show(); /* Show gardeners part */
      $('#v-content_media').addClass("v-hide");
      $('#v-content_profile').addClass("v-hide");
      $('#v-info_profile').addClass("v-hide");
      $('#v-info_content').addClass("v-hide");
      $('#v-gardeners div a').remove();
      $('#v-import').addClass("v-hide");

        $.getJSON('services/v/data.json').done(function(data) {

          /* Get the keyword used in the search bar */
          var keyword = $('.v-research form input').val().toLowerCase();


          // /* Get the selected category */
         var selected_category = $('.v-selected').text().toLowerCase();
         console.log(selected_category.length);

              var nb_item_displayed_music;
              var nb_item_displayed_entertainment;
              var nb_item_displayed_knowledge;

              /* Check if the category is selected */
            if ( selected_category.length == 0) /* if there is NO category selected */ {
                  nb_item_displayed_music = 5;
                  nb_item_displayed_entertainment = 5;
                  nb_item_displayed_knowledge = 5;
              } else {
                if (selected_category.includes('musique')) {
                  nb_item_displayed_music = 15;
                  nb_item_displayed_entertainment = 0;
                  nb_item_displayed_knowledge = 0;
                  $('#v-cat-music').removeClass('v-hide');
                  $('#v-category_name h3:nth-child(3)').removeClass('v-hide');

                  $('#v-cat-knowledge,#v-cat-entertainment').addClass('v-hide');
                  $('#v-cat-knowledge, #v-cat-entertainment').removeClass("v-selected_category");
                  $('#v-category_name h3:nth-child(1), #v-category_name h3:nth-child(2)').addClass('v-hide');
                  $('#v-results #v-cat-music').addClass("v-selected_category");

              } else if (selected_category.includes('divertissement')) {
                  nb_item_displayed_music = 0;
                  nb_item_displayed_entertainment = 15;
                  nb_item_displayed_knowledge = 0;
                  $('#v-cat-entertainment').removeClass('v-hide');
                  $('#v-category_name h3:nth-child(2)').removeClass('v-hide');

                  $('#v-cat-knowledge, #v-cat-music').addClass('v-hide');
                  $('#v-cat-knowledge, #v-cat-music').removeClass("v-selected_category");
                  $('#v-category_name h3:nth-child(1), #v-category_name h3:nth-child(3)').addClass('v-hide');
                  $('#v-results #v-cat-entertainment').addClass("v-selected_category");
              } else if (selected_category.includes('connaissance')) {
                  nb_item_displayed_music = 0;
                  nb_item_displayed_entertainment = 0;
                  nb_item_displayed_knowledge = 15;
                  $('#v-cat-knowledge').removeClass('v-hide');
                  $('#v-category_name h3:nth-child(1)').removeClass('v-hide');

                  $('#v-cat-music, #v-cat-entertainment').addClass('v-hide');
                  $('#v-cat-music, #v-cat-entertainment').removeClass("v-selected_category");
                  $('#v-category_name h3:nth-child(3), #v-category_name h3:nth-child(2)').addClass('v-hide');
                  $('#v-results #v-cat-knowledge').addClass("v-selected_category");
              }
              }

              $.each(data.content, function( i, item ) {


                 /* Retrieve the category of the object and assign it in the good column, and limit the results to 5 column */
                      var category = item.category;

                      var nb_item_music = $("#v-cat-music div").length;
                      var nb_item_knowledge = $("#v-cat-knowledge div").length;
                      var nb_item_entertainment = $("#v-cat-entertainment div").length;


                      console.log(category);

                      // /*Look at the number of items in each category and create a variable accordingly */
                      // var nb_item_music = $("#v-cat-music div").length;
                      // var nb_item_knowledge = $("#v-cat-knowledge div").length;
                      // var nb_item_entertainment = $("#v-cat-entertainment div").length;
                      var nb_author = $("#v-gardeners div a").length;

                      var keyword_check_title = item.title.toLowerCase().includes(keyword);
                      var keyword_check_author = item.author.toLowerCase().includes(keyword);


                            if (keyword_check_title == true || keyword_check_author == true ) {
                                    /* CHECK the category, then check the numbers of items already there in the category
                                    if there is more than 5 items stop the function*/

                                    if (category == 'Musique'){
                                          if (nb_item_music < nb_item_displayed_music) {
                                          category = 'music';
                                        }
                                   }
                                   else if (category == 'Connaissance'){
                                      if (nb_item_knowledge < nb_item_displayed_knowledge) {
                                        category = 'knowledge';
                                      }
                                  } else if (category == 'Divertissement'){
                                      if (nb_item_entertainment < nb_item_displayed_entertainment) {
                                        category = 'entertainment';
                                      }
                                  } else {
                                    return false;
                                  }

                            }


                              var hydratation_img;
                              if (item.hydratation < 1) {
                                  hydratation_img = '/services/v/icons/0_state.svg';
                              } else if (item.hydratation >= 1 && item.hydratation < 17 ) {
                                hydratation_img = '/services/v/icons/1_state.svg';
                              } else if (item.hydratation >= 17 && item.hydratation < 35 ) {
                                hydratation_img = '/services/v/icons/2_state.svg';
                              } else if (item.hydratation >= 35 && item.hydratation < 52 ) {
                                hydratation_img = '/services/v/icons/3_state.svg';
                              } else if (item.hydratation >= 52) {
                                hydratation_img = '/services/v/icons/4_state.svg';
                              }

                                /* Create the element + add it to the html */
                                $('<div>').addClass('v-item').appendTo('#v-cat-'+ category)
                                .append($('<p>').addClass('v-duration').text(item.duration))
                                .append($('<img>').attr('src', hydratation_img))
                                .append($('<hr/>'))
                                .append($('<p>').addClass('v-title').text(item.title))
                                .append($('<p>').addClass('v-author').text(item.author))
                                //.append($('<p>').addClass('v-album').text(item.album))
                                .append($('<p>').addClass('v-subcategory').text(item.subcategory))
                                .append($('<p>').addClass('v-category').text(item.category))
                                .append($('<p>').addClass('v-url').text(item.url))
                                .append($('<p>').addClass('v-hydratation').text(item.hydratation));


                        if (keyword_check_author == true ) {

                              /* cache = value to remove duplicated author */
                              var cache = $('#v-gardeners div a').text().includes(item.author);

                              if (nb_author < 6 && cache == false) { /* If there is less than 6 authors + if the name isn't already showed */
                                  $('<a>').addClass('v-author').text(item.author).appendTo('#v-gardeners div') //.append($('<p>').addClass('v-gardener_subcategory').text(item.subcategory).addClass("v-hide"));
                              }
                          }


                    }); /* END OF THE "Each items" function */
                    return false; /* DISABLE PAGE RELOAD */

                  }); /* END OF THE GetJSON function */

    } /* END OF THE research function */




/*
███████╗██╗   ██╗ ██████╗  ██████╗ ███████╗███████╗████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██║   ██║██╔════╝ ██╔════╝ ██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
███████╗██║   ██║██║  ███╗██║  ███╗█████╗  ███████╗   ██║   ██║██║   ██║██╔██╗ ██║
╚════██║██║   ██║██║   ██║██║   ██║██╔══╝  ╚════██║   ██║   ██║██║   ██║██║╚██╗██║
███████║╚██████╔╝╚██████╔╝╚██████╔╝███████╗███████║   ██║   ██║╚██████╔╝██║ ╚████║
╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
*/


    function suggestions(){

        $.getJSON('services/v/data.json').done(function(data) {

           $.each(data.content, function( i, item ) {


                 /* Retrieve the category of the object and assign it in the good column, and limit the results to 5 column */
                var category = item.category;
                var nb_item_music = $("#v-cat-music div").length;
                var nb_item_knowledge = $("#v-cat-knowledge div").length;
                var nb_item_entertainment = $("#v-cat-entertainment div").length;
                var nb_item_music = $("#v-cat-music div").length;


                  if (nb_item_music < 3) {
                    if (category == 'Musique'){
                      category = 'music';
                    }
                  } if (nb_item_knowledge < 3) {
                    if (category == 'Connaissance'){
                      category = 'knowledge';
                    }
                  } if (nb_item_entertainment < 3) {
                    if (category == 'Divertissement'){
                      category = 'entertainment';
                    }
                  } else {
                    return false;
                  }

                        var hydratation_img;
                        if (item.hydratation < 1) {
                            hydratation_img = '/services/v/icons/0_state.svg';
                        } else if (item.hydratation >= 1 && item.hydratation < 17 ) {
                          hydratation_img = '/services/v/icons/1_state.svg';
                        } else if (item.hydratation >= 17 && item.hydratation < 35 ) {
                          hydratation_img = '/services/v/icons/2_state.svg';
                        } else if (item.hydratation >= 35 && item.hydratation < 52 ) {
                          hydratation_img = '/services/v/icons/3_state.svg';
                        } else if (item.hydratation >= 52) {
                          hydratation_img = '/services/v/icons/4_state.svg';
                        }

                          /* Create the element + add it to the html */
                          $('<div>').addClass('v-item').appendTo('#v-cat-'+ category)
                          .append($('<p>').addClass('v-duration').text(item.duration))
                          .append($('<img>').attr('src', hydratation_img))
                          .append($('<hr/>'))
                          .append($('<p>').addClass('v-title').text(item.title))
                          .append($('<p>').addClass('v-author').text(item.author))
                          //.append($('<p>').addClass('v-album').text(item.album))
                          .append($('<p>').addClass('v-subcategory').text(item.subcategory))
                          .append($('<p>').addClass('v-category').text(item.category))
                          .append($('<p>').addClass('v-url').text(item.url))
                          .append($('<p>').addClass('v-hydratation').text(item.hydratation));




                    }); /* END OF THE "Each items" function */
                    return false; /* DISABLE PAGE RELOAD */

                  }); /* END OF THE GetJSON function */

    } /* END OF THE research function */





/*

 ██████╗ ██████╗ ███╗   ██╗████████╗███████╗███╗   ██╗████████╗    ██╗███╗   ██╗███████╗ ██████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝████╗  ██║╚══██╔══╝    ██║████╗  ██║██╔════╝██╔═══██╗
██║     ██║   ██║██╔██╗ ██║   ██║   █████╗  ██╔██╗ ██║   ██║       ██║██╔██╗ ██║█████╗  ██║   ██║
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║╚██╗██║   ██║       ██║██║╚██╗██║██╔══╝  ██║   ██║
╚██████╗╚██████╔╝██║ ╚████║   ██║   ███████╗██║ ╚████║   ██║       ██║██║ ╚████║██║     ╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝

 ██╗    ██████╗ ███████╗ █████╗  ██████╗██╗  ██╗    ██╗
██╔╝    ██╔══██╗██╔════╝██╔══██╗██╔════╝██║  ██║    ╚██╗
██║     ██████╔╝█████╗  ███████║██║     ███████║     ██║
██║     ██╔══██╗██╔══╝  ██╔══██║██║     ██╔══██║     ██║
╚██╗    ██║  ██║███████╗██║  ██║╚██████╗██║  ██║    ██╔╝
 ╚═╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═╝

*/





    function reach(){
        $('#v-grid').addClass('v-hide');
        $('.v-research_home').addClass("v-hide");
        $('#v-info_content').removeClass('v-hide');
        $('#v-content_media').removeClass('v-hide');

        /* Get the value from the element clicked */
        var title = $('#selected_item .v-title').text();
        var author = $('#selected_item .v-author').text();
        var author = $('#selected_item .v-author').text();
        var category = $('#selected_item .v-category').text();
        var subcategory = $('#selected_item .v-subcategory').text();
        //var album = $('#selected_item .v-album').text();
        var url = $('#selected_item .v-url').text();
        var hydratation = $('#selected_item .v-hydratation').text();

        /* Change all the textes */
        $('#v-content_title').text(title);
        $('#v-content_author').text(author);
        $('#v-content_category').text(category);
        $('#v-content_subcategory').text(subcategory);
       // $('#v-content_album').text(album);
        console.log(url);


        var hydratation_level = Math.floor((hydratation / 70) * 100);
        var hydratation_level_img;
        if (hydratation < 1) {
          hydratation_level_img = '/services/v/icons/0_state.svg';
        } else if (hydratation >= 1 && hydratation < 17 ) {
          hydratation_level_img = '/services/v/icons/1_state.svg';
        } else if (hydratation >= 17 && hydratation < 35 ) {
          hydratation_level_img = '/services/v/icons/2_state.svg';
        } else if (hydratation >= 35 && hydratation < 52 ) {
          hydratation_level_img = '/services/v/icons/3_state.svg';
        } else if (hydratation >= 52) {
          hydratation_level_img = '/services/v/icons/4_state.svg';
        }


        $('#v-state').attr('src', hydratation_level_img);
        $('#v-hydratation_bar').css('width', hydratation_level+"%");

        /* Change the quality choice bar if this is a music item*/
        if (category == 'Musique'){
          $('#v-quality_choice_music').removeClass("v-hide");
          $('#v-quality_choice_video').addClass("v-hide");
          $('#v-content div audio').removeClass("v-hide");
          $('#v-content div video').addClass("v-hide");
          $('#v-content').addClass("v-is_audio");
        }

    }


/*

██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗    ██╗███╗   ██╗███████╗ ██████╗
██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝    ██║████╗  ██║██╔════╝██╔═══██╗
██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗      ██║██╔██╗ ██║█████╗  ██║   ██║
██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝      ██║██║╚██╗██║██╔══╝  ██║   ██║
██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗    ██║██║ ╚████║██║     ╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝    ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝

 ██╗    ██████╗ ███████╗ █████╗  ██████╗██╗  ██╗    ██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗    ██╗
██╔╝    ██╔══██╗██╔════╝██╔══██╗██╔════╝██║  ██║    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝    ╚██╗
██║     ██████╔╝█████╗  ███████║██║     ███████║    ██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗       ██║
██║     ██╔══██╗██╔══╝  ██╔══██║██║     ██╔══██║    ██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝       ██║
╚██╗    ██║  ██║███████╗██║  ██║╚██████╗██║  ██║    ██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗    ██╔╝
 ╚═╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝    ╚═╝

*/



    function reach_profile(){
      $('#v-grid').addClass('v-hide');
      $('.v-research_home').addClass("v-hide");
      $('#v-info_profile').removeClass('v-hide');
      $('#v-content_profile').removeClass('v-hide');

      /* Get the value from the element clicked */
     // var subcategory = $('#selected_author .v-gardener_subcategory').text();
      var author = $('#selected_author').text();


      /* Change all the textes */
      $('#v-profile_author').text(author);
      //$('#v-gardener_subcategory').text(subcategory);


      $.getJSON('services/v/data.json').done(function(data) {

        /* Get the keyword used in the search bar */
        var key_author = author.toLowerCase();

            $.each(data.content, function( i, item ) {



              var keyword_check_author = item.author.toLowerCase().includes(key_author);
                              if (keyword_check_author == true ) {
                                  var hydratation_img;
                                  if (item.hydratation < 1) {
                                      hydratation_img = '/services/v/icons/0_state.svg';
                                  } else if (item.hydratation >= 1 && item.hydratation < 17 ) {
                                    hydratation_img = '/services/v/icons/1_state.svg';
                                  } else if (item.hydratation >= 17 && item.hydratation < 35 ) {
                                    hydratation_img = '/services/v/icons/2_state.svg';
                                  } else if (item.hydratation >= 35 && item.hydratation < 52 ) {
                                    hydratation_img = '/services/v/icons/3_state.svg';
                                  } else if (item.hydratation >= 52) {
                                    hydratation_img = '/services/v/icons/4_state.svg';
                                  }

                                    /* Create the element + add it to the html */
                                    $('<div>').addClass('v-item').appendTo('#v-profile_grid')
                                    .append($('<p>').addClass('v-duration').text(item.duration))
                                    .append($('<img>').attr('src', hydratation_img))
                                    .append($('<hr/>'))
                                    .append($('<p>').addClass('v-title').text(item.title))
                                    .append($('<p>').addClass('v-author').text(item.author))
                                    //.append($('<p>').addClass('v-album').text(item.album))
                                    .append($('<p>').addClass('v-subcategory').text(item.subcategory))
                                    .append($('<p>').addClass('v-category').text(item.category))
                                    .append($('<p>').addClass('v-url').text(item.url))
                                    .append($('<p>').addClass('v-hydratation').text(item.hydratation));
                            }





                  }); /* END OF THE "Each items" function */


                }); /* END OF THE GetJSON*/

  }




/*

 ██████╗ ██╗   ██╗ █████╗ ██╗     ██╗████████╗██╗   ██╗     ██████╗██╗  ██╗ ██████╗ ██╗ ██████╗███████╗
██╔═══██╗██║   ██║██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██║  ██║██╔═══██╗██║██╔════╝██╔════╝
██║   ██║██║   ██║███████║██║     ██║   ██║    ╚████╔╝     ██║     ███████║██║   ██║██║██║     █████╗
██║▄▄ ██║██║   ██║██╔══██║██║     ██║   ██║     ╚██╔╝      ██║     ██╔══██║██║   ██║██║██║     ██╔══╝
╚██████╔╝╚██████╔╝██║  ██║███████╗██║   ██║      ██║       ╚██████╗██║  ██║╚██████╔╝██║╚██████╗███████╗
 ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝        ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝ ╚═════╝╚══════╝

*/

function quality_choice() {
        $('#v-content div p').addClass("v-hide");


      $.getJSON('v-user.json').done(function(data) {

        $.each(data.mae_cc, function( i, user ) {

            var level = user.viewing_count;

            var is_audio = $('#v-content').hasClass("v-is_audio");
            var url = $('#selected_item .v-url').text();

            var low_q = $('#selected_quality').hasClass("v-q-bass");
            var medium_q = $('#selected_quality').hasClass("v-q-moyen");
            var high_q = $('#selected_quality').hasClass("v-q-haut");


        if (is_audio == true) {/* CONTENT = audio */
          console.log("okkk");
          if (low_q == true) {

            level -= 0.5;

            url = "/music/low_"+url;
          } else if (medium_q == true) {
            level -= 1;
            url = "/music/medium_"+url;
          }  else if (high_q == true) {
            level -= 2;
            url = "/music/high_"+url;
          }
          $('#v-content div video').addClass("v-hide");
          $('#v-content div audio').removeClass("v-hide");
          $('#v-content div audio ').attr('src', url);
          $('#v-content div ').css('background-image', "url('../img/audio.svg')");
          $('#v-content div ').css('background-color', 'white');

        }else { /* CONTENT = VIDEO */

          if (low_q == true) {
                level -= 3;
                url = "/video/low_"+url;
                $('#v-content div ').css('background-image', "url('../img/audio.svg')");
              $('#v-content div ').css('background-color', 'white');
              $('#v-content div ').css('height', '30vh');
              $('#v-content div video').css('height', '30vh');
          } else if (medium_q == true) {
            level -= 6;
            url = "/video/medium_"+url;
          }  else if (high_q == true) {
            level -= 10;
            url = "/video/high_"+url;
          }

          $('#v-content div audio').addClass("v-hide");
          $('#v-content div video').removeClass("v-hide");
          $('#v-content div video ').attr('src', url);

        }


            $('#v-level').css("height", level+"vh");
            $('#v-level').css("margin-top", 80+(20-level)+"vh");

        console.log(level);
      });
    });

}













/*

 ██████╗ ███╗   ██╗    ██╗      ██████╗  █████╗ ██████╗
██╔═══██╗████╗  ██║    ██║     ██╔═══██╗██╔══██╗██╔══██╗
██║   ██║██╔██╗ ██║    ██║     ██║   ██║███████║██║  ██║
██║   ██║██║╚██╗██║    ██║     ██║   ██║██╔══██║██║  ██║
╚██████╔╝██║ ╚████║    ███████╗╚██████╔╝██║  ██║██████╔╝██╗██╗██╗
 ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝╚═╝

*/

$(document).ready(function() {

        suggestions();
        $('#v-gardeners div a').remove();

        /*********************************** SIMPLE HIDE / SHOW elements from the DOM */

          /* Hide searchbar */
          $('#v-search_go').click(function() {
            $('.v-research').toggleClass("v-hide");
          });


          /* reading list */
          $('#v-list_open').click(function open_list() {
            $('#v-reading_list').toggleClass("v-hide");
            $(this).toggleClass('v-selected_button');

              if ($(".v-selected_button").length > 0){  /* if the class exist */
                // Hide ALL the pages except the import page
                $('#v-list_open svg path').addClass("v-color_white");
                $('#v-list_open svg path').removeClass("v-color_blue");
              }
                 else {
                    $('#v-list_open svg path').addClass("v-color_blue");
                    $('#v-list_open svg path').removeClass("v-color_white");

                  }
        });


        $('#v-bucket_add').click(function() { /* Click on "add to bucket" */
         $(this).attr("id","selected_item");
         $('#v-reading_list').removeClass("v-hide");
         $('#v-list_open').addClass('v-selected_button');

           if ($(".v-selected_button").length > 0){  /* if the class exist */
             // Hide ALL the pages except the import page
             $('#v-list_open svg path').addClass("v-color_white");
             $('#v-list_open svg path').removeClass("v-color_blue");
           }
              else {
                 $('#v-list_open svg path').addClass("v-color_blue");
                 $('#v-list_open svg path').removeClass("v-color_white");

               }
         $('#selected_item').clone().appendTo('#v-reading_list');
         $('#v-reading_list div hr, #v-reading_list div img').addClass('v-hide');

         });


          /* Show import page */
          $('#v-import_open').click(function() {
            $('#v-import_open').toggleClass('v-selected_button');

            if ($(".v-selected_button").length > 0){  /* if the class exist */
              // Hide ALL the pages except the import page
              $('.v-research_home').addClass("v-hide");
              $('#v-grid').addClass("v-hide");
              $('#v-info_content').addClass("v-hide");
              $('#v-content_media').addClass("v-hide");
              $('#v-info_profile').addClass("v-hide");
              $('#v-content_profile').addClass("v-hide");
              $('#v-import').removeClass("v-hide");

              $('#v-import_open svg path').addClass("v-color_white");
              $('#v-import_open svg path').removeClass("v-color_blue");
            }
               else {

                $('.v-research_home').removeClass("v-hide");
                  $('#v-grid').removeClass("v-hide");
                  $('#v-import').addClass("v-hide");
                  $('#v-import_open svg path').addClass("v-color_blue");
                  $('#v-import_open svg path').removeClass("v-color_white");
                }
          });







          /*********************** IMPORT : YOUTUBE API (+ youtube_api.js) */

          $('#v-import_cutting button').click(function() { /* Get content from web */
            $('#v-youtube_API').toggleClass("v-hide");
            $('body').css('filter','grayscale(100%)');
          });

          $(document).on('click','#v-results_yt div', function() { /* Get content from web */
              $(this).attr("id","yt_add");
              var yt_url = $('#yt_add .v-yt_url').text();
              console.log(yt_url); /* THIS IS THE URL OF THE VIDEO ! */
              // USUALLY : Upload on server with PHP...
              $('#v-results_yt').addClass('v-hide');
              $('#v-yt_validation').removeClass('v-hide');
          });

          $('#v-yt_validation').click(function() { /* Get content from web */
            $('#v-youtube_API').addClass("v-hide");
            $('body').css('filter','none');
          });




          var count = 0;

          $('#v-drops_plus').click(function() {

            count += 1;
        /* Use the JSON data about users (shared across services) */
                $.getJSON('v-user.json').done(function(data) {

                          $.each(data.mae_cc, function( i, user ) {

                                var drop_left = user.drops + count;


                                $('#v-drops div div').css("height", drop_left+"%")
                                  //  console.log(drop_left);

                                  var hydratation = $('#selected_item .v-hydratation').text();


                                var hydratation_level = (Math.floor((hydratation / 70) * 100))+count;
                                var hydratation_level_img;
                                if (hydratation < 1) {
                                  hydratation_level_img = '/services/v/icons/0_state.svg';
                                } else if (hydratation >= 1 && hydratation < 17 ) {
                                  hydratation_level_img = '/services/v/icons/1_state.svg';
                                } else if (hydratation >= 17 && hydratation < 35 ) {
                                  hydratation_level_img = '/services/v/icons/2_state.svg';
                                } else if (hydratation >= 35 && hydratation < 52 ) {
                                  hydratation_level_img = '/services/v/icons/3_state.svg';
                                } else if (hydratation >= 52) {
                                  hydratation_level_img = '/services/v/icons/4_state.svg';
                                }


                                $('#v-state').attr('src', hydratation_level_img);
                                $('#v-hydratation_bar').css('width', hydratation_level+"%");

                                  return false;
                        });
                 });
        });




/*        _______   _    _   ______   __  __   ______      _____   _    _              _   _    _____   ______
        |__   __| | |  | | |  ____| |  \/  | |  ____|    / ____| | |  | |     /\     | \ | |  / ____| |  ____|
           | |    | |__| | | |__    | \  / | | |__      | |      | |__| |    /  \    |  \| | | |  __  | |__
           | |    |  __  | |  __|   | |\/| | |  __|     | |      |  __  |   / /\ \   | . ` | | | |_ | |  __|
           | |    | |  | | | |____  | |  | | | |____    | |____  | |  | |  / ____ \  | |\  | | |__| | | |____
           |_|    |_|  |_| |______| |_|  |_| |______|    \_____| |_|  |_| /_/    \_\ |_| \_|  \_____| |______| */

          /***************************************** CHANGE THEME */
          $('#v-theme').click(function theme() {

               $(this).toggleClass('theme_on')

               if ($(".theme_on").length > 0){ /* if the class exist */
                  // Change the color thanks to a filter
                  $('hr, .v-progress_bar, object, header img, #v-grid img, #v-info_content img, #v-content_media img, .v-research_home img, h3, h2, h4, h5, svg, a').css("filter", "invert(55%) sepia(36%) saturate(1791%) hue-rotate(204deg) brightness(96%) contrast(92%)");

                  $('#v-drops, #v-list_open').css("filter", "none");

                  let change_blue_white = $('p').css("color", '#142585');
                  change_blue_white.css("color", 'white');

                  let change_background_white = $('.v-duration, button, input, body').css("background-color", "white");
                  change_background_white.css("background-color", 'rgb(14, 14, 14)');

                  let change_background_bb = $('#v-drops div').css("background-color", "#142585");
                  change_background_bb.css("background-color", '#7A8BEB');

                  let change_background_bw = $('#v-drops div div').css("background-color", "white");
                  change_background_bw.css("background-color", 'rgb(14, 14, 14)');

                  let change_blue = $('button').css("color", '#142585');
                  change_blue.css("color", '#7A8BEB');

                  let change_border = $('button, figure').css("border", '#142585');
                  change_border.css("border", '#7A8BEB 1px solid');

                  let change_border2 = $('input').css("border-bottom", '#142585');
                  change_border2.css("border-bottom", '#7A8BEB 1px solid');

               } else {

                $('hr, .v-progress_bar, object, header img, #v-grid img, #v-info_content img, #v-content_media img, h3, h2, h4, h5, svg, a').css("filter", "none");

                let change_blue_white = $('p').css("color", 'white');
                  change_blue_white.css("color", 'black' );

                  let change_background_white = $('.v-duration, button, input, body').css("background-color", 'rgb(14, 14, 14)');
                  change_background_white.css("background-color", "white");

                  let change_blue = $('button').css("color", '#7A8BEB');
                  change_blue.css("color", '#142585');

                  let change_background_bb = $('#v-drops div').css("background-color", '#7A8BEB');
                  change_background_bb.css("background-color", "#142585");

                  let change_background_bw = $('#v-drops div div').css("background-color", 'rgb(14, 14, 14');
                  change_background_bw.css("background-color", 'white');

                  let change_border = $('button, figure').css("border", '#7A8BEB');
                  change_border.css("border", '#142585 1px solid');

                  let change_border2 = $('input').css("border-bottom", '#7A8BEB');
                  change_border2.css("border-bottom", '#142585 1px solid');



               }


          });







/*

  _                   _    _   _   _    _____   _    _     ______   _    _   _   _    _____   _______   _____    ____    _   _    _____
 | |          /\     | |  | | | \ | |  / ____| | |  | |   |  ____| | |  | | | \ | |  / ____| |__   __| |_   _|  / __ \  | \ | |  / ____|
 | |         /  \    | |  | | |  \| | | |      | |__| |   | |__    | |  | | |  \| | | |         | |      | |   | |  | | |  \| | | (___
 | |        / /\ \   | |  | | | . ` | | |      |  __  |   |  __|   | |  | | | . ` | | |         | |      | |   | |  | | | . ` |  \___ \
 | |____   / ____ \  | |__| | | |\  | | |____  | |  | |   | |      | |__| | | |\  | | |____     | |     _| |_  | |__| | | |\  |  ____) |
 |______| /_/    \_\  \____/  |_| \_|  \_____| |_|  |_|   |_|       \____/  |_| \_|  \_____|    |_|    |_____|  \____/  |_| \_| |_____/


                                                                                                                                */

          /*************************************** SHOW RESEARCH GRID : Dynamic view from JSON Data */



          $('.v-research form button').click(function () {
              $('.v-research form button').removeClass('v-selected');
              $('.v-research_home form button').removeClass('v-selected');
              $(this).toggleClass('v-selected');

              research();
              return false; /* DISABLE PAGE RELOAD */
          });

          $('.v-research_home form button').click(function () {
              $('.v-research_home form button').removeClass('v-selected');
              $('.v-research form button').removeClass('v-selected');
              $(this).toggleClass('v-selected');
              research();
              return false; /* DISABLE PAGE RELOAD */
            });





          /* SHOW RESEARCH GRID : from home big bar on click on the class icon*/
          $('.v-research_home form img').click(function() {
            research();
            return false; /* DISABLE PAGE RELOAD */
          });


        /* SHOW RESEARCH GRID : from home big bar on submit */
          $('.v-research_home form').on('submit',function() {

            research();
            return false; /* DISABLE PAGE RELOAD */
          });

          /* SHOW RESEARCH GRID : from search bar at the top*/
          $(document).on('submit','.v-research form',function() {
              $('.v-item').remove();  /* remove old items (if there were other researches previously) */
              $('#v-grid h2').addClass("v-hide"); /* remove "récolte du jour" */
              $('#v-gardeners').show(); /* Show gardeners part */
              $('#v-content_media').addClass("v-hide");
              $('#v-content_profile').addClass("v-hide");
              $('#v-info_profile').addClass("v-hide");
              $('#v-info_content').addClass("v-hide");
              $('#v-import').addClass("v-hide");
              $('#v-gardeners div a').remove();
              research();
              return false; /* DISABLE PAGE RELOAD */
          });








      /*********************************** LAUNCH REACH FUNCTION : open content info*/

        $(document).on('click', '.v-item', function() { /* Click on v-item */
         $(this).attr("id","selected_item");
         $('.v-research').addClass("v-hide");
          reach();

         });




      /********************************** CHANGE VIDEO SRC */
      $(document).on('click', '.v-quality_choice button', function() {
        $(this).attr("id","selected_quality");
        quality_choice();
      });



      /* Show info profile*/
      $(document).on('click', '#v-gardeners .v-author', function() { /* Click on v-item */
        $(this).attr("id","selected_author");
        $('.v-research').removeClass("v-hide");
         reach_profile();
        });





}); /* END OF DOCUMENT READY function */
