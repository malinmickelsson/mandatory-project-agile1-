import React, { useEffect } from 'react'; //useState,
// import Home from "../../Home.jsx";
import { Link, navigate } from "@reach/router";
import { useFormState } from 'react-use-form-state';

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, Section
} from './style';

const Popup = (props) => {

  // const [modalCancel, setModalCancel] = useState(false);
  const [formState, { text, number, radio }] = useFormState();


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
                  <input type="text" name="gametime" {...text("roomName")} />
                </Section>

                <Section>
                  <span>Time</span>
                  <br />
                  <input type="number" placeholder="min..." name="time" {...number("time")} />
                </Section>

                <Section>
                  <button type="submit">Creat Game</button>
                  <Link to="RoomList">RoomList </Link>
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