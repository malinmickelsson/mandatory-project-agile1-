import React from "react";
//import { Link } from "@reach/router";
import "../../css/home.css";
import { Button, mainChattContainer, chattContainer } from "./style.js";

const Chatt = () => {
  return (
    <mainChattContainer>
      <chattContainer>
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
        <chattInputContainer>
          <input type="text" />
          <Button>Send</Button>
        </chattInputContainer>
      </chattContainer>
    </mainChattContainer>
  );
};
export default Chatt;
