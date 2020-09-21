import React from "react";
import ItemComicsList from "../ComicsList";
import ImageLazyLoad from "../ImageLazyLoad";

import { Container } from "./styles";

function Gallery({ items = [] }) {
  return (
    <Container>
      <div class="my_container">
        <ul>
          {items.map(({ comic, callback }, index) => (
            <li class="block" key={index} onClick={() => callback(comic)}>
              <a href="#">
                <ImageLazyLoad comic={comic} />
                <span>{comic?.title || comic?.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Gallery;
