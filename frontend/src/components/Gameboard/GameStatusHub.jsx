import React from 'react'
import Chatt from '../Global/Chatt'

import { StatusList, Wrapper, OppTime, OppTur, YourTime, YourTur, Txt } from './styles'; // ChattInput, ChattButton, TurnBox, Ul, Li

const GameStatusHub = () => {

  return (
    <StatusList>
      <Wrapper>
        <Txt>Opponent Time</Txt>
        <OppTime>10:10</OppTime>
        <OppTur></OppTur>
      </Wrapper>

      <Wrapper>
        <Txt>Moves-View</Txt>
      </Wrapper>

      <Wrapper>
        <Txt>Your Time</Txt>
        <YourTime>10:10</YourTime>
        <YourTur>Your Turn</YourTur>
      </Wrapper>

      <Wrapper>
        <Chatt />
      </Wrapper>
  
    </StatusList>
  )
}

export default GameStatusHub;
