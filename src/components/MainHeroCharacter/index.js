import React, { useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Store from "../../context/provider";
import { MiniCharacterList } from "../CharacterList";
import Loader from '../Loader'
import HerosModel, {
  ActorDescription,
  ActorImages,
} from "./../../models/HerosModel";
import {
  ActionLabel,
  ActorNameLabel,
  CharacterLabel,
  Col,
  Container,
  ContainerList,
  HeroNameLabel,
  LabelContainer,
  MiniCharacterListContainer,
  ResumeIsNotAvailable
} from "./styles";

function MainHeroCharacter() {
  const theme = useContext(Store);

  return (
    <Container style={{ marginTop: "-56px" }}>
      <Col style={{ height: "30px" }}>
        <Link to={`/comics?characterId=${theme.characterId}`}>
          <ActionLabel>
            Character <FiChevronRight />
          </ActionLabel>
        </Link>
      </Col>
      <MiniCharacterListContainer>
        <MiniCharacterList
          style={{ transform: [{ scale: 0.6 }] }}
          list={ActorImages[theme.id]}
        />
      </MiniCharacterListContainer>
      <ContainerList>
        <LabelContainer>
          <CharacterLabel>
            <Col style={{ height: "30px" }}>
              <Link to={`/comics?characterId=${theme.characterId}`}>
                <HeroNameLabel>
                  <ActionLabel style={{ paddingLeft: 0 }}>
                    {HerosModel[theme.id]} <FiChevronRight />
                  </ActionLabel>
                </HeroNameLabel>
              </Link>
            </Col>
            <ActorNameLabel>
              {theme.loading ? (
                <Loader />
              ) : (
                theme?.hero?.description || <ResumeIsNotAvailable>Not available</ResumeIsNotAvailable>
              )}
            </ActorNameLabel>
          </CharacterLabel>
        </LabelContainer>
      </ContainerList>
    </Container>
  );
}

export default MainHeroCharacter;
