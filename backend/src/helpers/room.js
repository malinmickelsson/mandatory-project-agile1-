const uuid = require("uuid");
const _ = require("lodash")

const createRoom = (roomName, clientId, color) => {
  const roomId = uuid();
  return {
    id: roomId,
    name: roomName,
    owner: { id: clientId, color: color, name: "ÄgarNamn" },
    opponent: {
      id: null,
      color: color === "white" ? "black" : "white",
      name: "MotståndarNamn"
    },
    fen: null,
    chat: []
  }
}

const joinRoom = (room, clientId) => {
  if (room.owner.id === clientId || room.opponent.id === clientId) {
    console.log("Spelare fanns redan");
    return room;
  }
  if (room.owner.id !== clientId && room.opponent.id === null) {
    console.log("Lägger till opponent")
    room.opponent = {
      ...room.opponent,
      id: clientId
    };
    return room;
  }
}

const readChat = () => {

}

const sendChat = () => {

}

const filteredRooms = (rooms) => {
  return rooms.map(x => {
    return {
        name: x.name,
        owner: x.owner,
        id: x.id,
        opponent: x.opponent,
      }
    }
  )
  .filter(x => {
    if (x.opponent.id === null) {
      return x;
    }
  })
}

module.exports = {
  create: createRoom,
  join: joinRoom,
  filtered: filteredRooms,
}