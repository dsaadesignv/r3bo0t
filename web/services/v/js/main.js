
/* RESEARCH FUNCTION : each time we want a new list of content, call this function */

    function  research(){
        $.getJSON('services/v/data.json').done(function(data) {

          /* Get the keyword used in the search bar */
          var keyword = $('#v-search').val().toLowerCase();

          /* Get the selected category */
          var entertainment_category = $('.selected').text().toLowerCase().includes("divertissement");
          var music_category = $('.selected').text().toLowerCase().includes("musique");
          var knowledge_category = $('.selected').text().toLowerCase().includes("connaissance");
          var nb_item_displayed_music;
          var nb_item_displayed_entertainment;
          var nb_item_displayed_knowledge;

          if (entertainment_category == true) {
            nb_item_displayed_music = 0;
            nb_item_displayed_entertainment = 15;
            nb_item_displayed_knowledge = 0;

          } else if (music_category == true) {
            nb_item_displayed_music = 15;
              nb_item_displayed_entertainment = 0;
              nb_item_displayed_knowledge = 0;
          } else if (knowledge_category == true) {
              nb_item_displayed_music = 0;
              nb_item_displayed_entertainment = 0;
              nb_item_displayed_knowledge = 15;
          } else {
              nb_item_displayed_music = 3;
              nb_item_displayed_entertainment = 3;
              nb_item_displayed_knowledge = 3;
          }

              $.each(data.content, function( i, item ) {


                      /* Retrieve the category of the object and assign it in the good column, and limit the results to 5 / column */
                      var category = item.category;


                      /*Look at the number of items in each category and create a variable accordingly */
                      var nb_item_music = $("#v-cat-music div").length;
                      var nb_item_knowledge = $("#v-cat-knowledge div").length;
                      var nb_item_entertainment = $("#v-cat-entertainment div").length;
                      var nb_author = $("#v-gardeners div a").length;

                      var keyword_check_title = item.title.toLowerCase().includes(keyword);
                      var keyword_check_author = item.author.toLowerCase().includes(keyword);

                      /* Check if the keyword in the input is in the JSON data*/
                      if(keyword.length > 0) { /* if there is a key word */


                            if (keyword_check_title == true || keyword_check_author == true ) {
                                    /* CHECK the category, then check the numbers of items already there in the category
                                    if there is more than 5 items stop the function*/


                                      if (category == 'Musique' && nb_item_music < nb_item_displayed_music){
                                          category = 'music';
                                      } else if (category == 'Connaissance' && nb_item_knowledge < nb_item_displayed_knowledge){
                                          category = 'knowledge';
                                      } else if (category == 'Divertissement'&& nb_item_entertainment < nb_item_displayed_entertainment){
                                          category = 'entertainment';
                                      } else {
                                        return false;
                                      }


                        } /* END OF THE IF "there is a keyword" */

                                } else { /* For the suggestion part */
                                      if (category == 'Musique' && nb_item_music < 3){
                                          category = 'music';

                                      } else if (category == 'Connaissance' && nb_item_knowledge < 3){
                                          category = 'knowledge';
                                      } else if (category == 'Divertissement' && nb_item_entertainment < 3){
                                          category = 'entertainment';
                                      }


                                } /* END OF THE IF "keyword check" + else suggestions*/




                              var hydratation_img;
                              if (item.hydratation < 1) {
                                  hydratation_img = 'services/v/icons/0_state.svg';
                              } else if (item.hydratation >= 1 && item.hydratation < 17 ) {
                                hydratation_img = 'services/v/icons/1_state.svg';
                              } else if (item.hydratation >= 17 && item.hydratation < 35 ) {
                                hydratation_img = 'services/v/icons/2_state.svg';
                              } else if (item.hydratation >= 35 && item.hydratation < 52 ) {
                                hydratation_img = 'services/v/icons/3_state.svg';
                              } else if (item.hydratation >= 52) {
                                hydratation_img = 'services/v/icons/4_state.svg';
                              }

                                /* Create the element + add it to the html */
                                $('<div>').addClass('v-item').appendTo('#v-cat-'+ category)
                                .append($('<p>').addClass('v-duration').text(item.duration))
                                .append($('<img>').attr('src', hydratation_img))
                                .append($('<hr/>'))
                                .append($('<p>').addClass('v-title').text(item.title))
                                .append($('<p>').addClass('v-author').text(item.author))
                                .append($('<p>').addClass('v-album').text(item.album))
                                .append($('<p>').addClass('v-subcategory').text(item.subcategory))
                                .append($('<p>').addClass('v-category').text(item.category))
                                .append($('<p>').addClass('v-url').text(item.url))
                                .append($('<p>').addClass('v-hydratation').text(item.hydratation));


                        if (keyword_check_author == true ) {

                              /* cache = value to remove duplicated author */
                              var cache = $('#v-gardeners div a').text().includes(item.author);

                              if (nb_author < 6 && cache == false) { /* If there is less than 6 authors + if the name isn't already showed */
                                  $('<a>').addClass('v-author').text(item.author).appendTo('#v-gardeners div');
                              }
                          }




                    }); /* END OF THE "Each items" function */


                  }); /* END OF THE GetJSON function */

    } /* END OF THE research function */









    function reach(){
        $('#v-grid').addClass('v-hide');
        $('#v-research_home').addClass("v-hide");
        $('#v-info_content').removeClass('v-hide');
        $('#v-content_media').removeClass('v-hide');

        /* Get the value from the element clicked */
        var title = $('#selected_item .v-title').text();
        var author = $('#selected_item .v-author').text();
        var author = $('#selected_item .v-author').text();
        var category = $('#selected_item .v-category').text();
        var subcategory = $('#selected_item .v-subcategory').text();
        var album = $('#selected_item .v-album').text();
        var url = $('#selected_item .v-url').text();
        var hydratation = $('#selected_item .v-hydratation').text();

        /* Change all the textes */
        $('#v-content_title').text(title);
        $('#v-content_author').text(author);
        $('#v-content_category').text(category);
        $('#v-content_subcategory').text(subcategory);
        $('#v-content_album').text(album);
        console.log(url);


        var hydratation_level = Math.floor((hydratation / 70) * 100);
        var hydratation_level_img;
        if (hydratation < 1) {
          hydratation_level_img = 'services/v/icons/0_state.svg';
        } else if (hydratation >= 1 && hydratation < 17 ) {
          hydratation_level_img = 'services/v/icons/1_state.svg';
        } else if (hydratation >= 17 && hydratation < 35 ) {
          hydratation_level_img = 'services/v/icons/2_state.svg';
        } else if (hydratation >= 35 && hydratation < 52 ) {
          hydratation_level_img = 'services/v/icons/3_state.svg';
        } else if (hydratation >= 52) {
          hydratation_level_img = 'services/v/icons/4_state.svg';
        }


        $('#v-state').attr('src', hydratation_level_img);
        $('#v-hydratation_bar').css('width', hydratation_level+"%");

        /* Change the quality choice bar if this is a music item*/
        if (category == 'Musique'){
          $('#v-quality_choice_music').removeClass("v-hide");
          $('#v-quality_choice_video').addClass("v-hide");
          $('#v-content div audio').removeClass("v-hide");
          $('#v-content div video').addClass("v-hide");
        }

    }







