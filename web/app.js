const socket = io('ws://192.168.1.6:8080');

socket.on('data', (data) => {
  document.getElementById('temp-display').textContent = data;
});
