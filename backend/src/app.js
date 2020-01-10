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

let chat = [];

// Vid connection
io.sockets.on("connection", (socket) => {

  // Kollar vem spelaren är.
  socket.on("userId", data => {
    const user = _.find(users, ["id", data.id]);
    if (user) {
      socket.id = data.id;
      console.log("Existing user connected. Id: " + data.id);
      socket.emit("userInfo", res.ok(user));
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
    console.log(foundRoom);
    if (foundRoom) {
      socket.emit("roomCreated", res.reject())
    } else {
      const newRoom = roomHelper.create(roomName, socket.id, settings);
      rooms.push(newRoom);
      console.log(rooms);
      socket.emit("roomCreated", res.ok(newRoom));
    }
  });
  // Gå med i rum
  socket.on("joinRoom", ({ roomId }) => {
    const foundRoom = _.find(rooms, ["id", roomId]);
    if (foundRoom && foundRoom.players.length < 2 && !_.includes(foundRoom.players, socket.id)) {
      roomHelper.join(foundRoom, socket.id);
      
      socket.emit("roomJoined", res.ok(foundRoom));
    } else {
      res.reject();
    }
  })
  // Chatt-logik
  // Skriva om och koppla baserat på vilket rum man är i
  socket.emit("messages", res.ok(chat));
  socket.on("sendMessage", msg => {
    const newMessage = {
      message: msg,
      sender: "Malin", // Skicka namn
    };
    chat.push(newMessage);
    socket.emit("messages", res.ok(chat))
  });
  // Starta match
  // Rund-baserad logik, validering av drag
  // Match klar, ta bort rum om det inte sker någon rematch

});


server.listen(PORT, console.log("Listening"));