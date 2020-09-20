import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button, ComicCover, ComicRow } from "./styles";

export function MiniCharacterList({ list, style = {} }) {
  const [index, setIndex] = useState(list.length - 1);
  const [loaded, setLoaded] = useState({});

  const getInfinitIndex = (i) =>
    index + i <= -list.length
      ? 0
      : index + i >= list.length
      ? index + i - list.length
      : index + i;

  const handLoaded = (index) => {
    setLoaded({ ...loaded, [index]: "fadeIn" });
  };
  
  return (
    <ComicRow style={style}>
      <Button data-testid="character-list-prev" onClick={() => setIndex(index === 0 ? list.length - 1 : index - 1)} >
        <FiChevronLeft size={24} />
      </Button>
      <ComicRow>
        <ComicCover src={list[getInfinitIndex(0)]} alt="1" onLoad={()=>handLoaded(0)} className={loaded[0]} />
        <ComicCover src={list[getInfinitIndex(1)]} alt="2" onLoad={()=>handLoaded(1)} className={loaded[1]} active />
        <ComicCover src={list[getInfinitIndex(2)]} alt="3" onLoad={()=>handLoaded(2)} className={loaded[2]} />
      </ComicRow>
      <Button data-testid="character-list-next" onClick={() => setIndex(index >= 2 ? 0 : index + 1)}>
        <FiChevronRight size={24} />
      </Button>
    </ComicRow>
  );
}

export default MiniCharacterList;
