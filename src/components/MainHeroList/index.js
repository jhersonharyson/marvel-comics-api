import React, { useContext } from "react";

import Store from "../../context/provider";
import HerosModel, { ActorNames } from "../../models/HerosModel";

import {
  SideIndicator,
  LabelContainer,
  HeroNameLabel,
  ActorNameLabel,
  CharacterLabel,
  Container,
  ContainerList,
  Col,
} from "./styles";

function MainHeroList() {
  const theme = useContext(Store);
   
  return (
    <Container>
      <ContainerList>
        <Col>
          <SideIndicator principal={theme.name == HerosModel.SPIDER_MAN} />
          <SideIndicator principal={theme.name == HerosModel.BLACK_PANTHER} />
          <SideIndicator principal={theme.name == HerosModel.IRON_MAN} />
        </Col>
        <LabelContainer>
          {Object.keys(HerosModel).map((name, index) => (
            <CharacterLabel key={index} active={theme.name == HerosModel[name]} onClick={()=>theme.dispatch(name)}>
              <HeroNameLabel>{HerosModel[name]}</HeroNameLabel>
              <ActorNameLabel >{ActorNames[name]}</ActorNameLabel>
            </CharacterLabel>
          ))}
        </LabelContainer>
      </ContainerList>
    </Container>
  );
}

export default MainHeroList;
