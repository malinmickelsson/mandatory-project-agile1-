const uuid = require("uuid");
const _ = require("lodash")

const createRoom = (roomName, clientId, color, name) => {
  const roomId = uuid();
  console.log("Name" + name)
  return {
    id: roomId,
    name: roomName,
    owner: { id: clientId, color: color, name: name },
    opponent: {
      id: null,
      color: color === "w" ? "b" : "w",
      name: "Ingen motståndare"
    },
    game: {
      fen: "start",
      history: [],
      turn: "w"
    },
    chat: []
  }
}

const joinRoom = (room, clientId, name) => {
  if (room.owner.id === clientId || room.opponent.id === clientId) {
    console.log("Spelare fanns redan");
    return room;
  }
  if (room.owner.id !== clientId && room.opponent.id === null) {
    console.log("Lägger till opponent")
    room.opponent = {
      ...room.opponent,
      id: clientId || null,
      name: name
    };
    return room;
  }
}

const filteredRooms = (rooms, clientId) => {
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