const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const _ = require("lodash");
const PORT = process.env.port || 8000;

const userHelper = require("./helpers/users");
const roomHelper = require("./helpers/room");
const res = require("./helpers/response");

// Rumobjekt, ska ligga i databas senare. Inmemory just nu
const rooms = [];
const users = [];

// Vid connection
io.sockets.on("connection", (socket) => {

  // Kollar vem spelaren är.
  socket.on("userId", data => {
    const user = _.find(users, ["id", data.id]);
    if (user) {
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
  socket.on("createRoom", ({ roomName, settings }) => {
    const foundRoom = _.find(rooms, ["name", roomName]);
    if (foundRoom) {
      socket.emit("roomCreated", res.reject())
    } else {
      const newRoom = roomHelper.create(roomName, socket.id, settings);
      rooms.push(newRoom);
      socket.emit("roomCreated", res.ok(newRoom));
    }
  });
  // Gå med i rum
  socket.on("joinRoom", ({ roomId }) => {
    const foundRoom = _.find(rooms, ["id", roomId]);
    if (foundRoom && foundRoom.players.length < 2) {
      roomHelper.join(foundRoom, socket.id);
      
      socket.emit("roomJoined", res.ok(foundRoom));
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