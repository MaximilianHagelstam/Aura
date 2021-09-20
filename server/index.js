const serialPort = require('serialport');
const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: { origin: '*' },
});

const parser = new serialPort.parsers.Readline({
  delimiter: '\r\n',
});

const port = new serialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false,
});

port.pipe(parser);

parser.on('data', (data) => {
  console.log(data);
  io.emit('data', data);
});

http.listen(3000, () => console.log('listening on http://localhost:3000'));
