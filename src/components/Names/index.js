import React from "react";
import { Link } from "react-router-dom";
import { Container, Name } from "./styles";

function Names({ name }) {
  return (
    <Container>
      <Name size={"900"}>{name}</Name>
      <Name size={"700"}>{name}</Name>
      <Name size={"600"}>{name}</Name>
      <Name size={"900"}>{name}</Name>
    </Container>
  );
}

export default Names;
