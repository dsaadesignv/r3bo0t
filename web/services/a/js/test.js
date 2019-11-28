// $(document).ready(
//  function()
//  {
//    $.ajax( {
//             type: "GET",
//             url: "https://etapes.com/feed/",
//             dataType: "xml",
//             success: function(xml)
//                      {
//                        $(xml).find('item').each(
//                          function()
//                          {
//                             var title = $(this).find('title').text();
//
//                             ('<div class="a-article' + couleur +'"></div>').html('<h2 class="xml-letitre">' + title + '</h2>').appendTo('a-leverger');
//                             //('<h3></h3>').html(title).appendTo('.items'+id);
//                             //('<h3></h3>').html(adresseweb).appendTo('.items'+id);
//                             //('<h3></h3>').html(idéologie).appendTo('.items'+id);
//                             //$('#a1 h2').txt(title)
//                             //$('a-carre1').on('click', function(){
//                               //alert(title)
//                             })
//
//                           });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//                       }
//         });
//   }
// );
