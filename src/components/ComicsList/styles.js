import styled from "styled-components";

export const ComicRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const ComicCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ComicCover = styled.img.attrs(() => ({
  draggable: "false",
}))`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  transition: transform 0.2s, opacity 0.6s;
  margin: 0 10px;
  opacity: 0;

  &:hover {
    transform: scale(1.15);
  }

  &.fadeIn {
    opacity: 1;
  }
`;

export const ComicActionButton = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  transition: transform 0.2s;
  margin: 0 0 0 10px;
  height: 150px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.25);
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.15);
  }
`;
