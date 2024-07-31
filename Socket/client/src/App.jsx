import './App.css';
import { useEffect } from 'react';
import socketIO from 'socket.io-client'
import Socket from './components/Socket/Socket.jsx';
import Socket2 from './components/Socket2/Socket2.jsx';
import Socket3 from './components/Socket3/Socket3.jsx';
import client from './socket.js';


function App() {
  useEffect(() => {
    client.on('connect', () => {
      client.emit('connection')
  })

  client.on('disconnect', () => {
    console.log("Отключение")
  })
  return () => {
    client.disconnect();
  }
  }, [client])
  
  return (
    <div className="App">
      {/* <Socket client={client}/> */}
      <Socket2/>
      {/* <Socket3 client={client}/> */}
    </div>
  );
}

export default App;
