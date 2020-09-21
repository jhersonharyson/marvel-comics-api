import React from "react";
import ItemComicsList from "../ComicsList";
import ImageLazyLoad from "../ImageLazyLoad";

import { Container } from "./styles";

function Gallery({ items = [] }) {
  return (
    <Container>
      <div className="my_container">
        <ul>
          {items.map(({ comic, callback }, index) => (
            <li className="block" key={index} onClick={() => callback(comic)}>
                <ImageLazyLoad comic={comic} />
                <span>{comic?.title || comic?.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Gallery;
