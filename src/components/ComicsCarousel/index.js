import React from "react";
import Flickity from "react-flickity-component";


const flickityOptions = {
  initialIndex: 0,
  cellAlign: "center",
  pageDots: false,

  prevNextButtons: false,
  resize: true,
  contain: true,
  initialIndex: 0
};

function ComicsCarousel({ items = [] }) {
  if (!items.length) return null;
  return (
    <Flickity options={flickityOptions} style={{ width: "100%" }} >
      {items.map((item) => item)}
    </Flickity>
  );
}


export default ComicsCarousel;
