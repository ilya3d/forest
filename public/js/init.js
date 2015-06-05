 var socket = io();
  socket.on('connect', function () {

 	console.log('connect');

    socket.emit('message', 'test', function(data) {
    	console.log(data);
    });

  

  });