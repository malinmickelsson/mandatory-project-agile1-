// Chessboard.jsx is a chessboard for React. Inspired by chessboard.js
import React from 'react';
import { Link } from "@reach/router";
import Chessboard from "chessboardjsx";
import GameStatusHub from "./GameStatusHub";
//import { roughSquare } from "./Rough";
import { ThemeProvider } from 'styled-components';

//** Kommentera gärna, kram */
import { Boardscontainer, Body, TitleBoard, Txt, YourTur, OppTur, TurnBox } from './styles';
import { Nav, Box, Title, GlobalStyle } from '../Global/style';

function SchackBoard() {
    return (
        <Body>
            <TitleBoard>Chessboard</TitleBoard>
            <TurnBox>
                <YourTur>YourName </YourTur><Txt> : </Txt><OppTur> OpponentName</OppTur>
            </TurnBox>
            {/* <Chessboard position='start' /> */}
            <Chessboard
                id="boardscontainer"
                orientation="black"
                width={420}
                //roughSquare={roughSquare}
                position="start"
                boardStyle={{
                    borderRadius: "5px",
                    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
                }}
                dropOffBoard="trash"
                // pieces
                sparePieces={false}
                lightSquareStyle={{ backgroundColor: "#d8ffcc" }}
                darkSquareStyle={{ backgroundColor: "#1f8500" }}
            />
        </Body>
    );
}

function GameBoard() {
    return (
        <ThemeProvider theme={{ fontFamily: 'Merriweather, serif' }}>
            <React.Fragment>
                <Nav>
                    <Box>
                        <Link to="/"><Title>lichess Home</Title></Link>
                    </Box>
                </Nav>
                <Boardscontainer>
                    <SchackBoard />
                    <GameStatusHub />
                </Boardscontainer>
                <GlobalStyle whiteColor />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default GameBoard;

