import React, { useState, useEffect } from "react";
import Globalstyles from "./Globalstyles";

import Routes from "./routes";

import backgroundBar from "./assets/images/lines.png";
import backgroundSpiderMan from "./assets/images/spider-man-principal.png";
import backgroundBlackPhanter from "./assets/images/black-panther-principal.png";
import backgroundIronMan from "./assets/images/iron-man-principal.png";
import backgroundTexture from "./assets/images/dark-denim.png";

import { StoreProvider } from "./context/provider";

const thema = {
  ironman: {
    background: backgroundIronMan,
    color: "#beb571",
    name: "IRON MAN",
  },
  spiderman: {
    background: backgroundSpiderMan,
    color: "#0e2c48",
    name: "SPIDER MAN",
  },
  blackpanther: {
    background: backgroundBlackPhanter,
    color: "#030303",
    name: "BLACK PANTHER",
  },
};

function App() {
  const [currentThema, setCurrentThema] = useState(thema["blackpanther"]);

  const dispatch = (newTheme) => {
    alert(newTheme);
    setCurrentThema(thema[newTheme]);
  };

  return (
    <StoreProvider value={{ ...currentThema, dispatch }}>
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
              backgroundImage: `url(${currentThema.background})`,
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
              <Globalstyles color={currentThema.color} />
              <Routes />
            </div>
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
