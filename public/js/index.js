var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  socket.emit('createEmail', {
    to:'jen@example.com',
    text:'Hey, this is Andrew.'
  });

  socket.emit('newMessage', {
    from:'jen@example.com',
    text:'Hey, this is Andrew.'
  });

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log('New email', email);
});

socket.on('createMessage', function(message) {
  console.log('New message', message);
});
