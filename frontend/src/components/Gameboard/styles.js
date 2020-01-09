import Styled from "styled-components";

//**---------ChessBoard-style---------- **/
export const Boardscontainer = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;
  margin: 0px;
`;

export const Body = Styled.div`
  margin: 0px;
`;

export const TitleBoard = Styled.h1`
  text-align: center;
`;

//**-------GameStatusHub-style-------- **/
export const StatusList = Styled.div`
  width: 25%;
  padding: 30px;
  color: #ffe6ff;
  text-align: center;
  font-size: 1rem;
`;

export const Wrapper = Styled.div`
  padding: 11px;
  border-bottom: 1px solid green;
`;

export const OppTime = Styled.span` font-size: 3rem;`;
export const OppTur = Styled.p``;
export const Txt = Styled.p``;
export const YourTime = Styled.span`font-size: 3rem;`;

export const YourTur = Styled.p`
 color: lightgreen; //* active *//
`;

export const Ul = Styled.ul``;
export const Li = Styled.li`
 list-style-type: none;
 text-align: left;
`;

export const TurnBox = Styled.div`
 display: flex;
 justify-content: space-around;
`;

export const ChattInput = Styled.input`
font-size: 1rem;
border: 1px solid lightgreen;
cursor: text;
outline: none;
padding: 12px 20px;
box-sizing: border-box;
background: #fafafa;
display: inline-flex;
align-items: center;
&:focus{
  background-color:  #e6ffff;
}
`;

export const ChattButton = Styled.div`
  text-align: center;
  font-size: 1rem;
  background-color: #1f8500;
  border: 1px solid black;
  outline-style: double;
  outline-color: green;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: auto auto;
`;
