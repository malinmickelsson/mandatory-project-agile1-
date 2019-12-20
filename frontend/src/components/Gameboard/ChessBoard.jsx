// Chessboard.jsx is a chessboard for React. Inspired by chessboard.js
import React from 'react';
import Chessboard from "chessboardjsx";
import { roughSquare } from "./Rough";


import { Board } from './styles';


function SchackBoard() {
    return (
        <Board>
            <Chessboard
                id="standard"
                orientation="black"
                width={320}
                roughSquare={roughSquare}
                position="start"
                boardStyle={{
                    borderRadius: "5px",
                    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
                }}
                dropOffBoard="trash"
                // pieces
                sparePieces={false}
                lightSquareStyle={{ backgroundColor: "AliceBlue" }}
                darkSquareStyle={{ backgroundColor: "CornFlowerBlue" }}
            />
        </Board>
    );
}



export default SchackBoard;