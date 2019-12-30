import React from 'react';
import { Link } from "@reach/router";

import './css/home.css';
//import Popup from "./components/Global/Popup.jsx";
import Chatt from "./components/Global/Chatt.jsx";

import { Title, Subtitle, Links, Nav, Box, Button } from './components/Global/style';


const Home = () => {


    return (
        <div className="container">
            <Nav>
                <Box>
                    <Link to="/"><Title>lichess Home</Title></Link>
                    <Links><Link to="dashboard">Dashboard </Link></Links>
                    <Links><Link to="/chessboard">Chessboard</Link></Links>
                </Box>
            </Nav>

            <Subtitle>Matcher</Subtitle>
            <Box>
               
                <div className="new-game">
                    {/* <Popup page="home" /> */}
                </div>

                <Chatt />
                <Button>Ny Match</Button>
            </Box>
        </div>
    );
}
export default Home