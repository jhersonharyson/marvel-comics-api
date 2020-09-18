import React from "react";

import { FiChevronRight } from "react-icons/fi";
import { MiniCharacterList } from "../CharacterList";

import {
  SideIndicator,
  LabelContainer,
  HeroNameLabel,
  ActorNameLabel,
  CharacterLabel,
  Container,
  ContainerList,
  Col,
  ActionLabel,
  MiniCharacterListContainer,
} from "./styles";

function MainHeroCharacter() {
  return (
    <Container style={{ marginTop: "-56px" }}>
      <Col style={{ height: "30px" }}>
        <ActionLabel>
          Character <FiChevronRight />
        </ActionLabel>
      </Col>
      <MiniCharacterListContainer>
        <MiniCharacterList style={{ transform: [{ scale: 0.6 }] }} />
      </MiniCharacterListContainer>
      <ContainerList>
        <LabelContainer>
          <CharacterLabel>
            <Col style={{ height: "30px" }}>
              <HeroNameLabel>
                <ActionLabel style={{ paddingLeft: 0 }}>
                  TOM HOLAND <FiChevronRight />
                </ActionLabel>
              </HeroNameLabel>
            </Col>
            <ActorNameLabel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ActorNameLabel>
          </CharacterLabel>
        </LabelContainer>
      </ContainerList>
    </Container>
  );
}

export default MainHeroCharacter;
