import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import io from 'socket.io-client';
import Home from './Home.jsx';
import ChessBoard from './components/Gameboard/ChessBoard';


const Index = ({ children }) => {
  const socket = io('http://localhost:8000');

	useEffect(() => {
		socket.on('userInfo', (res) => {
			console.log(res.data);
			localStorage.setItem('userid', res.data.id);
			localStorage.setItem('username', res.data.name);
		});

		if (localStorage.getItem('userid')) {
			socket.emit('userId', localStorage.getItem('userid'));
			console.log('user is already in localstorage');
		} else {
			socket.emit('userId', '');
			console.log('Create new user in localstorage');
		}

		return () => {
			socket.off('userid');
		}
		// eslint-disable-next-line
	}, []);

  return (
  <div>
    <Router>
      <Home socket={socket} path='/' />
      <ChessBoard socket={socket} path='/game/:gameId' />
      <NotFound default />
    </Router>
  </div>
  )
};

const NotFound = () => (
  <div>
    <h2>Error 404</h2>
    <span>Page do not exists</span>
  </div>
)

render(<Index />, document.getElementById('root'));
