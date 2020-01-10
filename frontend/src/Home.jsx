import React, { useState } from "react"; //, useEffect
import { Link } from "@reach/router";
import { ThemeProvider } from "styled-components";
//import io from 'socket.io-client';
import Popup from "./components/Global/Popup.jsx";
import MatchesList from "./components/Home/ActiveGames";

import {
  Title,
  Subtitle,
  Links,
  Nav,
  Box,
  Button,
  NewGame,
  GlobalStyle
} from "./components/Global/style";

const Home = () => {
  const [newGame, setNewGame] = useState(false);
  const [username, setUsername] = useState("");
  const [result, setResult] = useState("new player v");

    const [newGame, setNewGame] = useState(false);
    const [username, setUsername] = useState("");
    const [result, setResult] = useState("");
    const [login, setLogin] = useState(false);

    const socket = io("https://ba19aba7.eu.ngrok.io");

    socket.on("connect", () => {
        console.log("connected");
    });



    useEffect(() => {

        socket.on("userInfo", (res) => {
            console.log(res.data);
            localStorage.setItem('userid', res.data.id);
        });

        if (localStorage.getItem('userid')) {
            socket.emit("userId", localStorage.getItem('userid'));
            console.log("userid is allready in localstorage");
        } else {
            socket.emit("userId", "");
            console.log("Create new userid in localstorage");
        }

        setResult(localStorage.getItem('userid'));

        //  det jag får tbx från userid ska ligga i localstorage

    }, []);

  //     socket.on("userInfo", (res) => {
  //         console.log(res.data.name);
  //         setResult(res.data.name)
  //     })
  // }, []);

    // localStorage.removeItem('userid');

    // // let tempName = "malin";
    // socket.emit("setName", username);

  function popupNewGame() {
    setNewGame(true);
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username.length) {
      setResult(username);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (username.length) {
            // setResult(username)
            setLogin(true);
        }
    }


    console.log(result);
    console.log(localStorage.getItem('userid'));
    console.log(socket.on("get"));
    
    let vault = localStorage.getItem('userid');

    return (
        <ThemeProvider theme={{ fontFamily: 'Merriweather, serif' }}>
            {result !== "" ?
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
                            <Popup page="newGame" setNewGame={setNewGame} socket={socket} vault={vault} />
                            : null}
                    </Box>
                    <Box>
                        <MatchesList socket={socket} />
                    </Box>
                    <GlobalStyle whiteColor />
                </React.Fragment>
                :
                <form onSubmit={handleSubmit}>
                    <input placeholder="Username..." onChange={handleChange} type="text" />
                    <button type="submit">Submit</button>
                </form>
            }
        </ThemeProvider>
    );
}

export default Home;
