import React from "react";
//import { Link } from "@reach/router";
import "../../css/home.css";

const Chatt = () => {
  return (
    <div className="main-chatt-container">
      <div className="chatt-container">
        <div className="chatt-text-container">
          <div className="chatt-user">
            <span>User : </span>
            <span>Här kommer texten att vara</span>
          </div>

          <div className="chatt-me">
            <span>Här kommer din text</span>
          </div>

          <div className="chatt-user">
            <span>User : </span>
            <span>Lorem text som ska vara här senare</span>
          </div>
        </div>
        <br />
        <div className="chatt-input-container">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Chatt;
