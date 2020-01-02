import React from "react";
//import { Link } from "@reach/router";


import {
  MainChatt, ChattBox, ChattText, ChattInput,
  ChattMe, ChattUser, ChattButton, Span, InputDiv
} from '../../style';


const Chatt = () => {

  return (
    <MainChatt>
      <ChattBox>

        <ChattText>
          <ChattUser>
            <Span>User : </Span>
            <Span> Här kommer texten att vara</Span>
          </ChattUser>

          <ChattMe>
            <Span> Här kommer din text</Span>
          </ChattMe>

          <ChattUser>
            <Span>User : </Span>
            <Span> Lorem text som ska vara här senare</Span>
          </ChattUser>
        </ChattText>

        <InputDiv>
          <ChattInput type="text" placeholder=" Write a message .."></ChattInput>
          <ChattButton>Send</ChattButton>
        </InputDiv>

      </ChattBox>
    </MainChatt>
  );

};

export default Chatt;