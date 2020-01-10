import React, { useState } from "react";
import { ChattText, ChattInput, ChattButton, TurnBox } from "./style";
import io from "socket.io-client";
import { useEffect } from "react";

let socket = io("https://ba19aba7.eu.ngrok.io");

const Chatt = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
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
  }, []);

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

  const handleKeyDown = e => {
    if (e.key === "Enter") {
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
          type="text"
          id="message"
          value={message}
          placeholder={"skriv i chatten"}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></ChattInput>

        <ChattButton type="submit" onClick={handleSendMessage}>
          Send
        </ChattButton>
      </TurnBox>
    </form>
  );
};

export default Chatt;
