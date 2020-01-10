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

// Temp channels
let chat = [];
let game = 

// Vid connection
io.sockets.on("connection", (socket) => {

  // Kollar vem spelaren är.
  socket.on("userId", id => {
    console.log(id);
    const user = _.find(users, ["id", id]);
    console.log(user);
    if (user) {
      socket.id = id;
      console.log("Existing user connected. Id: " + socket.id);
      socket.emit("userInfo", res.ok(user));
    } else {
      const newUser = userHelper.newUser(socket.id);
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
  socket.on("createRoom", data => {
    console.log(data);
    const { color, roomName, clientId } = data;
    const foundRoom = _.find(rooms, ["name", roomName]);
    console.log(foundRoom);
    if (foundRoom) {
      socket.emit("roomCreated", res.reject())
    } else {
      const newRoom = roomHelper.create(roomName, clientId, color);
      rooms.push(newRoom);
      console.log(rooms);
      socket.emit("roomCreated", res.ok(newRoom));
      console.log(roomHelper.filtered(rooms));
      socket.emit("roomList", res.ok(roomHelper.filtered(rooms)));
    }
  });

  // Gå med i rum
  socket.on("joinRoom", ({ roomId, clientId }) => {
    const foundRoom = _.find(rooms, ["id", roomId]);
    console.log(foundRoom);
    if (foundRoom && clientId !== foundRoom.owner) {
      roomHelper.join(foundRoom, socket.id);
      socket.emit("roomJoined", res.ok(foundRoom));
    } else {
      res.reject();
    }
  })

  // Skickar en lista på rummen
  socket.on("getRoomList", () => {
    socket.emit("roomList", res.ok(roomHelper.filtered(rooms)));
  });

  // Skickar antalet användare på servern
  socket.on("getUserCount", () => {
    socket.emit("userCount", res.ok(users.length));
  });

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