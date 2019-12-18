import React from 'react';
import { Link } from "@reach/router";
import './css/home.css';

const Home = () => {


    return (
        <div className="container">
            <h1>Home page</h1>
            <nav>
                <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
            </nav>
            <br />
            <div className="box"></div>
        </div>
    );
}
export default Home