//**------Lediga matcher-Box-----**//
import React, { useState, useEffect } from 'react';
import { ListBox, GlobalStyle } from './style';


const MatchesList = (props) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        props.socket.on("roomList", res => {
            console.log(res);
            setList(res.data);
        })
        props.socket.on("roomJoined", res => {
            // navigate till spel
        })
        props.socket.emit("getRoomList", "");
    }, []);


    function handleJoin(id) {
        props.socket.emit("joinRoom", "");
            // navigate(`/game/${id}`)
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
                                <td>{value.owner}</td>
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