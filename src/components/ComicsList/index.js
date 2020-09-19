import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ComicRow,
  ComicCover,
  ComicCol,
  ComicActionButton,
  Button,
} from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ComicsList({ list }) {
  return (
    <ComicRow>
      <FiChevronLeft size={48} />

      <ComicRow>
        <Link to="">
          <ComicCover
            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_medium.jpg"
            alt="spider-man cover"
          />
        </Link>

        <Link to="">
          <ComicCover
            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg"
            alt="spider-man cover"
          />
        </Link>

        <Link to="">
          <ComicCover
            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_medium.jpg"
            alt="spider-man cover"
          />
        </Link>
      </ComicRow>

      <FiChevronRight size={48} />
    </ComicRow>
  );
}

export function MainComicsList({ list, size = 10 }) {
  return (
    <ComicCol>
      <ComicRow>
        {Array(size)
          .fill(1)
          .map(() => (
            <Link to="">
              <ComicCover
                style={{ marginLeft: 8, marginRight: 0 }}
                src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/portrait_medium.jpg"
                alt="spider-man cover"
              />
            </Link>
          ))}
      </ComicRow>
    </ComicCol>
  );
}

export function ItemComicsList(comic, callbak = () => {}) {
  return (
    <div key={comic?.id} onClick={() => callbak(comic)}>
      <ComicCover
        style={{ marginLeft: 8, marginRight: 0 }}
        src={`${comic?.thumbnail?.path}/portrait_medium.jpg`}
        alt={comic?.title}
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

  useEffect(() => {
    setItems(list.map(({ path }) => path));
  }, [list]);

  const getInfinitIndex = (i) =>
    index + i <= -list.length
      ? 0
      : index + i >= list.length
      ? index + i - list.length
      : index + i;

  if (!list.length) return null;

  return (
    <ComicRow style={style}>
      {list.length > 1 && (
        <Button
          onClick={() => setIndex(index == 0 ? items.length - 1 : index - 1)}
        >
          <FiChevronLeft size={24} />
        </Button>
      )}

      <ComicRow>
        {list.length >= 1 && (
          <ComicCover
            src={`${items[getInfinitIndex(0)]}/portrait_medium.jpg`}
            alt="1"
          />
        )}

        {list.length >= 2 && (
          <ComicCover
            src={`${items[getInfinitIndex(1)]}/portrait_xlarge.jpg`}
            alt="2"
            active
          />
        )}

        {list.length >= 3 && (
          <ComicCover
            src={`${items[getInfinitIndex(2)]}/portrait_medium.jpg`}
            alt="3"
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

export default ComicsList;
