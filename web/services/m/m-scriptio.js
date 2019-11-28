var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/m-index2.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

/*$(function () {
	$('.goto-m-hub').on('click', function(){
		$('.m-page').hide();  // 1. On cache tous les écrans
		$('.m-hub').show(); // 2. Puis on affiche l'écran
	});
	$('.goto-m-chat').on('click', function(){
		$('.m-page').hide();  // 1. On cache tous les écrans
		$('.m-chatContainer').show(); // 2. Puis on affiche l'écran
	});
//	toggleDrawer();
});*/

function toggleNav() {
    var element = document.getElementById("fenetre");
    if (element.style.height == "428.44px") {
        element.style.height = "0px";
    } else {
        element.style.height = "428.44px";
    }

		var element = document.getElementById("fenetreChat");
		if (element.style.height == "428.44px") {
				element.style.height = "0px";
		} else {
				element.style.height = "428.44px";
		}
}

function toggleDrawer() {
    var element = document.getElementById("m-drawerOpened");
    if (element.style.height == "95.5%") {
        element.style.height = "0%";
    } else {
        element.style.height = "95.5%";
    }

		var element = document.getElementById("m-drawerChatOpened");
		if (element.style.height == "75%") {
				element.style.height = "3.6%";
		} else {
				element.style.height = "75%";
		}
}

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("fenetreChat").style.height = "428.44px";

}

/* Set the width of the side navigation to 0 */
/*function closeNav() {
  document.getElementById("fenetre").style.height = "0";
}*/
