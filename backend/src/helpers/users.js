const uuid = require("uuid");

const newUser = (name) => {
  return {
    id: uuid(),
    name: name || "new player",
    mmr: 1500
  }
}

module.exports = {
  newUser,
}