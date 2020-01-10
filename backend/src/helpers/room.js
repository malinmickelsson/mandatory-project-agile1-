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
  try { 
    console.log(this.users);
  } catch (e) {
    console.log(e)
  }
}   

module.exports = {
  create: createRoom,
  join: joinRoom,
}