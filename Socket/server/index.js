import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const roomConnections = {};

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on('connection', (client) => {
    console.log('Клиент подключился!')

    client.on('mes', (msg) => {
      // const {message, room} = msg;
      console.log(msg)
      io.to(msg.room).emit('mess', msg)
    })

    client.on('create', (room) => {
      console.log(room)
      client.join(room)
      // const roomId = data.id;
      // roomConnections[roomid].push(client);
    })
    client.on('disconnect', () => {
      console.log('Отключился');
    });
})

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});