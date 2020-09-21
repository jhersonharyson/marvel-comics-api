import styled from "styled-components";

export const Searchbar = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  padding: 16px 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 500px;
  height: 35px;

  @media only screen and (max-width: 700px) {
      width: 100%;
  }

  input {
    border: none;
    outline: 0;
    width: 100%;
    font-size: 18px;
    margin-left: 12px;
    font-style: italic;
    font-weight: 700;
    line-height: 22px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  a:hover {
    color: #222222;
  }

  /* Dropdown */

  .dropdown {
    display: inline-block;
    position: relative;
  }

  .dd-button {
    display: inline-block;
    border-right: 1px solid #a3a3a3;
    border-radius: 0px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    margin-left: -8px;
    padding: 10px 30px 10px 20px;
    background-color: #ffffff;
    cursor: pointer;
    white-space: nowrap;
    color: #0e2c48;
    font-size: 15px;
    font-weight: 600;
    width: 90px;
    font-style: italic;
  }

  .dd-button-after {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 15px;
    height: 23px;
    transition: 0.3s;
  }

  .dd-button:hover:after {
    transform: scale(1.05);
    top: 42%;
  }

  .dd-button:hover {
    background-color: #eeeeee;
  }

  .dd-input {
    display: none;
  }

  .dd-menu {
    position: absolute;
    top: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style-type: none;
    z-index: 200;
  }

  .dd-input + .dd-menu {
    display: none;
  }

  .dd-input:checked + .dd-menu {
    display: block;
  }

  .dd-menu li {
    padding: 10px 20px;
    cursor: pointer;
    white-space: nowrap;
    color: #000;
  }

  .dd-menu li:hover {
    background-color: #f6f6f6;
  }

  .dd-menu li a {
    display: block;
    margin: -10px -20px;
    padding: 10px 20px;
  }

  .dd-menu li.divider {
    padding: 0;
    border-bottom: 1px solid #cccccc;
  }
`;

export const Container = styled.div``;

export const Filter = styled.div``;

export const Label = styled.div``;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  color: #000 !important;

  &:hover .dropdown-content {
    display: block;
    color: #000 !important;
  }
  span {
    margin-left: 5px;
    display: flex;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  top: 40px;
  left: -8px;
  transition: 1s;

  z-index: 1;
  div {
    color: #000 !important;
    border-bottom: 1px solid #a3a3a3;
    padding: 18px 16px;
    font-size: 18px;
    font-weight: 300;
  }

  & div:hover {
    background-color: #eeeeee;
  }
`;
