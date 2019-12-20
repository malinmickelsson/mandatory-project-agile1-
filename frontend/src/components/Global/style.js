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
  background-color: #f7fafc;
  color: black;
  border-radius: 25rem;
  border: solid 1 #cbd5e0;
  padding: 1rem 2rem;
  cursor: pointer;
`;
//_________ kort ____________
const Card = styled.div`
  padding: 2.5rem;
  border-radius: 5rem;
  overflow: hidden;

  height: 300px;
  width: 300px;
	background: white;
	border: solid grey 1px;
	
`;
