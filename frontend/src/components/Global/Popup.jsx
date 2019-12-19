import React from 'react';
import { Link } from "@reach/router";
// import './css/home.css';

const Popup = (props) => {



    return (
        <div className="container">

            {props.page === "home" ?
                <span>page is home</span>
                :
                null
            }

        </div>
    );
}
export default Popup
