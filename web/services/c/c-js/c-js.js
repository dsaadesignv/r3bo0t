$(document).ready(function(){

// FORM PLANTER UNE POUSSE ---------------------------------------
  $("#c-button-cat").click(function(){
    $(".c-wrapper-popin").css("display", "inline-block");
  });

  $("#c-cross").click(function(){
    $(".c-wrapper-popin").css("display", "none");
  });

  $("#c-send").click(function() {
    console.log("click");
    //$("c-part-text").after('');
  });

// HOVER DES CERNES --------------------------------------------
  $( "#c-cerne-un" ).mouseenter(function() {
    $("#c-cerne-un").css("stroke", "#F2662C");
    $("#c-cerne-un").css("stroke-width", "3px");
    $("#c-label-un").css("display", "inline"); // LE CARTOUCHE

});
  $( "#c-cerne-un" ).mouseleave(function() {
    $("#c-cerne-un").css("stroke", "#E6FCFE");
    $("#c-cerne-un").css("stroke-width", "1px");
    $("#c-label-un").css("display", "none"); // LE CARTOUCHE
});

$( "#c-cerne-deux" ).mouseenter(function() {
  $("#c-cerne-deux").css("stroke", "#F2662C");
  $("#c-cerne-deux").css("stroke-width", "3px");
  $("#c-label-deux").css("display", "inline"); // LE CARTOUCHE
});
$( "#c-cerne-deux" ).mouseleave(function() {
  $("#c-cerne-deux").css("stroke", "#E6FCFE");
  $("#c-cerne-deux").css("stroke-width", "1px");
  $("#c-label-deux").css("display", "none"); // LE CARTOUCHE
});

// OPEN FORM -------------------------------------------------
$(".c-questions").click(function(){
  $("#c-part-text").html('<h1>Arroser une pousse</h1><br><form class="c-form-cat">Titre :<input id="c-input-title" type="text" name="Titre"></form><textarea id="c-textarea" rows="20" cols="40"></textarea><form class=""><input id="c-form-send" type="submit" value="arroser"><button id="c-help-button" type="button" name="button">help</button></form><div id="c-help-box"><p id="c-p-help-box">&lt;p&gt;paragraphe&lt;/p&gt;<br>&lt;br&gt;saut de ligne&lt;br&gt;<br>&lt;h2&gt;titre de partie&lt;h2&gt;<br>&lt;h3&gt;titre de sous partie&lt;h3&gt;<br>&lt;strong&gt;gras&lt;/strong&gt;<br>&lt;i&gt;italic&lt;/i&gt;</p></div>');
});

$("#c-help-button").mouseenter(function(){
  console.log('click');
  //$("#c-help-box").css("display", "inline");
});

//---------------------------------- FOCUS SOMMAIRE ---------



});
