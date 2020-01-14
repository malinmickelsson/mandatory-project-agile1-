const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const _ = require('lodash');
const PORT = process.env.port || 8000;

const userHelper = require('./helpers/users');
const roomHelper = require('./helpers/room');
const res = require('./helpers/response');

// Rumobjekt, ska ligga i databas senare. Inmemory just nu
let rooms = [];
let users = [];

// Vid connection
io.sockets.on('connection', (socket) => {

  // Kollar vem spelaren är.
  socket.on('userId', id => {
    const user = _.find(users, ['id', id]);
    if (user) {
      socket.userId = id;
      console.log('Existing user connected. Id: ' + socket.userId);
      socket.emit('userInfo', res.ok(user));
    } else {
      const newUser = userHelper.newUser(socket.id);
      socket.userId = socket.id;
      users.push(newUser);
      console.log('New user connected. Id: ' + newUser.id);
      socket.emit('userInfo', res.ok(newUser));
    }
  });

  socket.on('setName', name => {
    let user = _.find(users, ['id', socket.userId]);
    console.log(user);
    user.name = name;
    socket.emit('userInfo', res.ok(user))
  })

  // Rum-logik
  // Skapa rum
  socket.on('createRoom', data => {
    const { color, roomName, clientId } = data;
    let user = _.find(users, ['id', clientId]);
    const foundRoom = _.find(rooms, ['name', roomName]);

    if (foundRoom) {
      socket.emit('roomCreated', res.reject())
    } else {
      const newRoom = roomHelper.create(roomName, clientId, color, user.name);
      rooms.push(newRoom);
      socket.join(newRoom.id);
      socket.emit('roomCreated', res.ok(newRoom));
      io.emit('roomList', res.ok(roomHelper.filtered(rooms, socket.id))); // Uppdaterar allas rumlista
    }
  });

  // Gå med i rum
  socket.on('joinRoom', ({ roomId }) => {
    const foundRoom = _.find(rooms, ['id', roomId]);
    let user = _.find(users, ['id', socket.userId]);

    if (foundRoom) {
      roomHelper.join(foundRoom, socket.id, user.name);
      socket.emit('roomJoined', res.ok(foundRoom));
      io.emit('roomList', res.ok(roomHelper.filtered(rooms, socket.id))); // Uppdaterar allas rum-lista
    } else {
      res.reject();
    }
  })

  socket.on("leaveRoom", ({ roomId }) => {
    socket.leave(roomId)
  })

  // Skickar en lista på rummen
  socket.on('getRoomList', () => {
    socket.emit('roomList', res.ok(roomHelper.filtered(rooms, socket.id)));
  });

  // Skickar antalet användare på servern
  socket.on('getUserCount', () => {
    socket.emit('userCount', res.ok(users.length));
  });

  // Chatt-logik
  // Skriva om och koppla baserat på vilket rum man är i
  socket.on("getMessages", ({ roomId }) => {
    const foundRoom = _.find(rooms, ["id", roomId]);
    if (foundRoom) {
      socket.emit("messages", res.ok(foundRoom.chat))
    }
  })
  socket.on('sendMessage', ({ roomId, msg, clientId }) => {
    const foundRoom = _.find(rooms, ["id", roomId]);
    const foundUser = _.find(users, ["id", clientId]);
    const newMessage = {
      message: msg,
      sender: foundUser.name,
      senderId: socket.userId
    };
    foundRoom.chat.push(newMessage);
    io.in(roomId).emit("messages", res.ok(foundRoom.chat))
  });


  // Gått med i rummet, skicka chatt och status
  socket.on("gameJoined", ({ roomId, clientId }) => {
    const foundRoom = _.find(rooms, ["id", roomId]);
    if (foundRoom === undefined) {
      socket.emit("roomInfo", res.reject())
    } else {
      console.log("Game joined: " + clientId);
      socket.join(roomId);
      socket.emit("roomInfo", res.ok(foundRoom));
    }
  });

  // Runda spelad 
  socket.on("gameTurnPlayed", ({ roomId, fen, clientId, history }) => {
    const foundRoom = _.find(rooms, ["id", roomId]);
    const game = foundRoom && foundRoom.game;
    game.fen = fen;
    game.history = history;
    console.log(game);

    if (game.turn === "w") { game.turn = "b" }
    else if (game.turn === "b") { game.turn = "w" }
    io.in(roomId).emit("gameInfo", res.ok(game));
    // game.update
    // ok => skicka turn-objekt
  });



});


server.listen(PORT, console.log('Listening'));