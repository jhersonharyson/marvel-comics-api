import styled from "styled-components";

export const Container = styled.div``;

export const MainContainer = styled.div`
  background-image: ${({ imageUrl }) => imageUrl};
  background-repeat: repeat;
`;
export const MainContainerBars = styled.div`
  background-image: ${({ imageUrl }) => imageUrl};
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
`;
export const MainContainerBackground = styled.div`
  background-image: ${({ imageUrl }) => imageUrl};
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  background-origin: content-box;
  background-position-x: 0;
  background-position-y: 0;
  background-size: cover;
`;

export const MainContaineBlur = styled.div`
  background: rgba(171, 153, 153, 0.15);
  backdrop-filter: blur(0.5px);
  width: 100vw;
  height: 100vh;
`;
