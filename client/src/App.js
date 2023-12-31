import './App.css';
import io from 'socket.io-client';
import { useState } from "react";

const socket = io.connect("http://localhost:3001");
function App() {
  const [username, setUsername] = useState("");
  const [root, setRoom] = useState("");

  const joinRoom = () => {
    if(username !== "" && root !== "") { // join a room
      socket.emit("join_room", )
    }
  };

  return <div className="App">
  <h3>Join A Room</h3>
  <input
   type="text"
   placeholder="Saajan..." 
   onChange={(event) => {
    setUsername(event.target.value);
   }} 
  />
  <input
   type="text"
   placeholder="Room ID..." 
   onChange={(event) => {
    setRoom(event.target.value);
   }} 
  />
  <button onClick={joinRoom}>Join A Room</button>
   </div>
};

export default App;
