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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    transition: transform 0.2s;
    margin: 0 10px;

    &:hover {
      transform: scale(1.15);
    }
    @media only screen and (max-width: 700px) {
      padding-left: 0;
    }
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
  margin-top: -4px;

  width: 300px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: transform 0.2s, width 1.5s;

  &:focus-within {
    transform: scale(1.15) translateX(18px);
    width: 400px;
  }
  &:focus-within .help {
    display: block;
  }
  .help {
    display: none;
  }

  input {
    border: none;
    outline: 0;
    margin-left: 12px;
    font-style: italic;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    width: 100%;
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
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: 700px) {
    flex-direction: column;

    & > .search form {
      margin-left: 0;
      margin-top: 25px;
      width: 75%;
    }
  }
`;
