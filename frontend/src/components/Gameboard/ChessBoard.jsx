// Chessboard.jsx is a chessboard for React. Inspired by chessboard.js
import React from 'react';
import Chessboard from "chessboardjsx";
//import { roughSquare } from "./Rough";

//** Kommentera gärna, kram */

import { Boardscontainer, Title, Body } from './styles';


function SchackBoard() {
    return (
        <Body>
            <Title>Chessboard</Title>
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
        <>
            <Boardscontainer>
                <SchackBoard />
            </Boardscontainer>
        </>
    );
}

export default GameBoard;

