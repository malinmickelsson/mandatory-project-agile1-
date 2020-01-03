//**------Lediga matcher-Box-----**//
import React from 'react';
import { ListBox, GlobalStyle } from './style';


const MatchesList = () => {

    let list = [{
        id: 1,
        match: 'Avvy',
        antal: 1.2,
        typ: 'standart'
    },
    {
        id: 2,
        match: 'Dennis',
        antal: 1.2,
        typ: 'standart'
    },
    {
        id: 3,
        match: 'Filip',
        antal: 1.2,
        typ: 'standart'
    },
    {
        id: 4,
        match: 'Avvy',
        antal: 1.2,
        typ: 'standart'
    }];


    return (
        <ListBox>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Match</th>
                        <th>Antal</th>
                        <th>Typ</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(list).map((value, index) => {
                        console.log(value);
                        return (
                            <tr key={index}>
                                {Object.values(value).map((key) => {
                                    return (
                                        <td>{key}</td>
                                    );
                                })}
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