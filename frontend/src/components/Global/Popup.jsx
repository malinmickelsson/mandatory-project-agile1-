import React, { useEffect } from 'react'; //useState,
// import Home from "../../Home.jsx";
import { navigate } from "@reach/router";
import { useFormState } from 'react-use-form-state';

import {
  Modal, ModalContent, ModalHeader, ModalBody, CloseButton,
  Section, ChattButton, ChattInput, SubtitleGame, Bodytext,
  Subtitle
} from './style';

const Popup = (props) => {

  // const [modalCancel, setModalCancel] = useState(false);
  const [formState, { text, radio }] = useFormState();

  function closeModal() {
    // setModalCancel(true);
    props.setNewGame(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked");
    console.log(formState.values);

    let fs = formState.values;
    if (fs.color.length && fs.roomName.length && fs.time.length) { // validation
      const payload = {
        ...formState.values,
        clientId: localStorage.getItem("userid")
      }
      props.socket.emit("createRoom", payload);
      console.log("Sent" + formState.values);

    } else {
      alert("Error: missing data");
    }

  }

  useEffect(() => {
    props.socket.on("roomCreated", res => {
      if (res.ok) {
        navigate(`/game/${res.data.id}`)
      }
    });
  }, []);

  return (
    <>
      <Modal>
        {props.page === "newGame" ?
          <ModalContent>
            <ModalBody>

              <form onSubmit={handleSubmit}>
                <ModalHeader>
                  <SubtitleGame>Game name</SubtitleGame>
                  <CloseButton onClick={closeModal}>&times;</CloseButton>
                </ModalHeader>
                <Section>
                  <ChattInput type="text" name="gametime" {...text("roomName")} />
                </Section>
                <Section>
                  <Subtitle>Choose color : </Subtitle>
                  <Bodytext>black <input {...radio('color', 'black')} /></Bodytext>
                  <Bodytext>white <input {...radio('color', 'white')} /></Bodytext>
                </Section>
                <Section>
                  <ChattButton type="submit">Creat Game</ChattButton>
                </Section>
              </form>

            </ModalBody>
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

export default Popup;