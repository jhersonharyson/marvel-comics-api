import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.em`
  font-weight: ${({ size }) => size};
  font-size: 64px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;
