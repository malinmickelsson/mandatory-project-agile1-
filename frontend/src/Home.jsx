import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import Popup from './components/Global/Popup.jsx';
import MatchesList from './components/Home/ActiveGames';

import {
	Title,
	Subtitle,
	Nav,
	Box,
	Button,
	NewGame,
	GlobalStyle
} from './components/Global/style';

const Home = (props) => {
	const [newGame, setNewGame] = useState(false);
	const [username, setUsername] = useState('');
	const { socket } = props;

	useEffect(() => {
		setUsername(localStorage.getItem('username'));

	// eslint-disable-next-line
	}, [])

	function popupNewGame() {
		setNewGame(true);
	}

	function handleChange(e) {
		setUsername(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		socket.emit('setName', username)
	}

	return (
		<ThemeProvider theme={{ fontFamily: 'Merriweather, serif' }}>
			<React.Fragment>
				<Nav>
					<Box>
						<Link to='/'><Title>Chess</Title></Link>
						<form onSubmit={handleSubmit}>
							<input value={username} onChange={handleChange} type='text' />
							<button type='submit'>Submit</button>
						</form>
					</Box>
				</Nav>

				<Subtitle>Matcher</Subtitle>
				<Box>
					<NewGame>
					</NewGame>
					<Button onClick={popupNewGame}>Ny Match</Button>
					{newGame ?
						<Popup page='newGame' setNewGame={setNewGame} socket={socket} />
						: null}
				</Box>
				<Box>
					<MatchesList socket={socket} />
				</Box>
				<GlobalStyle whiteColor />
			</React.Fragment>
		</ThemeProvider>
	);
}

export default Home;
