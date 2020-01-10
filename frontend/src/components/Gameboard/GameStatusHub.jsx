import React from 'react';
import Chatt from '../Global/Chatt'

import {
  StatusList, Wrapper, OppTime, OppTur, YourTime,
  YourTur, Txt, ChattInput, ChattButton, TurnBox, Ul, Li,
  DragHistory, MoveBox
} from './styles';


const GameStatusHub = (props) => {
  let history = props.dragHistory;

  return (
    <StatusList>
      <Wrapper>
        <Txt>Opponent Time</Txt>
        <OppTime>10:10</OppTime>
        <OppTur></OppTur>
      </Wrapper>

      <Wrapper>
        <Txt>Drag-View</Txt>
        <DragHistory>
          {history.map((drag, idx) => {
            return <MoveBox key={idx}>{drag}</MoveBox>
          })}
        </DragHistory>
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
