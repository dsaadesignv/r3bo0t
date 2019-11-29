/////////////////////////GRAPHIQUE1////////////////////////////////
var data1 =  {
  nodes: [
    {id: "Lycée de Villefontaine", group:"lieu1"},
    {id: "Boule Disco", group:"objet1",
      fill: {
        src: "services/t/img/candle.png",
        mode: "fit"
      }
    },
    {id: "T-Shirt Enfant", group:"objet1",
      fill: {
        src: "services/t/img/shirt.png",
        mode: "fit"
      }},
    {id: "Canapé", group:"objet1",
      fill: {
        src: "services/t/img/couch.png",
        mode: "fit"
      }},
  ],

  edges: [
    {from: "Lycée de Villefontaine", to: "Boule Disco"},
    {from: "Lycée de Villefontaine", to: "T-Shirt Enfant"},
    {from: "Lycée de Villefontaine", to: "Canapé"},
  ],
};

// create a chart and set the data
var chart1 = anychart.graph(data1);
chart1.container("t-Container1");

//set nodes
var nodes1 = chart1.nodes();

//set groups
var lieu1 = chart1.group("lieu1");
var objet1 = chart1.group("objet1");

//set the fontSize
objet1.normal().height(35);
objet1.hovered().height(35);
objet1.selected().height(35);

lieu1.normal().height(70);
lieu1.hovered().height(70);
lieu1.selected().height(70);

// set the shape of nodes
nodes1.normal().shape("circle");

// set the fill of nodes
nodes1.normal().fill("#ffffff");
nodes1.hovered().fill("#ffffff");
nodes1.selected().fill("#ffffff");

// set the stroke of nodes
chart1.nodes().normal().stroke(null);
chart1.nodes().hovered().stroke(null);
chart1.nodes().selected().stroke(null);

lieu1.normal().stroke("#000", 2);
lieu1.hovered().stroke("#000", 2);
lieu1.selected().stroke("#000", 2);

//set the stroke of edges
chart1.edges().normal().stroke("#000000", 2, "round");
chart1.edges().hovered().stroke("#000000", 2, "round");
chart1.edges().selected().stroke("#000000", 2, "round");

//labels
chart1.nodes().labels().enabled(true);
chart1.edges().labels().enabled(false);

chart1.labels().fontColor("#000000");

objet1.labels().fontSize(12);
objet1.labels().fontWeight(600);
objet1.labels().format("{%id}");

////set tooltips
chart1.nodes().tooltip().enabled(false);
chart1.edges().tooltip().enabled(false);

// fixer le graphique
chart1.interactivity().zoomOnMouseWheel(false);
chart1.interactivity().scrollOnMouseWheel(false);
chart1.interactivity().nodes(false);


// initiate drawing the chart
chart1.draw();


/////////////////////////GRAPHIQUE2////////////////////////////////
var data2 =  {
  nodes: [
    {id: "Mairie de Villefontaine", group:"lieu2"},
    {id: "Chaussettes", group:"objet",
      fill: {
        src: "services/t/img/shirt.png",
        mode: "fit"
      }},
    {id: "Bougie", group:"objet2",
      fill: {
        src: "services/t/img/candle.png",
        mode: "fit"
      }},
    {id: "Pelle", group:"objet2",
      fill: {
        src: "services/t/img/leaf.png",
        mode: "fit"
      }},
    {id: "T-Shirt Metallica", group:"objet2",
      fill: {
        src: "services/t/img/shirt.png",
        mode: "fit"
      }},
    {id: "Brouette", group:"objet2",
      fill: {
        src: "services/t/img/leaf.png",
        mode: "fit"
      }},
    {id: "Manteau Hiver", group:"objet2",
      fill: {
        src: "services/t/img/shirt.png",
        mode: "fit"
      }},
  ],

  edges: [
    {from: "Mairie de Villefontaine", to: "Chaussettes"},
    {from: "Mairie de Villefontaine", to: "Bougie"},
    {from: "Mairie de Villefontaine", to: "Pelle"},
    {from: "Mairie de Villefontaine", to: "T-Shirt Metallica"},
    {from: "Mairie de Villefontaine", to: "Brouette"},
    {from: "Mairie de Villefontaine", to: "Manteau Hiver"},
  ],
};

// create a chart and set the data
var chart2 = anychart.graph(data2);
chart2.container("t-Container2");

//set nodes
var nodes2 = chart2.nodes();

//set groups
var lieu2 = chart2.group("lieu2");
var objet2 = chart2.group("objet2");

