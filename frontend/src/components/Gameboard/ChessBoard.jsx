// Chessboard.jsx is a chessboard for React. Inspired by chessboard.js
import React, { useState } from 'react';
import { Link } from "@reach/router";
import Chessboard from "chessboardjsx";
import GameStatusHub from "./GameStatusHub";
import { ThemeProvider } from 'styled-components';
import Chess from 'chess.js';

import {
    Boardscontainer, Body, TitleBoard, Txt, YourTur,
    OppTur, TurnBox, Txtcolor, TxtTurn
} from './styles';
import { Nav, Box, Title, GlobalStyle } from '../Global/style';


// board defaults to the starting position
const chess = new Chess();

function SchackBoard(props) {
    const [colorSquare, updateColorSquare] = useState({}); // currently clicked square

    //** When the mouse is over a square **// 
    const onMouseOverSquare = (square) => {
        // get list of possible moves for this square
        let moves = chess.moves({
            square: square,
            verbose: true
        });

        // exit if there are no moves available for this square
        if (moves.length === 0) return;

        let squaresToHighlight = [];
        for (let i = 0; i < moves.length; i++) {
            squaresToHighlight.push(moves[i].to);
        }

        let highlight = {};
        for (let i = 0; i < squaresToHighlight.length; i++) {
            highlight = {
                ...highlight, [squaresToHighlight[i]]: {
                    boxShadow: "inset 0 0 3px 5px  #253529"
                }
            }
        }
        updateColorSquare(highlight);
    };

    const onMouseOutSquare = () => {
        updateColorSquare({})
    }

    return (
        <Body>
            <TitleBoard>Chessboard</TitleBoard>
            <TurnBox><Txtcolor>{props.status}</Txtcolor></TurnBox>
            <TurnBox>
                <YourTur>YourName</YourTur><Txt> : </Txt><OppTur> OpponentName</OppTur>
            </TurnBox>
            <Chessboard
                id="boardscontainer"
                orientation="black"
                width={420}
                position={props.fen} //fen update piece position
                boardStyle={{
                    borderRadius: "5px",
                    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
                }}
                dropOffBoard="trash"
                onMouseOverSquare={onMouseOverSquare}
                onMouseOutSquare={onMouseOutSquare}
                squareStyles={colorSquare}
                sparePieces={false}
                onDrop={props.onDrop}
                dropSquareStyle={{ boxShadow: 'inset 0 0 1px 4px blue' }}
                lightSquareStyle={{ backgroundColor: "#d8ffcc" }}
                darkSquareStyle={{ backgroundColor: "#1f8500" }}
            />
            <TurnBox>
                <TxtTurn>{props.colorTurn}`s turn!</TxtTurn>
            </TurnBox>
        </Body>
    );
}

function GameBoard() {
    const [fen, updateFen] = useState('start'); // str with info of all position
    const [dragHistory, updateDragHistory] = useState([]);
    const [colorTurn, updateColorTurn] = useState('White');
    const [status, updateStatus] = useState('');

    //** Only Allow Legal Moves **// 
    const onDrop = ({ sourceSquare, targetSquare }) => {
        // see if the move is legal
        let move = chess.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q" // always promote to a queen for example simplicity
        });
        //console.log(move);
        updateStatus('');

        // illegal move
        if (move === null) {
            alert('Illegal move');
            return;
        }
        // who's turn is it?
        let color = chess.turn();
        const opponent = chess.turn() === "b" ? "Black" : "White";
        if (color === 'b') {
            updateColorTurn('Black');
        } else if (color === 'w') {
            updateColorTurn('White');
        }
        // checkmate?
        if (chess.in_checkmate() === true) {
            updateStatus('Game over, ' + opponent + ' is in checkmate.');
        }// check?
        else if (chess.in_check() === true) {
            updateStatus(opponent + ' is in check');
        }// draw?
        else if (chess.in_draw() === true) {
            updateStatus('Game over, drawn position');
        }

        updateFen(chess.fen());
        const movestr = move.color + move.piece + ' moved: ' + move.from + '-' + move.to;
        const newhis = [...dragHistory, movestr];
        updateDragHistory(newhis);
    };

    return (
        <ThemeProvider theme={{ fontFamily: 'Merriweather, serif' }}>
            <React.Fragment>
                <Nav>
                    <Box>
                        <Link to="/"><Title>lichess Home</Title></Link>
                    </Box>
                </Nav>
                <Boardscontainer >
                    <SchackBoard fen={fen} colorTurn={colorTurn} onDrop={onDrop} status={status} />
                    <GameStatusHub dragHistory={dragHistory} />
                </Boardscontainer>
                <GlobalStyle whiteColor />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default GameBoard;

