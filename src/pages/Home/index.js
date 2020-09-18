import React, { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainHeroList from "../../components/MainHeroList";
import MainHeroCharacter from "../../components/MainHeroCharacter";
import Names from "../../components/Names";

import Store from "../../context/provider";

import { Container } from "./styles";


function Home() {
  const theme = useContext(Store)
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Container>
        <div className="sidebar-left">
          <MainHeroList />
        </div>
        <div className="middle-content">
          <Names name={theme.name} /> 
        </div>
        <div className="sidebar-right">
        <MainHeroCharacter />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
