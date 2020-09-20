import styled, { keyframes } from "styled-components";

export const ComicRow = styled.div``;

export const PaginatorInfo = styled.em`
  display: flex;
  justify-content: ${({ side }) => side};
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
`;

const fadeInSlide = keyframes`
  from{
    opacity: 0;
    margin-top: 300px;
  }
  to{
    opacity: 1;
    margin-top: 36px;
  }
`;

export const ComicCol = styled.div`
  margin-top: 36px;
  animation: ${fadeInSlide} 1.2s forwards;
`;
