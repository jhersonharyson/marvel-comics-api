import React, { useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import { ItemComicsList } from "../ComicsList";
import FooterCarousel from "../FooterCarousel";

import Store from "./../../context/provider";

import { ActionLabel, CarouselContainer } from "./styles";

function Footer() {
  const store = useContext(Store);
  return (
    <div style={{ overflowX: "visible" }}>
      <ActionLabel>
        All comics <FiChevronRight />
      </ActionLabel>
      <CarouselContainer>
        {!!store.comics.length && (
          <FooterCarousel
            items={store?.comics?.map((comic) => ItemComicsList(comic))}
          />
        )}
      </CarouselContainer>
    </div>
  );
}

export default Footer;
