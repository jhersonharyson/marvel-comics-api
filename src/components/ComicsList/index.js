import React from "react";
import { Link } from "react-router-dom";
import { ComicRow, ComicCover, ComicCol, ComicActionButton } from "./styles";
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

export function ItemComicsList(comic, callbak=()=>{}) {
  return (
    <div key={comic?.id} onClick={()=>callbak(comic)}>
      <ComicCover
        style={{ marginLeft: 8, marginRight: 0 }}
        src={`${comic?.thumbnail?.path}/portrait_medium.jpg`}
        alt={comic?.title}
      />
    </div>
  );
}

export function LoadButton({ onClick = () => {}, next, key }) {
  return (
    <ComicCol key={key}>
      <ComicRow>
        <ComicActionButton onClick={()=>onClick(next)}>
          {next ? <FiChevronRight size={48} /> : <FiChevronLeft size={48} />}
        </ComicActionButton>
      </ComicRow>
    </ComicCol>
  );
}

export default ComicsList;
