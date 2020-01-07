let app = require('http').createServer();
let io = module.exports.io = require('socket.io')(app);

const PORT = process.env.PORT || 3230; //tillfällig port

const SocketManager = require('./SocketManager');

io.on('connection', SocketManager);

app.listen(PORT, ()=> {
    console.log('Connected to port: '+ PORT);
})