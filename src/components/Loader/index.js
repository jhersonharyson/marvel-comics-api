import React from "react";
import { Load, Container } from "./styles";

function Loader() {
  return (
    <Container>
      <Load data-testid="loader-load-div"/>
    </Container>
  );
}

export default Loader;
