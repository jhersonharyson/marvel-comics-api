import React, { useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ItemComicsList } from "../ComicsList";
import FooterCarousel from "../FooterCarousel";
import Store from "./../../context/provider";
import { ActionLabel, CarouselContainer, Container } from "./styles";



function Footer() {
  const store = useContext(Store);
  const handleSelected = (comic) => {
    return window.location.assign(`/comics?comicId=${comic.id}`)
  }
  return (
    <Container>
      <Link to={`/comics?characterId=${store.characterId}`}>
        <ActionLabel>
          All comics for {store?.hero?.name}
          <FiChevronRight />
        </ActionLabel>
      </Link>
      <CarouselContainer>
        {!!store.comics.length && (
          <FooterCarousel
            items={store?.comics?.map((comic) => <ItemComicsList comic={comic} callback={handleSelected} />)}
          />
        )}
      </CarouselContainer>
    </Container>
  );
}

export default Footer;
