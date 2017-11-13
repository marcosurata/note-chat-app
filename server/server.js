const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const {generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })

  socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app.'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('newMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('this is from the server');
  });

  socket.on('createLocationMessage', (coords) => {
       io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
      //io.emit('newMessage', generateMessage('Admin', `${coords.latitude}, ${coords.longitude}`));
  });
});



server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
