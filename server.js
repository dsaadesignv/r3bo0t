var CONFIG            = require('./config.js');

var path              = require('path');
var express           = require('express')();

var server            = require('http').Server(express);
var io                = require('socket.io')(server);
var serveStatic       = require('serve-static');
var fs                = require("fs");
var bodyParser        = require('body-parser');
var url               = require('url');
var cookieParser      = require('cookie-parser');


express.use(serveStatic( __dirname + '/web/' ));
express.use(require('express-favicon-short-circuit'));
express.use(cookieParser());
express.use(bodyParser.urlencoded({
  extended: true
}));

express.set( 'view engine', 'ejs' );

let DB_T = require('./database/t.json');
let DB_USERS = require('./database/users.json');




/*
express.use(function (req, res, next) {
  console.log(req.path);
  if (req.path.startsWith('/login')) {
    next();
  } else {
    if (req.cookies['username'] == undefined) {
      res.render( __dirname + '/web/resources/forbidden', {});
    } else {
      next();
    }
  }
});
*/
express.get('/login/:username/:password', function(req, res) {
  var username = req.params.username;
  var password = req.params.password;

  res.cookie('username', username, { maxAge: 900000, httpOnly: true });

  res.redirect('/');
});

express.get('/', function (req, res) {
  console.log(req.query);

  console.log('>> loading jardin');

  res.render( __dirname + '/web/services/n/n', {
    BASEURL             : CONFIG.site.baseURL
  });
});

express.get('/:service/', function (req, res) {
  var service = req.params.service;
  console.log('>> loading service:', service);

  res.render( __dirname + '/web/services/'+service+'/'+service, {
    BASEURL             : CONFIG.site.baseURL,
    service             : service
  });
});

express.get('/:service/:page', function (req, res) {
  var service = req.params.service;
  var page = req.params.page;
  console.log('>> loading service:', service);

  res.render( __dirname + '/web/services/'+service+'/pages/'+page, {
    BASEURL             : CONFIG.site.baseURL,
    service             : service
  });
});




/////////////////////////

io.on('connection', function(socket) {
  console.log('New socket connected');
//  io.sockets.emit('connectedId',data);

  socket.emit('connection/handshake', {});


  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('connection/handshake', function(data) {
    console.log(data);

//    console.log('connectedId : '+data.id);

    /*
    socket.id = data.id;
    socket.join('/'+socket.id);
    */

  //  io.sockets.emit('connectedId',data);

    // addUser();

    io.sockets.emit('users/update', { DB_USERS });
	});

	socket.on('showSlide', function(data) {
    io.sockets.emit('showSlide',data);
	});

	socket.on('refresh', function(data) {
  	console.log('refresh');
    io.sockets.emit('refresh',null);
	});

  socket.on('disconnect', function(){
  });
});


server.listen(CONFIG.site.port, function(){
  console.log('>> accédez à r3bo0t à l\'adresse [ localhost:'+CONFIG.site.port+' ]');
});





function saveDatabase(dbName, data) {
  let dataJson = JSON.stringify(data, null, 2);

  fs.writeFile('./database/'+dbName+'.json', dataJson, (err) => {
      if (err) throw err;
      console.log('[SAVE] Database `'+dbName+'.json` saved.');
  });
}
