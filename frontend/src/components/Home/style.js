import Styled, { createGlobalStyle } from "styled-components";

//**------ActiveGames-style-----**//
export const ListBox = Styled.div`
  width: 100%;
  padding: 30px;
  margin: 50px auto;
  text-align: center;
  font-size: 1.5rem;
`;

export const GlobalStyle = createGlobalStyle`
  table {
  width: 100%;
  border-collapse: collapse;
 tr:nth-child(even) {
    background-color: #383838;
 }
  tr:hover {
    background: lightgreen;
    cursor: pointer;
  }
  th {
    padding: 11px;
    color: #ffe6ff;
    border-bottom: 1px solid green;
  }
  td {
    color: Aquamarine;
    padding: 11px;
    border-bottom: 1px solid green;
  }
  }
`;
