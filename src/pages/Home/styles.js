import styled, { keyframes } from "styled-components";

const fadeInSlide = keyframes`
  from{
    opacity: 0;
    margin-top: 300px;
  }
  to{
    opacity: 1;
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  animation: ${fadeInSlide} 1.2s forwards;
  .sidebar-left {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    padding: 40px 0 0 0;
    overflow: visible;

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 700px) {
      flex: none;
      height: 136px;
    }
  }

  .middle-content {
    display: flex;
    flex: 2;
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 700px) {
      display: none;
    }
  }

  .sidebar-right {
    display: flex;
    flex: 1;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    font-size: 24px;
  }
`;

export const Box = styled.div`
  flex: 1;
`;

export const Flex = styled.div`
  display: flex;
`;

export const TitleBar = styled.div`
  display: flex;
  align-itens: center;
  margin-bottom: 30px;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 32px;
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  color: #fff;
`;

export const InformationBox = styled.div`
  flex: 1;
  margin: 0px 15px;

  h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin: 10px 0px 40px;
    color: #fff;
  }
`;
