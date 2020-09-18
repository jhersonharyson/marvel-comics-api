import React from "react";

import {
  SideIndicator,
  LabelContainer,
  HeroNameLabel,
  ActorNameLabel,
  CharacterLabel,
  Container,
  ContainerList,
  Col
} from "./styles";

function MainHeroList() {
  return (
    <Container>
      <ContainerList>
        <Col>
          <SideIndicator />
          <SideIndicator principal />
          <SideIndicator />
        </Col>
        <LabelContainer>
          <CharacterLabel>
            <HeroNameLabel>SPIDER MAN</HeroNameLabel>
            <ActorNameLabel>TOM HOLAND</ActorNameLabel>
          </CharacterLabel>
          <CharacterLabel>
            <HeroNameLabel>BACK PANTER</HeroNameLabel>
            <ActorNameLabel>TOM HOLAND</ActorNameLabel>
          </CharacterLabel>
          <CharacterLabel>
            <HeroNameLabel>IRON MAN</HeroNameLabel>
            <ActorNameLabel>TOM HOLAND</ActorNameLabel>
          </CharacterLabel>
        </LabelContainer>
      </ContainerList>
    </Container>
  );
}

export default MainHeroList;
