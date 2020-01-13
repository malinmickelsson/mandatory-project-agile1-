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

//_________ text ____________
export const Title = styled.h1`
  font-size: 3rem;
  color: green;
  flex: 1;
  padding: 0;
  margin: 0 650px auto 0;
  text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  color: #ffe6ff;
`;

export const SubtitleGame = styled.h3`
  font-size: 1.5rem;
  margin: 0 20%;
  padding: 0;
  color: #ffe6ff;
  flex: 1;
`;

export const Bodytext = styled.p`
  font-size: 1.5rem;
  margin: 10px;
  color: white;
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
  height: 20vh;
  min-width: 100%;
`;

export const Links = styled.div`
  display: inline-box;
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

//_________ Popup ____________
export const Modal = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  width: 30%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1vh;
  box-shadow: 0 4px 8px 0 white, 0 6px 20px 0 lightgreen;
  background-color: rgba(84, 84, 84);
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ModalBody = styled.div`
  color: white;
  text-align: center;
  font-size: 20px;
  width: 100%;
  // height: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  color: white;
  font-size: 30px;
  background: none;
  border: none;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const Section = styled.div`
  padding: 20px;
`;

export const NewGame = styled.div``;

//_________ Chatt ____________
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

export const NameBox = styled.input`
  font-size: 1rem;
  background: none;
  border: none;
  border-bottom: 1px solid green;
  color: lightgreen;
  cursor: text;
  outline: none;
  padding: auto 5px;
  text-align: center;
  &:focus {
    color: #e6ffff;
  }
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

export const ChattText = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const TurnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;