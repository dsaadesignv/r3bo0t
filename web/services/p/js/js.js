$(function(){
  //Lorsque l'on clique sur un élément qui comporte data-goto
  $('[data-goto]').on('click', function(){
    //Stocker l'attribut de data-goto dans variable goto
    let goto = $(this).data('goto');
    //fadeOut le contenu de p-main-content
    $('.p-main-content').fadeOut(150, function() {
      //data-current-page prend la valeur de goto
      $('body').attr('data-current-page', goto);
      //Puis p-main-content fadeIn à nouveau
    }).fadeIn();
  });

  // Recherche :
  // Par défaut, cacher les élements de la liste
  $('ul').hide();
  $('ul>li').hide();

  // Click en dehors de p-recherche : masquer les résultats
  document.addEventListener("click", (evt) => {
    const element = document.getElementById("#search");
    let target = evt.target; // clicked element
    if (target !== element) {
      $('ul').hide();
      $('ul>li').hide();
    }
  });

  // Au click sur un résultat, remplacer le placeholder par ce mot
  $('li').click(function() {
    $('#search').val($(this).html());
  });

  // Cacher les résultats qui ne contiennent pas la recherche,
  // Afficher les éléments qui contiennent la recherche
  $('#search').change(function() {
    var input_content = $.trim($(this).val());
    // Masquer les résultats si la recherche est vide
    if (!input_content) {
        $('ul').hide();
        $('ul>li').hide();
    } else {
        $('ul').show();
        $('ul>li').show().not(':contains(' + input_content  + ')').hide();
    }
  });
});
