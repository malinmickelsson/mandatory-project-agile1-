//=======================================
// Bara globala styling-komponenter
//=======================================
import styled from "styled-components";


//------------Chatt------------
export const mainChattContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const chattContainer = styled.div`
border: 1px solid red;
width: 40%;
padding: 10px;
`;

export const chattInputContainer = styled.div`
display: flex;
justify-content: center;
`;

export const Button = styled.button`
  font-size: 1.3rem;
  background-color: #f7fafc;
  color: black;
  border-radius: 25rem;
  border: solid 1 #cbd5e0;
  padding: 1rem 2rem;
  cursor: pointer;
`;
