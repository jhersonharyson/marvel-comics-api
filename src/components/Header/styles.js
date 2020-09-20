import styled, { keyframes } from "styled-components";
import logo from "../../assets/images/logo.png";

const fadeInSlideLeft = keyframes`
  from{
    opacity: 0;
    margin-left: 300px;
  }
  to{
    opacity: 1;
    margin-left: 0px;
  }
`;

export const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 50px 40px 50px;

  box-sizing: border-box;
  animation: ${fadeInSlideLeft} 1.2s forwards;
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
    padding-left: 35px;
    font-size: 18px;
  }

  li a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Searchbar = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  padding: 8px 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-left: 35px;
  width: 300px;

  input {
    border: none;
    outline: 0;
    margin-left: 5px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }
`;

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

export const ComicsLabel = styled.em`
  font-size: 56px;
  font-weight: bolder;
  text-align: right;
  animation: ${fadeInSlide} 1.2s forwards;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;
`;
