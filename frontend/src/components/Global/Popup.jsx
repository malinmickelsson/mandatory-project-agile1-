import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { useFormState } from 'react-use-form-state';

import {
  Modal, ModalContent, ModalHeader, ModalBody, CloseButton,
  Section, ChattButton, ChattInput, SubtitleGame, Bodytext,
  Subtitle
} from './style';

const Popup = (props) => {
  const [name, setName] = useState("New Game");
  const [radio, setRadio] = useState("black");

  function closeModal() {
    props.setNewGame(false);
  }

  const handleOptionChange = e => {
    console.log(e.currentTarget.value);
    setRadio(e.currentTarget.value);
  }

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length > 0) { // validation
      const payload = {
        roomName: name,
        color: radio,
        clientId: localStorage.getItem('userid')
      }
      props.socket.emit('createRoom', payload);

    } else {
      console.log("Missing Data");
    }
  }

  useEffect(() => {
    props.socket.on('roomCreated', res => {
      if (res.ok) {
        navigate(`/game/${res.data.id}`)
      }
    });

    return () => {
			props.socket.off('roomCreated');
		}// eslint-disable-next-line
  }, []);

  return (
    <>
      <Modal>
        {props.page === 'newGame' ?
          <ModalContent>
            <ModalBody>

              <form onSubmit={handleSubmit}>
                <ModalHeader>
                  <SubtitleGame>Game name</SubtitleGame>
                  <CloseButton onClick={closeModal}>&times;</CloseButton>
                </ModalHeader>
                
                <Section>
                  <ChattInput type="text" name="gametime" value={name} onChange={handleNameChange} />
                </Section>
                
                <Section>
                  <Subtitle>Choose color : </Subtitle>
                  <Bodytext>black <input type="radio" value="black" onChange={handleOptionChange} checked={radio === "black"} /></Bodytext>
                  <Bodytext>white <input type="radio" value="white" onChange={handleOptionChange} checked={radio === "white"} /></Bodytext>
                </Section>
                
                <Section>
                  <ChattButton onClick={handleSubmit} type="submit">Creat Game</ChattButton>
                </Section>
              </form>

            </ModalBody>
          </ModalContent>
          : null}
      </Modal>

      {props.page === 'home' ?
        <div className='popup-home-container'></div>
        :null
      }
    </>
  );
}

export default Popup;