import React from "react";

import {
  SideIndicator,
  LabelContainer,
  HeroNameLabel,
  ActorNameLabel,
  CharacterLabel
} from "./styles";

function MainHeroList() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-start",
          flexDirection: "row",
          marginLeft: "50px",
        }}
      >
        <div>
          <SideIndicator />
          <SideIndicator principal />
          <SideIndicator />
        </div>
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
      </div>
    </div>
  );
}

export default MainHeroList;
