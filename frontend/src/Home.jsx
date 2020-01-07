import React, { useState } from 'react';
import { Link } from "@reach/router";
import { ThemeProvider } from 'styled-components';
import io from 'socket.io-client';

import Popup from "./components/Global/Popup.jsx";
import Chatt from "./components/Global/Chatt.jsx";
import MatchesList from "./components/Home/ActiveGames";

import {
    Title, Subtitle, Links, Nav, Box, Button, NewGame, GlobalStyle
} from './components/Global/style';

const Home = () => {

    const [newGame, setNewGame] = useState(false);
    const [username, setUsername] = useState("ernie");
    // const [result, setResult] = useState();



    const socket = io("https://c8217ef2.eu.ngrok.io");

    socket.on("connect", () => {
        console.log("connected");
    });

    let userId = "temp"
    socket.emit("userId", userId);

    // let tempName = "malin";
    socket.emit("setName", username);

    socket.on("userInfo", (res) => {
        console.log(res.data.name);
        // setResult(res.data)
    })





    function popupNewGame() {
        setNewGame(true);
    }

    function handleChange(e) {
        let user = e.target.value;
        console.log(user);
        if (user.length) {
            setUsername(user)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    console.log(username);
    // console.log(result.data);
    

    return (
        <ThemeProvider theme={{ fontFamily: 'Merriweather, serif' }}>
            {!username.length ?
                <React.Fragment>
                    <Nav>
                        <Box>
                            <Link to="/"><Title>lichess Home</Title></Link>
                            <Links><Link to="dashboard">Dashboard </Link></Links>
                            <Links><Link to="/chessboard">Chessboard</Link></Links>
                        </Box>
                    </Nav>

                    <Subtitle>Matcher</Subtitle>
                    <Box>

                        <NewGame>
                            {/* <Popup page="home" /> */}
                        </NewGame>

                        <Chatt />
                        <Button onClick={popupNewGame}>Ny Match</Button>
                        {newGame ?
                            <Popup page="temp" setNewGame={setNewGame} />
                            : null}
                    </Box>
                    <Box>
                        <MatchesList />
                    </Box>
                    <GlobalStyle whiteColor />
                </React.Fragment>
                :
                <form onSubmit={handleSubmit}>
                    <input placeholder="Username..." onSubmit={handleChange} type="text" />
                    <button type="submit">Submit</button>
                </form>
            }
        </ThemeProvider>
    );
}

export default Home;