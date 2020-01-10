const uuid = require("uuid");

const createRoom = (roomName, clientId, color) => {
  const roomId = uuid();
  return {
    id: roomId,
    name: roomName,
    owner: clientId,
    ownerColor: color,
    opponentColor: color === "white" ? "black" : "white",
    opponent: null,
    fen: null,
    chat: []
  }
}

const joinRoom = (room, clientId) => {

}

const filteredRooms = (rooms) => {
  return rooms.map(x => {
    return {
      name: x.name,
      owner: x.owner,
      id: x.id
    }
  })
}

module.exports = {
  create: createRoom,
  join: joinRoom,
  filtered: filteredRooms,
}