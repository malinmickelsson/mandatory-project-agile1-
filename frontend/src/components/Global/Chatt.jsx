import React from "react";
//import { Link } from "@reach/router";
import { ChattText, ChattInput, ChattButton, TurnBox } from "./style";  // ChattMe, ChattUser,
import io from 'socket.io-client'

//=============== socket ===============//
const chatFunction = () => {
  let socket = io();
  ('form').submit(function(e) {
    e.preventDefault();
    socket.emit('chat message', ('#m').val());
    ('#m').val('');
    return false;
  })
}

//=============== chatten ===============//
const Chatt = () => {
  return (
    <div>
      {/* <ChattMe> Min username :</ChattMe> 
        <ChattText> här kommer meddelandet </ChattText>
      <ChattUser> Min username :</ChattUser> 
        <ChattText> här kommer meddelandet </ChattText> */}

      <ChattText> { chatFunction } </ChattText> */}

      <TurnBox>
        <ChattInput type="text" placeholder=" Write a message .."></ChattInput>
        <ChattButton>Send</ChattButton>
      </TurnBox>
    </div>
  );
};

export default Chatt;

