import styled from "styled-components";

export const ComicRow = styled.div`
  display: flex;
  align-items: center;
  & {
    user-select: none;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
      transform: scale(1.15)
  }
`;

export const ComicCover = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  transition: transform 0.2s;
  margin: 0 10px;

  &:hover {
    transform: scale(1.15);
  }
  ${({ active }) => (active ? "transform: scale(1.25);" : "")}
`;
