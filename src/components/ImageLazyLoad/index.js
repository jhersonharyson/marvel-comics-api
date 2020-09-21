import React, { useState } from "react";
import {ComicCover} from './styles'

export function ImageLazyLoad({ comic, callback = () => {}}) {
  const [loaded, setLoaded] = useState("");

  const handleImageLoaded = () => {
    setLoaded("fadeIn");
  };

  return (
    <ComicCover
      className={loaded}
      style={{ width: "100%", height: "100%" }}
      src={`${comic?.thumbnail?.path}/standard_fantastic.jpg`}
      alt={comic?.title}
      onLoad={handleImageLoaded}
    />
  );
}

export default ImageLazyLoad