

var express = require('express');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send(111);
});


var server = app.listen(3050);
var io = require('socket.io').listen(server);

io.on('connection', function (socket) {

    socket.send('message', { test: 'test' });

    socket.on('message', function (test, data) { 
        socket.send('test');
    });

    socket.on('disconnect', function () { });

});
