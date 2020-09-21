import React, { useState, useEffect } from "react";
import Routes from "./routes";
import backgroundBar from "./assets/images/lines.png";
import backgroundTexture from "./assets/images/dark-denim.png";
import { StoreProvider } from "./context/provider";
import { Theme as theme } from "./models/HerosModel";
import CharacterService from "./services/CharacterService";
import Globalstyles from "./Globalstyles";

import {MainContainer, MainContainerBars, MainContainerBackground, MainContaineBlur} from './MainTheme'


function App() {
  const [currentTheme, setCurrentTheme] = useState(theme["SPIDER_MAN"]);
  const [comics, setComics] = useState([]);
  const [hero, setHero] = useState({});
  const [selected, setSelected] = useState({});

  useEffect(() => {
    let isSubscribed = true;

    const getHeroInfo = async () => {
      const character = await new CharacterService().getCharacterDescription(
        currentTheme.characterId
      );

      const comics = await new CharacterService().getComicsResourceByCharcterId(
        currentTheme.characterId,
        0,
        30
      );

      if (isSubscribed) {
        setHero(character);
        setComics([]);
        setComics(comics.results);
      }
    };

    getHeroInfo();

    return () => (isSubscribed = false);
  }, [currentTheme]);

  const dispatch = (newTheme) => {
    setCurrentTheme(theme[newTheme]);
  };

  const dispatchSelected = (selected) => {
    setSelected(selected);
  };

  return (
    <StoreProvider value={{ ...currentTheme, hero, comics, selected, dispatch, dispatchSelected }}>
      <MainContainer data-testid="app-main-div" imageUrl={`url(${backgroundTexture})`}>
        <MainContainerBars imageUrl={`url(${backgroundBar})`}>
          <MainContainerBackground imageUrl={`url(${currentTheme.background})`}>
            <MainContaineBlur>
              <Globalstyles color={currentTheme.color} />
              <Routes/>
            </MainContaineBlur>
          </MainContainerBackground>
        </MainContainerBars>
      </MainContainer>
    </StoreProvider>
  );
}

export default App;
