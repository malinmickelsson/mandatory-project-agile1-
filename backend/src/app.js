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

  // Kollar vem spelaren är.
  socket.on("userId", data => {
    if (_.find(users, ["id", data.id])) {
      socket.id = data.id;
      console.log("Existing user connected. Id: " + data.id);
      socket.emit("userInfo", res.ok(users[data.id]));
    } else {
      const newUser = userHelper.newUser();
      socket.id = newUser.id;
      users.push(newUser);
      console.log("New user connected. Id: " + newUser.id);
      socket.emit("userInfo", res.ok(newUser));
    }
  });

  socket.on("setName", name => {
    let user = _.find(users, ["id", socket.id]);
    console.log(user);
    user.name = name;
    socket.emit("userInfo", res.ok(user))
  })

  // Rum-logik
  // Skapa rum
  socket.on("newRoom", ({ clientId, roomName, settings }) => {
    if (roomName in rooms) {
      socket.emit("roomCreated", res.reject())
    } else {
      const room = room.new(roomName, clientId, settings);
      rooms.push(room);
      socket.emit("roomCreated", res.ok(room));
    }
  });
  // Gå med i rum
  socket.on("joinRoom", ({ roomId }) => {
    const room = _.find(rooms, ["id", roomId]);
    console.log(room);
    if (room.players.length < 2) {

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