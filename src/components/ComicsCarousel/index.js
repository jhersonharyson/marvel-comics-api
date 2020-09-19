import React, { useState } from "react";
import Flickity from "react-flickity-component";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MainComicsList, LoadButton } from "../ComicsList";

import { ComicRow, ComicCol, PaginatorInfo, PaginatorButton } from "./styles";

const flickityOptions = {
  initialIndex: 0,
  cellAlign: "center",
  pageDots: false,

  prevNextButtons: false,
  resize: true,
  contain: true,
  initialIndex: 0,
};

function ComicsCarousel({ items = [] }) {
  if (!items.length) return null;
  return (
    <Flickity options={flickityOptions} style={{ width: "100%" }}>
      {items.map((item) => item)}
    </Flickity>
  );
}

function ComicsGalerry({ items = [] }) {
  const [list, setList] = useState([[]]);
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const handleChange = (isNext) => {
    if (isNext) {
      // verificar se o index > max
      setIndex(index + 1);
    } else {
      setIndex(index > 0 ? index - 1 : 0);
    }
  };

  return (
    <ComicCol>
      <ComicRow>
        <PaginatorInfo side="flex-start">
          All comics for "asdasda" in 654654 results
        </PaginatorInfo>
      </ComicRow>
      <ComicRow>
        <ComicsCarousel
          items={[
            <LoadButton onClick={handleChange} />,
            ...items,
            <LoadButton next onClick={handleChange} />,
          ]}
        />
      </ComicRow>
      <ComicRow>
        <PaginatorInfo side="flex-end">{index} / 3000</PaginatorInfo>
      </ComicRow>
    </ComicCol>
  );
}

export default ComicsGalerry;
