import React, {useState} from 'react';
import { Link } from "@reach/router";

import './css/home.css';
import Popup from "./components/Global/Popup.jsx";
import Chatt from "./components/Global/Chatt.jsx";

import { Container, NewGame, Body } from './style';

const Home = () => {

    const [newGame, setNewGame] = useState(false);

    function popupNewGame () {
        setNewGame(true);
    }

    return (
        <Container>
            <h1>Home page</h1>
            <NewGame>
                {/* <Popup page="home" /> */}
                <button onClick={popupNewGame} > New Game</button>
            </NewGame>
            <nav>
                <Link to="/">Home </Link> 
                <Link to="dashboard">Dashboard </Link>
                <Link to="/chessboard">Chessboard</Link>
            </nav>
            <br />
            {newGame ?
            <Popup page="temp" setNewGame={setNewGame} />
            : null}
        </Container>
    );
}
export default Home