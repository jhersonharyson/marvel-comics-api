import React from "react";
import { FiChevronRight } from "react-icons/fi";
import FooterCarousel from "../FooterCarousel";
import { ItemComicsList } from "../ComicsList";

import { ActionLabel } from "./styles";

function Footer() {
  return (
    <div style={{ overflowX: "visible" }}>
      <ActionLabel>
        All comics <FiChevronRight />
      </ActionLabel>
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