function quality_choice() {
        $('#v-content div p').addClass("v-hide");
        var url = $('#selected_item .v-url').text();
        $('#v-content div video').removeClass("v-hide");
        $('#v-content div video source').attr('src', url);
        console.log(url);
     // $('#v-content div audio source').attr('src', url);

}










$(document).ready(function() {

        research();
        $('#v-gardeners div a').remove();


          $('#v-research form button').click(function () {
              $('#v-research form button').removeClass('selected');
              $(this).addClass('selected');
          });

          $('#v-research_home form button').click(function () {
              $('#v-research_home form button').removeClass('selected');
              $(this).addClass('selected');
            });


        /*********************************** SIMPLE HIDE / SHOW elements from the DOM */

          /* Hide searchbar */
          $('#v-search_go').click(function() {
            $('#v-research').toggleClass("v-hide");
          });

          /* Show import page */
          $('#v-import_open').click(function() {
            $('#v-import_open').toggleClass('v-selected_button');

            if ($(".v-selected_button").length > 0){  /* if the class exist */
              // Hide ALL the pages except the import page
              $('#v-research_home').addClass("v-hide");
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
                console.log("ok")
                $('#v-research_home').removeClass("v-hide");
                  $('#v-grid').removeClass("v-hide");
                  $('#v-import').addClass("v-hide");
                  $('#v-import_open svg path').addClass("v-color_blue");
                  $('#v-import_open svg path').removeClass("v-color_white");



                }
          });


          /***************************************** CHANGE THEME */
          $('#v-theme').click(function() {
            console.log("o");
            $('body').toggleClass("theme_black");
            $('button').toggleClass("theme_black");
            $('input').toggleClass("theme_black");

            var change_blue_white = $('p').css("color", '#142585');
            change_blue_white.css("color", 'white');
            var change_blue = $('h3, h2, hr').css("color", '#142585');
            change_blue.css("color", '#7A8BEB');

          });


          /*************************************** SHOW RESEARCH GRID : Dynamic view from JSON Data */

          /* SHOW RESEARCH GRID : from home big bar on click on the class icon*/
          $('#v-research_home form img').click(function() {
            $('.v-item').remove();  /* remove suggested content */
            $('#v-gardeners div a').remove();
            $('#v-research_home').addClass("v-hide");
            $('#v-grid h2').addClass("v-hide"); /* remove "récolte du jour" */
            $('#v-gardeners').show(); /* Show gardeners part */
            research();
            $('#v-research').toggleClass("v-hide");
            // $('#v-search_big').attr("placeholder",keyword);
          });

        /* SHOW RESEARCH GRID : from home big bar on submit */
          $('#v-research_home form').on('submit',function() {
            $('.v-item').remove();  /* remove suggested content */
            $('#v-gardeners div a').remove();
            $('#v-research_home').addClass("v-hide");
            $('#v-grid h2').addClass("v-hide"); /* remove "récolte du jour" */
            $('#v-gardeners').show(); /* Show gardeners part */
            research();
            $('#v-research').toggleClass("v-hide");
            return false; /* Do not reload page */
          });

          /* SHOW RESEARCH GRID : from search bar at the top*/

          $('#v-form_bar').on('submit',function() {
              $('.v-item').remove();  /* remove old items (if there were other researches previously) */
              $('#v-gardeners div a').remove();
              research();
              return false; /* DISABLE PAGE RELOAD */
          });








      /*********************************** LAUNCH REACH FUNCTION */

        $(document).on('click', '.v-item', function() { /* Click on v-item */
         $(this).attr("id","selected_item");
          reach();
         });




      /**********************************  */
      $(document).on('click', '.v-quality_choice button', function() {
        quality_choice();
      });


}); /* END OF DOCUMENT READY function */
