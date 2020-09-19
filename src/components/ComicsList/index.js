import React from "react";
import { Link } from "react-router-dom";
import { ComicRow, ComicCover } from "./styles";
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

export function ItemComicsList(comic) {
  return (
    <Link to="" key={comic?.title}>
      <ComicCover
        style={{ marginLeft: 8, marginRight: 0 }}
        src={`${comic?.thumbnail?.path}/portrait_medium.jpg`}
        alt={comic?.title}
      />
    </Link>
  );
}

export default ComicsList;
