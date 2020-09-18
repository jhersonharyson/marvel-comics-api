import React from "react";
import { FiChevronRight } from "react-icons/fi";
import FooterCarousel from "../FooterCarousel";
import { ItemComicsList } from "../ComicsList";


function Footer() {
  return (
    <div style={{ overflowX: "visible" }}>
      <div
        style={{
          marginLeft: 50,
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        All comics <FiChevronRight />
      </div>
      <div
        style={{
          width: "100vw",
          height: "25vh",
          backgroundColor: "#6f686866",
          overflow: "hidden",
          paddingTop: "12px",
        }}
      >
        <FooterCarousel items={Array(15).fill(ItemComicsList())} />
      </div>
    </div>
  );
}

export default Footer;
