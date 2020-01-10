const uuid = require("uuid");

const newRoom = (roomId, roomName, clientId, settings) => {
  const roomId = uuid();
  return {
    id: roomId,
    name: roomName,
    owner: clientId,
    players: [clientId],
    gameData: null,
    settings: settings,
    chat: []
  }
}

const joinRoom = () => {
  
}

module.exports = {
  new: newRoom,
  join: joinRoom,
}