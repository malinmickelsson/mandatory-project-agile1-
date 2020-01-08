import React, { Component } from "react";
//import { Link } from "@reach/router";
import { ChattText, ChattInput, ChattButton, TurnBox } from "./style";  // ChattMe, ChattUser,
import io from 'socket.io-client'


//=============== chatten ===============//
export default class Chatt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      error: ""
    };
  }


//=============== socket ===============//
function () {
  let socket = io();
  ('form').submit(function(e) {
    e.preventDefault();
    socket.emit('chat message', ('#m').val());
    ('#m').val('');
    return false;
  })
}

  
  render() { // eslint-disable-next-line 
    const { message, error } = this.state;


    return (
    <form onSubmit={this.handleSubmit}>

      <ChattText> hej hej! *vinkar* </ChattText>

      <TurnBox>
        <ChattInput  
          ref={input => {
              this.textInput = input;
            }}
            type="text"
            id="message"
            value= 'message' //{message}
            onChange={this.handleChange}
            placeholder={"..."}>
        </ChattInput>

        <ChattButton type="submit" >Send</ChattButton>
      </TurnBox>
    </form>
  );
};
}

      // eslint-disable-next-line
      {/* <ChattMe> Min username :</ChattMe> 
        <ChattText> här kommer meddelandet </ChattText>
      <ChattUser> Min username :</ChattUser> 
        <ChattText> här kommer meddelandet </ChattText> */}