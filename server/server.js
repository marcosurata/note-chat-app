const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newEmail', {
    from:'mike@example',
    text:'hey. what is going on',
    createAt:123
  });

  socket.emit('createMessage', {
    to:'Marcos',
    text:'Hello'
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })

  socket.on('newMessage', (newMessage) => {
    newMessage.createAt = new Date();
    console.log('newMessage', newMessage);
  });
});


server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
