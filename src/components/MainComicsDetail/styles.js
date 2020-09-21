import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0px 50px;
  margin-bottom: 10px;

  &.background-image {
    background-image: ${({ imageUrl }) => imageUrl};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    padding: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    min-height: 125%;
    position: absolute;
    top: 100vh;
  }

  &.background-blur {
    background: rgba(171, 153, 153, 0.15);
    backdrop-filter: blur(50px);
    width: 100vw;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 45px;
    flex-direction: column;
  }
`;

export const SearchContainerField = styled.div`
  display: flex;
  padding: 0px 50px;
  flex-direction: column;
  overflow: hidden;
`;

export const Box = styled.div`
  flex: 1;

  &.right {
    justify-content: center;
    margin-top: 67px;
    max-height: 700px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const StickPosition = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
  z-index: 2;
  height: fit-content;
  padding-bottom: 16px;
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

export const Item = styled.a``;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 32px;
    margin-right: 10px;
    margin-left: -5px;
  }
`;

export const ComicTitle = styled.h1`
  color: #fff;
`;

export const ResumeIsNotAvaliable = styled.h1`
  color: #513d3d;
  font-size: 12px;
  font-weight: 900;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 5px;
  background-color: #fff;
  width: 90px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const InformationBox = styled.div`
  flex: 1;
  margin-left: 24px;
  p,
  ul {
    margin-bottom: 40px;
    color: #fff;
  }
  span {
    font-size: 12px;
  }

  li {
    margin-left: 16px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;

  &.right {
    margin-right: 10;
    margin-top: 15;
  }
`;

export const List = styled.ul``;
export const ListItem = styled.li``;
export const Text = styled.p``;
export const TextDetail = styled.span``;
export const ContainerDetail = styled.div`
  &.right {
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
  }
`;
