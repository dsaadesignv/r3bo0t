$('.goto-m-hub').on('click', function(){
	$('.m-page').hide();  // 1. On cache tous les écrans
	$('.m-hub').show(); // 2. Puis on affiche l'écran
});

$('.goto-m-chat').unbind().on('click', function(){
	$('.m-page').hide();  // 1. On cache tous les écrans
	$('.m-chatContainer').show("fast", function() {
		$("#m-text").focus();
	}); // 2. Puis on affiche l'écran
	// chat
});
var socket = io();
$('.m-chatContainer form').unbind().on("submit",function(e){

	console.log('send msg');
	e.preventDefault(); // prevents page reloading
	let msg = $('#m-text').val();
	socket.emit('chat message', msg);
	$('#m-text').val('');
	return false;
});
socket.on('chat message', function(msg){
	$('.m-messages').append($('<li>').text(msg));
});


$(function () {
	$('.goto-m-smileyDrawer').on('click', function(){
		$('.m-pageDrawer').hide();  // 1. On cache tous les écrans
		$('.m-drawerSmiley').show(); // 2. Puis on affiche l'écran
	});
	//	toggleDrawer();
});

$.getJSON("services/m/emojis.json")
.done(function( data ) {
	console.log("emojis chargés");
	$.each( data, function( i, d ) {
		if(i<100){ // b emojis
			$('<span>'+d.char+'</span>').appendTo($('.m-drawerSmileyScreen'))
			.on('click',function(){
				$('#m-text').val( $('#m-text').val() + '' + $(this).text());
			});
		}
	});

});




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

function letOpen() {
	var element = document.getElementById("fenetre");
	if (element.style.height == "0px") {
		element.style.height = "428.44px";
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
	if (element.style.height == "55%") {
		element.style.height = "3.6%";
	} else {
		element.style.height = "55%";
	}
}

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("fenetreChat").style.height = "428.44px";
}

function openDrawer() {
	document.getElementById("m-drawerOpened").style.height = "95.5%";
	document.getElementById("m-drawerChatOpened").style.height = "75%";

}


/* Set the width of the side navigation to 0 */
/*function closeNav() {
document.getElementById("fenetre").style.height = "0";
}*/
