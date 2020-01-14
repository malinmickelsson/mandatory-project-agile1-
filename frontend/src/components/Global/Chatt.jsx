import React, { useState } from 'react';
import { ChattText, ChattInput, ChattButton, TurnBox } from './style';
import { useEffect } from 'react';

const Chatt = (props) => {
  const { socket, gameId } = props;

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('messages', data => {
      setMessages(data.data);
      console.log(data);
    });

    socket.on('newMessage', data => {
      const newMessages = [...messages, data.data];
      console.log(messages);
      setMessages(newMessages);
      console.log(data);
    });
    
    socket.emit("getMessages", { roomId: gameId });
    return () => {
      socket.off('messages');
      socket.off('newMessage')
    }
    
    // eslint-disable-next-line
  }, []);

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSendMessage = e => {
    socket.emit('sendMessage', {
      msg: message,
      roomId: gameId,
      clientId: localStorage.getItem("userid")
    });
    console.log('new message: ', message);
    setMessage('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        {messages.map(message => {
          return <ChattText> {message.message}</ChattText>;
        })}
      </div>
      <TurnBox>
        <ChattInput
          type='text'
          id='message'
          value={message}
          placeholder={'skriv i chatten'}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></ChattInput>

        <ChattButton type='submit' onClick={handleSendMessage}>
          Send
        </ChattButton>
      </TurnBox>
    </form>
  );
};

export default Chatt;
