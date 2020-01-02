import React, { useState } from 'react';
import Home from "../../Home.jsx";
//import { Link } from "@reach/router";
import './popup.css';

const Popup = (props) => {

  const [modal, setModal] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);

  function closeModal() {
    setModalCancel(true);
    props.setNewGame(false);
  }

  return (
    <div className="container">

      <div className="modal">
        {props.page === "temp" ?
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={closeModal} className="close-btn">&times;</button>
            </div>
            <div className="modal-body">
              <br />  
              <section>
                <span>Choose color : </span>
              </section>
    
              <section>
                <span>black</span><input className="color-black" type="radio" />
                <span>white</span><input className="color-white" type="radio" />
              </section>

              <br />

              <section>
                <span>Game name</span>
              </section>
              <section>
                <input type="text" />
              </section>

              <br />

              <section>
                <span>Time</span>
              </section>
              <section>
                <input type="number" placeholder="min..." />
              </section>
              
              <br />

            <section>
              <button>Creat Game</button>
            </section>
            <br />

            </div>
            <br />
            <div className="modal-footer">
              <span>this will be the footer</span>
            </div>

          </div>
          : null}

      </div>

      {props.page === "home" ?
        <div className="popup-home-container">

        </div>
        :
        null
      }

    </div>
  );
}
export default Popup
