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

  // const socket = io("https://f12a3fd0.eu.ngrok.io");

  // socket.on("connect", () => {
  //     console.log("connected");
  // });

  // useEffect(() => {
  //     let userId = "temp"
  //     socket.emit("userId", userId);

  //     socket.on("userInfo", (res) => {
  //         console.log(res.data.name);
  //         setResult(res.data.name)
  //     })
  // }, []);

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
  }

  // console.log(username);
  // console.log(result);

  console.log(result);

  return (
    <ThemeProvider theme={{ fontFamily: "Merriweather, serif" }}>
      {result !== "new player" ? (
        <React.Fragment>
          <Nav>
            <Box>
              <Link to="/">
                <Title>lichess Home</Title>
              </Link>
              <Links>
                <Link to="/chessboard">Chessboard</Link>
              </Links>
            </Box>
          </Nav>

          <Subtitle>Matcher</Subtitle>
          <Box>
            <NewGame>{/* <Popup page="home" /> */}</NewGame>

            <Button onClick={popupNewGame}>Ny Match</Button>
            {newGame ? <Popup page="newGame" setNewGame={setNewGame} /> : null}
          </Box>
          <Box>
            <MatchesList />
          </Box>
          <GlobalStyle whiteColor />
        </React.Fragment>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username..."
            onChange={handleChange}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </ThemeProvider>
  );
};

export default Home;
