const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const _ = require("lodash");
const PORT = process.env.port || 8000;

const userHelper = require("./helpers/users");
const res = require("./helpers/response");

// Rumobjekt, ska ligga i databas senare. Inmemory just nu
const rooms = [];
const users = [];

// Vid connection
io.sockets.on("connection", (socket) => {

  //io.to(socket.id).emit("userInfo", "Hej");
  // Kollar vem spelaren är.
  socket.on("userId", data => {
    if (data.id in users) {
      socket.id = data.id;
      socket.emit("userInfo", res.ok(users[data.id]));
    } else {
      const newUser = userHelper.newUser();
      socket.id = newUser.id;
      users[newUser.id] = newUser;
      console.log("user connected with id: " + newUser.id);
      socket.emit("userInfo", res.ok(newUser));
    }
  });

  socket.on("setName", name => {
    users[socket.id].name = name;
    console.log(users);

    socket.emit("userInfo", res.ok(users[socket.id]))
  })

  // Rum-logik
  // Skapa rum
  socket.on("newRoom", ({ clientId, roomName, settings }) => {
    if (roomName in rooms) {
      socket.emit("roomCreated", res.reject())
    } else {
      const room = room.new(roomName, clientId, settings);
      const roomId = room.id;
      rooms.push(room);
      socket.join(roomId);
      socket.emit("roomCreated", res.ok(room));
    }
  });
  // Gå med i rum
  socket.on("joinRoom", ({ roomId }) => {
    const room = rooms.find(x => x.id === roomId);
    console.log(room);
    if (room.players.length < 2) {
      socket.join(roomId);
      socket.emit("roomJoined", "Room joined");
    } else {
      console.log("tried")
    }
  })

  // Chatt-logik
  // Starta match
  // Rund-baserad logik, koll på tid, validering av drag
  // Match klar, ta bort rum om det inte sker någon rematch
  // MMR-adjustment

});


server.listen(PORT, console.log("Listening"));