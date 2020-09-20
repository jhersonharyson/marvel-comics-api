import React from "react";
import { Container, Name } from "./styles";

function Names({ name, left }) {
  return (
    <Container left={left}>
      <Name size={"900"}>{name}</Name>
      <Name size={"700"}>{name}</Name>
      <Name size={"600"}>{name}</Name>
      <Name size={"900"}>{name}</Name>
    </Container>
  );
}

export default Names;
