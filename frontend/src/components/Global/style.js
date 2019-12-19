//=======================================
// Bara globala styling-komponenter
//=======================================
import styled from "styled-components";

//nedan är bara exempelkod

//_________ text ____________
const Title = styled.h1`
  font-size: 3.5rem;
  color: black;
`;
const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: black;
`;

const Bodytext = styled.p`
  font-size: 1rem;
  color: black;
`;
//_________ knappar ____________
const Button = styled.button`
  font-size: 1.3rem;
  background-color: grey;
  color: white;
  border-radius: 5px;
  padding: 7px 10px;
`;

//_________ kort ____________
const Card = styled.div`
  height: 300px;
  width: 300px;
	background: white;
	border: solid grey 1px;
	border-radius: 5px;
`;
