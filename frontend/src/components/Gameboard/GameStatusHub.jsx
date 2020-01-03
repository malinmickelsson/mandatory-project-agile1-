import React from 'react'

import {
  StatusList, Wrapper, OppTime, OppTur, YourTime,
  YourTur, Txt, ChattInput, ChattButton, TurnBox, Ul, Li
} from './styles';

const GameStatusHub = () => {

  return (
    <StatusList>
      <Wrapper>
        <Txt>Opponent Time</Txt>
        <OppTime>10:10</OppTime>
        <OppTur></OppTur>
      </Wrapper>
      <Wrapper>
        <Txt>Drag-View</Txt>
      </Wrapper>
      <Wrapper>
        <Txt>Your Time</Txt>
        <YourTime>10:10</YourTime>
        <YourTur>Your Turn</YourTur>
      </Wrapper>
      <Txt>Chat-View</Txt>
      <Ul>
        <Li>Your text..</Li>
        <Li>Opponent text..</Li>
      </Ul>
      <TurnBox>
        <ChattInput type="text" placeholder=" Write a message .."></ChattInput>
        <ChattButton>Send</ChattButton>
      </TurnBox>
    </StatusList>
  )
}

export default GameStatusHub;
