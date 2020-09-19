import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Load = styled.div`
  border: 2px solid #a3a3a3; /* Light grey */
  border-top: 2px solid #fff; /* Blue */
  border-radius: 40px;
  width: 25px;
  height: 25px;
  animation: ${spin} .4s linear infinite;
`;

export const Container = styled.div`
 
  min-width: 30px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center; 

`;