//set the fontSize
objet2.normal().height(35);
objet2.hovered().height(35);
objet2.selected().height(35);

lieu2.normal().height(70);
lieu2.hovered().height(70);
lieu2.selected().height(70);

//set the shape of the nodes
// set the shape of nodes
nodes2.normal().shape("circle");

// set the fill of nodes
nodes2.normal().fill("#ffffff");
nodes2.hovered().fill("#ffffff");
nodes2.selected().fill("#ffffff");

// set the stroke of nodes
chart2.nodes().normal().stroke(null);
chart2.nodes().hovered().stroke(null);
chart2.nodes().selected().stroke(null);

lieu2.normal().stroke("#000", 2);
lieu2.hovered().stroke("#000", 2);
lieu2.selected().stroke("#000", 2);

//set the stroke of edges
chart2.edges().normal().stroke("#000000", 2, "round");
chart2.edges().hovered().stroke("#000000", 2, "round");
chart2.edges().selected().stroke("#000000", 2, "round");

//labels
chart2.nodes().labels().enabled(true);
chart2.edges().labels().enabled(false);

chart2.labels().fontColor("#000000");

objet2.labels().fontSize(12);
objet2.labels().fontWeight(600);
objet2.labels().format("{%id}");

////set tooltips
chart2.nodes().tooltip().enabled(false);
chart2.edges().tooltip().enabled(false);

// fixer le graphique
chart2.interactivity().zoomOnMouseWheel(false);
chart2.interactivity().scrollOnMouseWheel(false);
chart2.interactivity().nodes(false);


// initiate drawing the chart
chart2.draw();





/////////////////////////GRAPHIQUE3////////////////////////////////
var data3 =  {
  nodes: [
    {id: "Gare de la Verpillière", group:"lieu3"},
    {id: "Boutures de Figuier", group:"objet3",
      fill: {
        src: "services/t/img/leaf.png",
        mode: "fit"
      }
    },
    {id: "Mirroir", group:"objet3",
      fill: {
        src: "services/t/img/candle.png",
        mode: "fit"
      }
    },
    {id: "Etagère", group:"objet3",
      fill: {
        src: "services/t/img/couch.png",
        mode: "fit"
      }
    },
    {id: "Table de nuit", group:"objet3",
      fill: {
        src: "services/t/img/couch.png",
        mode: "fit"
      }
    },
  ],

  edges: [
    {from: "Gare de la Verpillière", to: "Boutures de Figuier"},
    {from: "Gare de la Verpillière", to: "Mirroir"},
    {from: "Gare de la Verpillière", to: "Etagère"},
    {from: "Gare de la Verpillière", to: "Table de nuit"},
  ],
};

// create a chart and set the data
var chart3 = anychart.graph(data3);
chart3.container("t-Container3");

//set nodes
var nodes3 = chart3.nodes();

//set groups
var lieu3 = chart3.group("lieu3");
var objet3 = chart3.group("objet3");

//set the fontSize
objet3.normal().height(35);
objet3.hovered().height(35);
objet3.selected().height(35);

lieu3.normal().height(70);
lieu3.hovered().height(70);
lieu3.selected().height(70);

//set the shape of the nodes
// set the shape of nodes
nodes3.normal().shape("circle");

// set the fill of nodes
nodes3.normal().fill("#ffffff");
nodes3.hovered().fill("#ffffff");
nodes3.selected().fill("#ffffff");

// set the stroke of nodes
chart3.nodes().normal().stroke(null);
chart3.nodes().hovered().stroke(null);
chart3.nodes().selected().stroke(null);

lieu3.normal().stroke("#000", 2);
lieu3.hovered().stroke("#000", 2);
lieu3.selected().stroke("#000", 2);

//set the stroke of edges
chart3.edges().normal().stroke("#000000", 2, "round");
chart3.edges().hovered().stroke("#000000", 2, "round");
chart3.edges().selected().stroke("#000000", 2, "round");

//labels
chart3.nodes().labels().enabled(true);
chart3.edges().labels().enabled(false);

chart3.labels().fontColor("#000000");

objet3.labels().fontSize(12);
objet3.labels().fontWeight(600);
objet3.labels().format("{%id}");

////set tooltips
chart3.nodes().tooltip().enabled(false);
chart3.edges().tooltip().enabled(false);

// fixer le graphique
chart3.interactivity().zoomOnMouseWheel(false);
chart3.interactivity().scrollOnMouseWheel(false);
chart3.interactivity().nodes(false);


// initiate drawing the chart
chart3.draw();
