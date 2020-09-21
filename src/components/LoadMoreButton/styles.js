import styled from "styled-components";

export const ComicCover = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  transition: transform 0.2s;
  margin: 0;
  display:flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.15) rotate(-2deg);
  }
`;
