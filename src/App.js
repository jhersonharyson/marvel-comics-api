import React, { useState, useEffect } from "react";
import Globalstyles from "./Globalstyles";

import Routes from "./routes";

import backgroundBar from "./assets/images/lines.png";
import backgroundTexture from "./assets/images/dark-denim.png";

import { StoreProvider } from "./context/provider";

import { Theme as theme } from "./models/HerosModel";

import CharacterService from "./services/CharacterService";
import ComicsService from "./services/ComicsService";

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme["SPIDER_MAN"]);
  const [comics, setComics] = useState([]);
  const [hero, setHero] = useState({});

  useEffect(() => {
    const getHeroInfo = async () => {
      const character = await new CharacterService().getCharacterDescription(
        currentTheme.characterId
      );
      setHero(character);
      setComics([]);

      const comics = await new CharacterService().getComicsResourceByCharcterId(
        currentTheme.characterId,
        0,
        30
      );
      setComics(comics.results);
    };
    getHeroInfo();
  }, [currentTheme]);

  const dispatch = (newTheme) => {
    setCurrentTheme(theme[newTheme]);
  };

  return (
    <StoreProvider value={{ ...currentTheme, hero, comics, dispatch }}>
      <div
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${backgroundBar})`,
            backgroundRepeat: "repeat",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${currentTheme.background})`,
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "content-box",
              backgroundPositionX: "0",
              backgroundPositionY: "0",
              backgroundSize: "cover",
              width: "100vw",
              height: "100vh",
            }}
          >
            <div
              style={{
                background: "rgba(171, 153, 153, 0.15)",
                backdropFilter: "blur(.5px)",
                width: "100vw",
                height: "100vh",
              }}
            >
              <Globalstyles color={currentTheme.color} />
              <Routes />
            </div>
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
