// create a chart and set the data

var data;
var data2;
var data3;



(function() {
  $.getJSON( 'services/t/data_1.json', {
    format: "json"
  })
    .done(function( d ) {
      // console.log(d);
      data = d;
      init();
    });
})();

(function() {
  $.getJSON( 'services/t/data_2.json', {
    format: "json"
  })
    .done(function( d2 ) {
      // console.log(d2);
      data2 = d2;
      init2();
    });
})();

(function() {
  $.getJSON( 'services/t/data_3.json', {
    format: "json"
  })
    .done(function( d3 ) {
      // console.log(d3);
      data3 = d3;
      init3();
    });
})();


function init() {
var chart = anychart.graph(data);
chart.layout().type("forced");
chart.bounds(0, 0, "100%", "100%");

// set the container
chart.container("t-Container1");
var nodes = chart.nodes();
chart.background().fill(null);

//set the groups
var lieu = chart.group("lieu");
var objet = chart.group("objet");


// set the nodes
objet.normal().height(35);
objet.hovered().height(35);
objet.selected().height(35);

lieu.normal().height(70);
lieu.hovered().height(70);
lieu.selected().height(70);

nodes.normal().shape("circle");

nodes.normal().fill("#ffffff");
nodes.hovered().fill("#ffffff");
nodes.selected().fill("#ffffff");

chart.nodes().normal().stroke(null);
chart.nodes().hovered().stroke(null);
chart.nodes().selected().stroke(null);

lieu.normal().stroke("#000", 2);
lieu.hovered().stroke("#000", 2);
lieu.selected().stroke("#000", 2);

//set the edges
chart.edges().normal().stroke("#000000", 2, "round");
chart.edges().hovered().stroke("#000000", 2, "round");
chart.edges().selected().stroke("#000000", 2, "round");

//labels
chart.nodes().labels().enabled(true);
chart.edges().labels().enabled(false);

chart.labels().fontColor("#000000");

objet.labels().fontSize(12);
objet.labels().fontWeight(600);
objet.labels().format("{%id}");

lieu.labels().fontSize(12);
lieu.labels().fontWeight(600);
lieu.labels().format("{%id}");

//set tooltips
chart.nodes().tooltip().enabled(false);
chart.edges().tooltip().enabled(false);

// fixer le graphique
chart.interactivity().zoomOnMouseWheel(false);
chart.interactivity().scrollOnMouseWheel(false);
chart.interactivity().nodes(false);

// initiate drawing the chart
chart.draw();}


////////////////////////////////////////////////////////CHART2

function init2() {
var chart2 = anychart.graph(data2);
chart2.layout().type("forced");
chart2.bounds("10%", "10%", "80%", "80%");

// set the container
chart2.container("t-Container2");
var nodes2 = chart2.nodes();
chart2.background().fill(null);
//set the groups
var lieu2 = chart2.group("lieu");
var objet2 = chart2.group("objet");


// set the nodes
objet2.normal().height(35);
objet2.hovered().height(35);
objet2.selected().height(35);

lieu2.normal().height(70*0.5);
lieu2.hovered().height(70*0.5);
lieu2.selected().height(70*0.5);

nodes2.normal().shape("circle");

nodes2.normal().fill("#ffffff");
nodes2.hovered().fill("#ffffff");
nodes2.selected().fill("#ffffff");

chart2.nodes().normal().stroke(null);
chart2.nodes().hovered().stroke(null);
chart2.nodes().selected().stroke(null);

lieu2.normal().stroke("#000", 2);
lieu2.hovered().stroke("#000", 2);
lieu2.selected().stroke("#000", 2);

//set the edges
chart2.edges().normal().stroke("#000000", 2, "round");
chart2.edges().hovered().stroke("#000000", 2, "round");
chart2.edges().selected().stroke("#000000", 2, "round");

//labels
chart2.nodes().labels().enabled(true);
chart2.edges().labels().enabled(false);

chart2.labels().fontColor("#000000");

objet2.labels().fontSize(9);
objet2.labels().fontWeight(600);
objet2.labels().format("{%id}");

lieu2.labels().fontSize(12);
lieu2.labels().fontWeight(600);
lieu2.labels().format("{%id}");

//set tooltips
chart2.nodes().tooltip().enabled(false);
chart2.edges().tooltip().enabled(false);

// fixer le graphique
chart2.interactivity().zoomOnMouseWheel(false);
chart2.interactivity().scrollOnMouseWheel(false);
chart2.interactivity().nodes(false);

// initiate drawing the chart
chart2.draw();}

///////////////////////////////////////////////CHART3

function init3() {
var chart3 = anychart.graph(data3);
chart3.layout().type("forced");
chart3.bounds("20%", "20%", "60%", "60%");
// set the container
chart3.container("t-Container3");
var nodes3 = chart3.nodes();
chart3.background().fill(null);

//set the groups
var lieu3 = chart3.group("lieu");
var objet3 = chart3.group("objet");


// set the nodes
objet3.normal().height(35);
objet3.hovered().height(35);
objet3.selected().height(35);

lieu3.normal().height(70*0.3);
lieu3.hovered().height(70*0.3);
lieu3.selected().height(70*0.3);

nodes3.normal().shape("circle");

nodes3.normal().fill("#ffffff");
nodes3.hovered().fill("#ffffff");
nodes3.selected().fill("#ffffff");

chart3.nodes().normal().stroke(null);
chart3.nodes().hovered().stroke(null);
chart3.nodes().selected().stroke(null);

lieu3.normal().stroke("#000", 2);
lieu3.hovered().stroke("#000", 2);
lieu3.selected().stroke("#000", 2);

//set the edges
chart3.edges().normal().stroke("#000000", 2, "round");
chart3.edges().hovered().stroke("#000000", 2, "round");
chart3.edges().selected().stroke("#000000", 2, "round");

//labels
chart3.nodes().labels().enabled(true);
chart3.edges().labels().enabled(false);

chart3.labels().fontColor("#000000");

objet3.labels().fontSize(7);
objet3.labels().fontWeight(600);
objet3.labels().format("{%id}");

lieu3.labels().fontSize(12);
lieu3.labels().fontWeight(600);
lieu3.labels().format("{%id}");

//set tooltips
chart3.nodes().tooltip().enabled(false);
chart3.edges().tooltip().enabled(false);

// fixer le graphique
chart3.interactivity().zoomOnMouseWheel(false);
chart3.interactivity().scrollOnMouseWheel(false);
chart3.interactivity().nodes(false);

// initiate drawing the chart
chart3.draw();}

$(function(){

  $('.t-goto-page1').on('click', function(){
    $('.t-page').not('.t-page1').fadeOut(500);
    $('.t-page1').fadeIn(500);
  });

  $('.t-goto-page2').on('click', function(){
    $('.t-page').not('.t-page2').fadeOut(500);
    $('.t-page2').fadeIn(500);
  });

  $('.t-goto-page3').on('click', function(){
    $('.t-page').not('.t-page3').fadeOut(500);
    $('.t-page3').fadeIn(500);
  });

  $('.t-goto-page4').on('click', function(){
    $('.t-page').not('.t-page4').fadeOut(500);
    $('.t-page4').fadeIn(500);
  });

  $('.t-goto-page5').on('click', function(){
    $('.t-page').not('.t-page5').fadeOut(500);
    $('.t-page5').fadeIn(500);
  });

  $('.t-goto-page6').on('click', function(){
    $('.t-page').not('.t-page6').fadeOut(500);
    $('.t-page6').fadeIn(500);
  });

});
