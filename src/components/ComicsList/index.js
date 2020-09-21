import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  Button,
  ComicActionButton,
  ComicCol,
  ComicCover,
  ComicRow
} from "./styles";

export function ItemComicsList({ comic, callback = () => {} }) {
  const [loaded, setLoaded] = useState("");

  const handleImageLoaded = () => {
    setLoaded("fadeIn");
  };

  return (
    <div key={comic?.id} onClick={() => callback(comic)}>
      <ComicCover
        className={loaded}
        style={{ marginLeft: 8, marginRight: 0, width: 100, cursor: "pointer" }}
        src={`${comic?.thumbnail?.path}/portrait_medium.jpg`}
        alt={comic?.title}
        onLoad={handleImageLoaded}
      />
    </div>
  );
}

export function LoadButton({ onClick = () => {}, next }) {
  return (
    <ComicCol key={next ? "next" : "previous"}>
      <ComicRow>
        <ComicActionButton onClick={() => onClick(next)}>
          {next ? <FiChevronRight size={48} /> : <FiChevronLeft size={48} />}
        </ComicActionButton>
      </ComicRow>
    </ComicCol>
  );
}

export function MiniComicsList({ list, style = {} }) {
  const [index, setIndex] = useState(list.length - 1);
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState({});

  useEffect(() => {
    setItems(list.map(({ path }) => path));
  }, [list]);

  const getInfinitIndex = (i) =>
    index + i <= -list.length
      ? 0
      : index + i >= list.length
      ? index + i - list.length
      : index + i;

  const handleImageLoaded = (index) => {
    setLoaded({...loaded, [index]: "fadeIn"});
  };

  if (!list.length) return null;

  return (
    <ComicRow style={style}>
      {list.length > 1 && (
        <Button
          onClick={() => setIndex(index === 0 ? items.length - 1 : index - 1)}
        >
          <FiChevronLeft size={24} />
        </Button>
      )}

      <ComicRow>
        {list.length >= 1 && (
          <ComicCover
            src={`${items[getInfinitIndex(0)]}/portrait_medium.jpg`}
            alt="1"
            className={loaded[0]}
            onLoad={()=>handleImageLoaded(0)}
          />
        )}

        {list.length >= 2 && (
          <ComicCover
            src={`${items[getInfinitIndex(1)]}/portrait_xlarge.jpg`}
            alt="2"
            className={loaded[1]}
            onLoad={()=>handleImageLoaded(1)}
            active
          />
        )}

        {list.length >= 3 && (
          <ComicCover
            src={`${items[getInfinitIndex(2)]}/portrait_medium.jpg`}
            alt="3"
            className={loaded[3]}
            onLoad={()=>handleImageLoaded(2)}
          />
        )}
      </ComicRow>

      {list.length > 1 && (
        <Button onClick={() => setIndex(index >= 2 ? 0 : index + 1)}>
          <FiChevronRight size={24} />
        </Button>
      )}
    </ComicRow>
  );
}

export default ItemComicsList;
