import React, { useState, useEffect } from "react"; 
import { Link } from "@reach/router";
import { ThemeProvider } from "styled-components";
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

const Home = (props) => {
  const [newGame, setNewGame] = useState(false);
  const [username, setUsername] = useState("");
  const [result, setResult] = useState("");
  const [login, setLogin] = useState(false);
	const { socket } = props;

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
    }, []);

  function popupNewGame() {
    setNewGame(true);
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username.length > 0) {
      setResult(username);
    }
	}


    console.log(result);
    console.log(localStorage.getItem('userid'));
    
    let vault = localStorage.getItem('userid');

    return (
        <ThemeProvider theme={{ fontFamily: 'Merriweather, serif' }}>
            {result !== "" ?
                <React.Fragment>
                    <Nav>
                        <Box>
                            <Link to="/"><Title>Chess home</Title></Link>
                        </Box>
                    </Nav>

                    <Subtitle>Matcher</Subtitle>
                    <Box>

                        <NewGame>
                        </NewGame>
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
