import styled from "styled-components";

export const ComicCover = styled.img.attrs(() => ({
  draggable: "false",
}))`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: transform 20s, opacity 0.3s;
  opacity: 0;

  &.fadeIn {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.10);
  }
`;
