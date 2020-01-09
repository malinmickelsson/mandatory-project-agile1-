import React, { useState } from "react";
//import { Link } from '@reach/router';
import { ChattText, ChattInput, ChattButton, TurnBox } from "./style"; // ChattMe, ChattUser,
import io from "socket.io-client";
import { useEffect } from "react";

let socket = io("https://b2690030.eu.ngrok.io");

const Chatt = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // messages = [
  //   {
  //     message: 'hej hej',
  //     sender: 'Oscar'
  //   }
  // ]

  useEffect( ()=> {
    socket.on("messages", data => {
      setMessages(data.data);
      console.log(data);
    });
  
    socket.on("newMessage", data => {
      const newMessages = [...messages, data.data];
      console.log(messages);
      setMessages(newMessages);
      console.log(data);
    });
    // eslint-disable-next-line
  }, [])



  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  // const handleNewMessage = (message) => {
  //   messages.push(message);
  // }

  const handleSendMessage = e => {
    socket.emit("sendMessage", message);

    console.log(message);
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div> 
        {messages.map(message => {return <ChattText> {message.message}</ChattText> })}
      </div>
      <TurnBox>
        <ChattInput
          type="text"
          id="message"
          value={message}
          placeholder={"skriv i chatten"}
          onChange={handleChange}
        ></ChattInput>

        <ChattButton type="submit" onClick={handleSendMessage}>
          Send
        </ChattButton>
      </TurnBox>
    </form>
  );
};

export default Chatt;
