import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainHeroList from "../../components/MainHeroList";
import MainHeroCharacter from "../../components/MainHeroCharacter";
import Names from "../../components/Names";
import { Container } from "./styles";


function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Container>
        <div className="sidebar-left">
          <MainHeroList />
        </div>
        <div className="middle-content">
          <Names name={"SPIDER MAN"} /> 
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
