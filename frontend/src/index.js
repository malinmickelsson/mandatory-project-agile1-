import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from './Home.jsx';

import ChessBoard from './components/Gameboard/ChessBoard';
import Lobby from './components/Lobby/Room';


const Index = ({ children }) => (
  <div>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
      <ChessBoard path="/chessboard" />
      <Lobby path="Lobby" />
      <NotFound default />
    </Router>
  </div>
);


const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <Link to="/">Home</Link>
    <br />
    <br />
  </div>
);

const NotFound = () => (
  <div>
    <h2>Error 404</h2>
    <span>Page do not exists</span>
  </div>
)


render(<Index />, document.getElementById("root"));
