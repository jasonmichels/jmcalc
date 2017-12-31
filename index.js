var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;

io.on('connection', function(socket){
    console.log("User connected")
    socket.on('submitCalculation', function(calculation){
        console.log('This is calculation ' + calculation)
        io.emit('newCalculation', calculation);
    });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});