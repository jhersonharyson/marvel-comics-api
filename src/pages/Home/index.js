import React from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { MainComicsList } from "../../components/ComicsList";

import Header from "../../components/Header";
import MainHeroList from "../../components/MainHeroList";
import { Container } from "./styles";

function Home() {
  return (
    <div style={{display: "flex", flexDirection:"column", height: "100%"}}>
      <Header />
      <Container>
        <div className="sidebar-left">
          <MainHeroList />

		<div style={{overflowX: "visible"}}>
			<div style={{marginLeft: 50, marginBottom: 16, display: "flex", alignItems: "center"}}>All comics <FiChevronRight /></div>
		  <div style={{width: "100vw", height: "30vh", backgroundColor: "#6f686866", display: "flex", flexDirection: "row", overflowX: "scroll", overflowY: "hidden"}}>
		  	<MainComicsList size={20} />

		  </div>
		  </div>
        </div>
        <div className="middle-content"></div>
        <div className="sidebar-right"></div>
      </Container>
    </div>
  );
}

export default Home;
