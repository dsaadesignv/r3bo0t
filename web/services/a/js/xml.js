$(document).ready(
 function()
 {
   $.ajax( {
            type: "GET",
            url: "services/a/xml/liste-essences.xml",
            dataType: "xml",
            success: function(xml)
                     {
                       $(xml).find('site').each(
                         function()
                         {
                            var id = $(this).attr('id');
                            var catégorie = $(this).find('catégorie').text();
                            var nom = $(this).find('nom').text();
                            var description = $(this).find('description').text();
                            var adresseweb = $(this).find('adresseweb').text();
                            var idéologie = $(this).find('idéologie').text();
                            var propriétaire = $(this).find('propriétaire').text();
                            $('<div class="essencesvar items' + id +' '+ catégorie + '" id="items' + id + '"></div>').html('<h2 class="xml-letitre">' + nom + '</h2>').appendTo('#Div_XML');
                            $('<h3></h3>').html(description).appendTo('.items'+id);
                            $('<h3></h3>').html(adresseweb).appendTo('.items'+id);
                            $('<h3></h3>').html(idéologie).appendTo('.items'+id);
                            $('<h3></h3>').html(propriétaire).appendTo('.items'+id);

                          });

                          ////////////activer/désactiver
                          $('.essencesvar').click(function(){
                            if ($(this).hasClass('a-incomplete')){
                              $(this).css('background-color', 'black')
                            } else {
                              $(this).toggleClass('a-activee');
                            }



                            var nb = $('#Div_XML .a-activee').length;
                            var pluriel = (nb > 1) ? 's' : '';


                            $('.go-page2').text(nb + ' essence'+pluriel+' actuellement active'+pluriel);
                              });

                              ////créer des machins à compléter
                              $(function(){
                                $('.items3').addClass('a-incomplete')
                                $('.items7').addClass('a-incomplete')

                              })

                              ///////filtrer les essences actives
                              $('#a-actives').click(function(){
                                $('#a-inactives').css('background-color', 'white')
                                $('#a-inactives').css('color', 'black')
                                if ($('#a-actives').hasClass('mdr')) {
                                  $('#a-actives').css('background-color', 'black')
                                  $('#a-actives').css('color', 'white')
                                  $('.essencesvar').hide()
                                  $('.a-activee').show()
                                }else {
                                  $('#a-actives').css('background-color', '#49DA69')
                                  $('#a-actives').css('color', 'black')
                                  $('.essencesvar').show()
                                }
                                  $('#a-actives').toggleClass('mdr')
                              })

                              ///////filtrer les essences actives
                              $('#a-inactives').click(function(){
                                $('#a-actives').css('background-color', '#49DA69')
                                $('#a-actives').css('color', 'black')
                                if ($('#a-inactives').hasClass('mdr')) {
                                  $('#a-inactives').css('background-color', 'black')
                                  $('#a-inactives').css('color', 'white')
                                  $('.essencesvar').show()
                                  $('.a-activee').hide()
                                }else {
                                  $('#a-inactives').css('background-color', 'white')
                                  $('#a-inactives').css('color', 'black')
                                  $('.essencesvar').show()
                                }
                                  $('#a-inactives').toggleClass('mdr')
                              })

                              ///////filtrer les essences incomplètes
                              $('#a-incomplètes').click(function(){

                                if ($('#a-incomplètes').hasClass('mdr')) {
                                  $('#a-incomplètes').css('border', 'none')
                                  $('.essencesvar').hide()
                                  $('.a-incomplete').show()
                                }else {
                                  $('#a-incomplètes').css('border', 'solid white 3px')
                                  $('.essencesvar').show()
                                }
                                  $('#a-incomplètes').toggleClass('mdr')
                              })

                              ///////le filtrage en haut
                              $('#elem1').click(function(){
                                $('.essencesvar').show()
                              })

                              $('#elem2').click(function(){
                                $('.essencesvar').hide()
                                $('.actu').show()
                              })

                              $('#elem3').click(function(){
                                $('.essencesvar').hide()
                                $('.international').show()
                              })

                              $('#elem4').click(function(){
                                $('.essencesvar').hide()
                                $('.sport').show()
                              })

                              $('#elem5').click(function(){
                                $('.essencesvar').hide()
                                $('.design').show()
                              })

                              $('.a-bout-elem').click(function(){
                                $('.a-bout-elem').css('background-color','black')
                                $('.a-bout-elem').css('color','white')
                                $(this).css('background-color','white')
                                $(this).css('color','black')
                              })












                      }
        });
  }
);
