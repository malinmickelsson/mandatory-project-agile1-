import React, { useState } from 'react';
// import Home from "../../Home.jsx";
import { Link } from "@reach/router";
import { useFormState } from 'react-use-form-state';

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, Section
} from './style';

const Popup = (props) => {

  // const [modal, setModal] = useState(false);
  // const [modalCancel, setModalCancel] = useState(false);
  const [formState, { text, number, radio }] = useFormState();

  function closeModal() {
    // setModalCancel(true);
    props.setNewGame(false);
  }
  /*
  const [username, setUsername] = useState({ username: "" });

    function handleChange (e) {
        setUsername({username: e.target.value});
      }
  */

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked");
  }


  console.log(formState.values);

  
  return (
    <>
      <Modal>
        {props.page === "newGame" ?
          <ModalContent>
            <ModalHeader>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
            <form onSubmit={handleSubmit}>
                <Section>
                  <span>Choose color : </span>
                  <br />
                  <span>black</span><input {...radio('color', 'black')} />
                  <span>white</span><input {...radio('color', 'white')} />
                </Section>

                <Section>
                  <span>Game name</span>
                  <br />
                  <input type="text" name="gametime" {...text("gamename")} />
                </Section>

                <Section>
                  <span>Time</span>
                  <br />
                  <input type="number" placeholder="min..." name="time" {...number("time")} />
                </Section>

                <Section>
                  <button type="submit">Creat Game</button>
                  <Link to="Lobby">Lobby </Link>
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
