import React from "react";
import Globalstyles from "./Globalstyles";

import Routes from "./routes";

import backgroundBar from "./assets/images/lines.png";
import backgroundSpiderMan from "./assets/images/spider-man-principal.png";

function App() {
  return (
    <div>
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
            backgroundImage: `url(${backgroundSpiderMan})`,
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
            <Globalstyles />
            <Routes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
