const newUser = (id) => {
  return {
    id: id,
    name: "new player",
    currentRoom: null
  }
}

module.exports = {
  newUser,
}