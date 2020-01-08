//=======================================
// Bara globala styling-komponenter
//=======================================
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props =>
      props.whiteColor ? "rgb(61, 61, 61)" : "white"};
    font-family: ${props => props.theme.fontFamily};
    min-height: 100vh;
  }
`;

//nedan är bara exempelkod

//_________ text ____________
export const Title = styled.h1`
  font-size: 3rem;
  color: green;
  flex: 1;
  padding: 0;
  margin: 0 700px auto 0;
  text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  color: #ffe6ff;
`;

export const Bodytext = styled.p`
  font-size: 1rem;
  color: black;
`;

//_________ knappar ____________
export const Button = styled.button`
  font-size: 1.3rem;
  background-color: #1f8500;
  border: 1px solid black;
  outline-style: double;
  outline-color: green;
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
  margin: auto auto;
`;

//_________ kort ____________
export const Card = styled.div`
  padding: 2.5rem;
  border-radius: 5rem;
  overflow: hidden;

  height: 300px;
  width: 300px;
  background: white;
  border: solid grey 1px;
`;

//_________ Header ____________
export const Nav = styled.nav`
  height: 80px;
  min-width: 100%;
`;

export const Links = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  padding: 0 20px;
  font-weight: bold;
`;

export const Box = styled.div`
  display: flex;
  margin: 0 auto;
  a {
    color: white;
    text-decoration: none;
  }
`;

export const NewGame = styled.div``;

export const Ul = styled.ul``;
export const Li = styled.li`
  list-style-type: none;
  text-align: left;
`;

export const TurnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ChattButton = styled.div`
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

export const ChattInput = styled.input`
  font-size: 1rem;
  border: 1px solid lightgreen;
  cursor: text;
  outline: none;
  padding: 12px 20px;
  box-sizing: border-box;
  background: #fafafa;
  display: inline-flex;
  align-items: center;
  &:focus {
    background-color: #e6ffff;
  }
`;

export const ChattText = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ChattMe = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 40%;
  max-width: 60%;
  padding: 5px;
  /* flex-direction: row; */
`;

export const ChattUser = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 60%;
  padding: 5px;
  /* flex-direction: row; */
`;
