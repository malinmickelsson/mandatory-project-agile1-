const uuid = require("uuid");

const createRoom = (roomName, clientId, settings) => {
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

const joinRoom = (room, clientId) => {
  room.players.push(clientId);
}   

const rejoinRoom = () => {

}

module.exports = {
  create: createRoom,
  join: joinRoom,
}