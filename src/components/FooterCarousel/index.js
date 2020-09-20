import React from "react";
import Flickity from "react-flickity-component";

function FooterCarousel({ items = [] }) {
  if (!items.length) return null;

  const flickityOptions = {
    initialIndex: 0,
    cellAlign: "left",
    // freeScroll: true,
    draggable: false,
    autoPlay: 4000,
    prevNextButtons: true,
    friction: 0.07,
    selectedAttraction: 0.01,
    contain: true,
    groupCells: 3,
    // wrapAround: true,
    imagesLoaded: false,
  };
  return (
    <Flickity options={flickityOptions} style={{ width: "100%" }} static>
      {items.map((item) => item)}
    </Flickity>
  );
}

export default FooterCarousel;
