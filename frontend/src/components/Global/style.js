//=======================================
// Bara globala styling-komponenter
//=======================================
import styled from "styled-components";

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

export const Links = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  padding: 0 20px;
  text-decoration: none;
  font-weight: bold;
  color: white;
`;

export const Box = styled.div`
  display: flex;
  margin: 0 auto;
`;