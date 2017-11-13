var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  // socket.emit('createMessage', {
  //   to:'jen@example.com',
  //   text:'Hey, this is Andrew.'
  // });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
