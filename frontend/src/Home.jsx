import React from "react";
import { Link } from "@reach/router";
import { ThemeProvider } from "styled-components";

//import Popup from "./components/Global/Popup.jsx";
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
  return (
    <ThemeProvider theme={{ fontFamily: "Merriweather, serif" }}>
      <React.Fragment>
        <Nav>
          <Box>
            <Link to="/">
              <Title>lichess Home</Title>
            </Link>
            <Links>
              <Link to="dashboard">Dashboard </Link>
            </Links>
            <Links>
              <Link to="/chessboard">Chessboard</Link>
            </Links>
          </Box>
        </Nav>

        <Subtitle>Matcher</Subtitle>
        <Box>
          <NewGame>{/* <Popup page="home" /> */}</NewGame>

          
          <Button>Ny Match</Button>
        </Box>
        <Box>
          <MatchesList />
        </Box>
        <GlobalStyle whiteColor />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Home;
