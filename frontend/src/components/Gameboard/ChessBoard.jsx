// Chessboard.jsx is a chessboard for React. Inspired by chessboard.js
import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import Chessboard from 'chessboardjsx';
import GameStatusHub from './GameStatusHub';
import { ThemeProvider } from 'styled-components';
import Chess from 'chess.js';

import {
  Boardscontainer, Body, TitleBoard, Txt, YourTur, OppTur, TurnBox, Txtcolor, TxtTurn
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
          boxShadow: 'inset 0 0 3px 5px  #253529'
        }
      }
    }
    updateColorSquare(highlight);
  };

  function checkOpponent() {
    if (props.room.opponent && props.room.opponent.name) {
      return props.room.opponent && props.room.opponent.name;
    } else {
      return <span>väntar på motståndare...</span>;
    }
  }

  const isYourTurn = () => {
    const yourId = localStorage.getItem("userid");
    if (props.room.owner && props.room.opponent) {
      const opponent = props.room.opponent;
      const owner = props.room.owner;
      const yourColor = owner.id === yourId ? owner.color : opponent.color;
      const currentTurn = props.game.turn;

      return yourColor === currentTurn;
    }
  }

  const onMouseOutSquare = () => {
    updateColorSquare({})
  }

  return (
    <Body>
      <TitleBoard>Chessboard</TitleBoard>
      <TurnBox><Txtcolor>{props.status}</Txtcolor></TurnBox>
      <TurnBox>
        <YourTur>{props.room.owner && props.room.owner.name}</YourTur><Txt> : </Txt><OppTur>{checkOpponent()}</OppTur>
      </TurnBox>
      <Chessboard
        id='boardscontainer'
        orientation='black'
        width={420} // blaze it
        position={props.fen} //fen update piece position
        boardStyle={{
          borderRadius: '5px',
          boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
        }}
        draggable={
          isYourTurn()
        }
        dropOffBoard='trash'
        onMouseOverSquare={onMouseOverSquare}
        onMouseOutSquare={onMouseOutSquare}
        squareStyles={colorSquare}
        sparePieces={false}
        onDrop={props.onDrop}
        dropSquareStyle={{ boxShadow: 'inset 0 0 1px 4px blue' }}
        lightSquareStyle={{ backgroundColor: '#d8ffcc' }}
        darkSquareStyle={{ backgroundColor: '#1f8500' }}
      />
      <TurnBox>
        <TxtTurn>{props.colorTurn}`s turn!</TxtTurn>
      </TurnBox>
    </Body>
  );
}

function GameBoard(props) {
  const [fen, updateFen] = useState('start'); // str with info of all position
  const [dragHistory, updateDragHistory] = useState([]);
  const [colorTurn, updateColorTurn] = useState('White');
  const [status, updateStatus] = useState('');
  const [room, setRoom] = useState({});
  const [game, setGame] = useState({});

  const { socket, gameId } = props;

  useEffect(() => {
    socket.on("roomInfo", res => {
      if (!res.ok) { navigate("/") }; // Om backend inte hittar rummet, skicka till lobby
      console.log(res);

      const currentTurn = res.data.game.turn === "w" ? "White" : "Black";
      updateColorTurn(currentTurn);
      chess.load(res.data.game.fen);
      updateDragHistory(res.data.game.history);
      updateFen(res.data.game.fen);
      setGame(res.data.game);
      setRoom(res.data);
    })

    socket.on("gameInfo", res => {
      console.log(res);
      const currentTurn = res.data.turn === "w" ? "White" : "Black";
      updateColorTurn(currentTurn);
      chess.load(res.data.fen);
      updateDragHistory(res.data.history);
      updateFen(res.data.fen);
      setGame(res.data);
    })

    socket.emit("gameJoined", { roomId: gameId, clientId: localStorage.getItem("userid") });

    return () => {
      socket.emit("leaveRoom", { roomId: gameId });
      socket.off("gameInfo");
      socket.off("roomInfo");
    }
  }, [])

  //** Only Allow Legal Moves **// 
  const onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to a queen for example simplicity
    });

    updateStatus('');

    // illegal move
    if (move === null) {
      alert('Illegal move');
      return;
    }
    // who's turn is it?
    const opponent = game.turn === 'b' ? 'Black' : 'White';

    // checkmate?
    if (chess.in_checkmate() === true) {
      updateStatus('Game over, ' + opponent + ' is in checkmate.');
    }// check?
    else if (chess.in_check() === true) {
      updateStatus(opponent + ' is in check'); // owner måste också får chacken?!?!?
    }// draw?
    else if (chess.in_draw() === true) {
      updateStatus('Game over, drawn position');
    }

    updateFen(chess.fen());

    const movestr = move.color + move.piece + ' moved: ' + move.from + '-' + move.to;
    const newhis = [...dragHistory, movestr];

    const payload = {
      fen: chess.fen(),
      history: newhis,
      clientId: localStorage.getItem("userid"),
      roomId: gameId
    }
    socket.emit("gameTurnPlayed", payload)
  };

  if (room === {}) return "Loading";

  return (
    <ThemeProvider theme={{ fontFamily: 'Merriweather, serif' }}>
      <React.Fragment>
        <Nav>
          <Box>
            <Link to='/'><Title>Chess -back to Home</Title></Link>
          </Box>
        </Nav>
        <Boardscontainer >
          <SchackBoard fen={fen} game={game} colorTurn={colorTurn} onDrop={onDrop} status={status} room={room} />
          <GameStatusHub dragHistory={dragHistory} {...props} />
        </Boardscontainer>
        <GlobalStyle whiteColor />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default GameBoard;
