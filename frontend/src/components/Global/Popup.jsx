import React, { useState } from 'react';
// import Home from "../../Home.jsx";
//import { Link } from "@reach/router";

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, Section
} from './style';

const Popup = (props) => {

  const [modal, setModal] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);

  function closeModal() {
    setModalCancel(true);
    props.setNewGame(false);
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

              <Section>
                <span>Choose color : </span>
                <br />
                <span>black</span><input className="color-black" type="radio" />
                <span>white</span><input className="color-white" type="radio" />
              </Section>

              <Section>
                <span>Game name</span>
                <br />
                <input type="text" />
              </Section>

              <Section>
                <span>Time</span>
                <br />
                <input type="number" placeholder="min..." />
              </Section>

            </ModalBody>

            <ModalFooter>
              <section>
                <button>Creat Game</button>
              </section>
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
