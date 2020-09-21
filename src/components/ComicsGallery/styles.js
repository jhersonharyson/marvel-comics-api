import styled, { keyframes } from "styled-components";

export const ComicRow = styled.div`
  .gallery {
    min-height: 200px;
    padding-top: 25px;
    padding-bottom: 35px;
  }

  .load-more {
    min-height: 100px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
    display: flex;
    margin-top: 25px;
  }
`;

export const PaginatorInfo = styled.em`
  display: flex;
  justify-content: ${({ side }) => side};
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 24px;
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

export const ComicCover = styled.img.attrs(() => ({
  draggable: "false",
}))`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  transition: transform 0.2s;
  margin: 0 10px;

  &:hover {
    transform: scale(1.15);
  }
`;
