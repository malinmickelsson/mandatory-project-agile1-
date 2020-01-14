import React from 'react';
import Chatt from '../Global/Chatt'

import {
  StatusList, Wrapper, Txt, DragHistory, MoveBox //OppTur, YourTur,
} from './styles';


const GameStatusHub = (props) => {
  let history = props.dragHistory;

  return (
    <StatusList>

      <Wrapper>
        <Txt>Drag-View</Txt>
        <DragHistory>
          {history.map((drag, idx) => {
            return <MoveBox key={idx}>{drag}</MoveBox>
          })}
        </DragHistory>
      </Wrapper>

      <Wrapper>
        <Chatt {...props} />
      </Wrapper>
  
    </StatusList>
  )
}

export default GameStatusHub;
