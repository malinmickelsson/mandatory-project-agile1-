const uuid = require("uuid");

const newUser = (name) => {
  return {
    id: uuid(),
    name: name || "new player",
    currentRoom: null
  }
}

module.exports = {
  newUser,
}