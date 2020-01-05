import Styled from "styled-components";
// Avvy- gjort från css till styled-components

// ** ------------ Chatt.jsx style -----------------** //
export const Span = Styled.span`
  color: white;
`;

export const MainChatt = Styled.div`
`;

export const ChattBox = Styled.div`
  border: 1px solid black;
  outline-style: double;
  outline-color: green;
  width: 100%;
  padding: 30px;
  margin: 100px auto auto 100px;
`;

export const InputDiv = Styled.div`
  display: flex;
  justify-content: center;
`;

export const ChattInput = Styled.input`
  font-size: 1.2rem;
  border: 1px solid lightgreen;
  cursor: text;
  outline: none;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background: #fafafa;
  display: inline-flex;
  align-items: center;
  &:focus{
    background-color:  #e6ffff;
  }
`;

export const ChattText = Styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ChattMe = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin - left: 40 %;
  max - width: 60 %;
  padding: 5px;
  /* flex-direction: row; */
`;

export const ChattUser = Styled.div`
  display: flex;
  justify - content: flex - start;
  max - width: 60 %;
  padding: 5px;
  /* flex-direction: row; */
`;

export const ChattButton = Styled.div`
  width: 100px;
  text-align: center;
  font-size: 1.5rem;
  background-color: #1f8500;
  border: 1px solid black;
  outline-style: double;
  outline-color: green;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: auto auto;
`;