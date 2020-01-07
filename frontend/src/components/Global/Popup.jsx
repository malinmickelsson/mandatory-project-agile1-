import React, { useState } from 'react';
// import Home from "../../Home.jsx";
//import { Link } from "@reach/router";

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, Section
} from './style';

const Popup = (props) => {

  const [modal, setModal] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);
  const [tempInfo, setTempInfo] = useState({ gamename: '' });

  function closeModal() {
    setModalCancel(true);
    props.setNewGame(false);
  }
  /*
  const [username, setUsername] = useState({ username: "" });

    function handleChange (e) {
        setUsername({username: e.target.value});
      }
  */

  function handleSubmit(event) {
    event.preventDefault();
    console.log("test");
    
  }

  function handleChange(event) {
    setTempInfo(event.target.value);
  }

  return (
    <>
      <Modal>
        {props.page === "temp" ?
          <ModalContent>
            <ModalHeader>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
            <form onSubmit={handleSubmit}>
                <Section>
                  <span>Choose color : </span>
                  <br />
                  <span>black</span><input type="radio" />
                  <span>white</span><input type="radio" />
                </Section>

                <Section>
                  <span>Game name</span>
                  <br />
                  <input type="text" value={setTempInfo} />
                </Section>

                <Section>
                  <span>Time</span>
                  <br />
                  <input type="number" placeholder="min..." />
                </Section>

                <Section>
                  <button type="submit">Creat Game</button>
                </Section>
                </form>
            </ModalBody>

              <ModalFooter>
                <span>Footer</span>
              </ModalFooter>
            
          </ModalContent>
          : null}

      </Modal>

      {props.page === "home" ?
        <div className="popup-home-container">

        </div>
        :
        null
      }
    </>
  );
}
export default Popup
