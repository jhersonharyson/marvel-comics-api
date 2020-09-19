import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ComicRow, ComicCover, Button } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function CharacterList({ list }) {
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

export function MainCharacterList({ list, size = 10 }) {
  return (
    <ComicRow>
      <ComicRow>
        {Array(size)
          .fill(1)
          .map(() => (
            <Link to="">
              <ComicCover
                style={{ marginLeft: 8, marginRight: 0 }}
                src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_medium.jpg"
                alt="spider-man cover"
              />
            </Link>
          ))}
      </ComicRow>
    </ComicRow>
  );
}

export function ItemCharacterList() {
  return (
    <Link to="">
      <ComicCover
        style={{ marginLeft: 8, marginRight: 0 }}
        src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_medium.jpg"
        alt="spider-man cover"
      />
    </Link>
  );
}

export function MiniCharacterList({ list, style = {} }) {
  const [index, setIndex] = useState(list.length - 1);

  const getInfinitIndex = (i) =>
    index + i <= -list.length
      ? 0
      : index + i >= list.length
      ? index + i - list.length
      : index + i;

  return (
    <ComicRow style={style}>
      <Button
        onClick={() => setIndex(index == 0 ? list.length - 1 : index - 1)}
      >
        <FiChevronLeft size={24} />
      </Button>

      <ComicRow>
        <ComicCover src={list[getInfinitIndex(0)]} alt="1" />
        <ComicCover
          src={list[getInfinitIndex(1)]}
          alt="2"
          active
        />
        <ComicCover src={list[getInfinitIndex(2)]} alt="3" />
      </ComicRow>
      <Button onClick={() => setIndex(index >= 2 ? 0 : index + 1)}>
        <FiChevronRight size={24} />
      </Button>
    </ComicRow>
  );
}

export default CharacterList;
