const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: { origin: '*' },
});

const PORT = 8080;

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('data', Math.floor(Math.random() * 100));
});

http.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
