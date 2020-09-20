import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  overflow-x: visible;
  a {
    text-decoration: none;
  }
`;

export const ActionLabel = styled.div`
  padding-left: 50px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-size: 20px;
  }
`;

const fadeIn = keyframes`
  to{
    opacity: 1
  }
`

export const CarouselContainer = styled.div`
  width: 100vw;
  height: 25vh;
  background-color: #6f686866;
  overflow: hidden;
  padding-top: 12px;
  opacity: 0.5;
  animation: ${fadeIn} 1.2s forwards;
`;
