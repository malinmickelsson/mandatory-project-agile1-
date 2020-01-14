//**------Lediga matcher-Box-----**//
import React, { useState, useEffect } from 'react';
import { ListBox, GlobalStyle } from './style';
import { navigate } from '@reach/router';


const MatchesList = (props) => {

  const [list, setList] = useState([]);

  useEffect(() => {
    props.socket.on('roomList', res => {
      console.log(res);
      setList(res.data);
    });
    props.socket.on('roomJoined', res => {
      // navigate till spel
      // Om res.ok = true, kör navigate('/game/)                        
    })
    props.socket.emit('getRoomList', ''); // eslint-disable-next-line

    return () => {
      props.socket.off('roomList');
      props.socket.off('roomJoined');
    }// eslint-disable-next-line
  }, []);

  function handleJoin(id) {
    props.socket.emit('joinRoom', { roomId: id });

    // Tillfällig länk
    navigate('/game/' + id);
  }
    
  return (
    <ListBox>
      <table>
        <thead>
          <tr>
            <th>Namn</th>
            <th>Spelare</th>
            <th>Välj match</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.name}</td>
                <td>{value.owner.id}</td>
                <td><button onClick={() => handleJoin(value.id)}>Joina</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    <GlobalStyle />
  </ListBox>
  );
}

export default MatchesList;
