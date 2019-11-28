var CONFIG            = require('./config.js');

var path              = require('path');
var express           = require('express')();

var server            = require('http').Server(express);
var io                = require('socket.io')(server);
var serveStatic       = require('serve-static');
var fs                = require("fs");
var bodyParser        = require('body-parser');
var url               = require('url');

let DB_T = require('./database/t.json');

console.log(DB_T);



express.use( serveStatic( __dirname + '/web/' ) );
express.use(require('express-favicon-short-circuit'));
express.use( bodyParser.urlencoded({
  extended: true
}));

express.set( 'view engine', 'ejs' );

express.get('/:service/', function (req, res) {
  var service = req.params.service;
  console.log('>> loading service:', service);

  res.render( __dirname + '/web/services/'+service+'/'+service, {
    BASEURL             : CONFIG.site.baseURL,
    service             : service
  });
});




/////////////////////////

io.on('connection', function(socket){
  console.log('New socket connected');
//  io.sockets.emit('connectedId',data);
  /*
  socket.on('connectedId', function(data) {
    console.log('connectedId : '+data.id);

    socket.id = data.id;
    socket.join('/'+socket.id);

    io.sockets.emit('connectedId',data);
	});
	*/

	socket.on('showSlide', function(data) {
    io.sockets.emit('showSlide',data);
	});

	socket.on('refresh', function(data) {
  	console.log('refresh');
    io.sockets.emit('refresh',null);
	});

  socket.on('disconnect', function(){
    clearTimeout(heartBeat);
  });
});


server.listen(CONFIG.site.port, function(){
  console.log('>> reb00t est lancé sur *:'+CONFIG.site.port);
});





function saveDatabase(dbName, data) {
  let dataJson = JSON.stringify(data, null, 2);

  fs.writeFile('./database/'+dbName+'.json', dataJson, (err) => {
      if (err) throw err;
      console.log('[SAVE] Database `'+dbName+'.json` saved.');
  });
}
