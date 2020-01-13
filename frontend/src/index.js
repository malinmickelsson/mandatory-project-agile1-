import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import io from 'socket.io-client';
import Home from './Home.jsx';
import ChessBoard from './components/Gameboard/ChessBoard';
import RoomList from './components/Lobby/RoomList';


const Index = ({ children }) => {
  const socket = io("http://localhost:8000");
  return (
  <div>
    <Router>
      <Home socket={socket} path="/" />
      <ChessBoard socket={socket} path="/game/:gameId" />
      <RoomList socket={socket} path="RoomList" />
      <NotFound default />
    </Router>
  </div>
  )
};


const NotFound = () => (
  <div>
    <h2>Error 404</h2>
    <span>Page do not exists</span>
  </div>
)


render(<Index />, document.getElementById("root"));
