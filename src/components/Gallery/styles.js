import styled from "styled-components";

export const Container = styled.div`
  /* apply a natural box layout model to all elements */
  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .my_container ul {
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    clear: both;
  }
  .my_container ul .block {
    width: 20%;
    height: auto;
    position: relative;
    float: left;
    margin: 0 0 0 0;
    padding: 0 0 20% 0;
    transition: 0.8s ease;
    overflow: hidden;
  }
  .my_container ul .block:hover span {
    height: 30%;
    white-space: nowrap;
    font-size: 1.2rem;
    background-color: #000000b5;
  }
  @media screen and (max-width: 1280px) {
    .my_container ul .block {
      width: 25%;
      padding-bottom: 25%;
    }
  }
  @media screen and (max-width: 1024px) {
    .my_container ul .block {
      width: 33.33%;
      padding-bottom: 33.33%;
    }
  }
  @media screen and (max-width: 600px) {
    .my_container ul .block {
      width: 50%;
      padding-bottom: 50%;
    }
  }
  @media screen and (max-width: 360px) {
    .my_container ul .block {
      width: 100%;
      padding-bottom: 100%;
    }
  }
  .my_container ul .block img {
    max-width: none;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .my_container ul .block span {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 1rem;
    font-size: 0.8rem;
    font-style: italic;
    transition: 2s;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.8s ease;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
  }
`;
