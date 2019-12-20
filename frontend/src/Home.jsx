import React from 'react';
import { Link } from "@reach/router";

import './css/home.css';
import Popup from "./components/Global/Popup.jsx";
import Chatt from "./components/Global/Chatt.jsx";


const Home = () => {


    return (
        <div className="container">
            <h1>Home page</h1>
            <div className="new-game">
                <Popup page="home" />
            </div>
            <nav>
                <Link to="/">Home </Link> 
                <Link to="dashboard">Dashboard </Link>
                <Link to="/chessboard">Chessboard</Link>
            </nav>
            <br />
            <div className="box"></div>
            <br />
            <br />
            <Chatt />
        </div>
    );
}
export default Home