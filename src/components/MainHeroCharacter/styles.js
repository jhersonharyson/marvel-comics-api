import styled from "styled-components";
import logo from "../../assets/images/logo.png";

export const SideIndicator = styled.div`
  height: 50px;
  width: 2px;
  margin-bottom: 15px;
  background-color: ${({ principal }) => (!!principal ? "#fff" : "#fff9")};
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 4px;
`;
export const MiniCharacterListContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 12px;
  margin-bottom: 16px;
`;

export const HeroNameLabel = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const ContainerList = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 50px;
`;

export const ActorNameLabel = styled.div`
  font-size: 13px;
  font-weight: 200;
  line-height: 20px;
  margin-top: 0px;
  margin-right: 36px;
`;
export const CharacterLabel = styled.div`
  margin-bottom: 24px;
  margin-top: 8px;
  transition: 0.3s;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})``;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    list-style: none;
    padding: 0px 30px;
    font-size: 18px;
  }

  li a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Searchbar = styled.input`
  border-radius: 25px;
  border: none;
  padding: 8px 15px;
  outline: 0;
`;

export const Col = styled.div`
  a {
    text-decoration: none;
  }
`;

export const ActionLabel = styled.div`
  padding-left: 50px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-size: 20px;
  }
`;
