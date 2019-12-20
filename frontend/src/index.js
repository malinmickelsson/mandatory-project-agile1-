import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from './Home.jsx';
import DefaultBoard from "./components/Gameboard/ChessBoard";

const Index = ({ children }) => (
  <div>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
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
    <DefaultBoard />
  </div>
);

const NotFound = () => (
  <div>
    <h2>Error 404</h2>
    <span>Page do not exists</span>
  </div>
)


render(<Index />, document.getElementById("root"));
