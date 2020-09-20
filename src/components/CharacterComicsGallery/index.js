import React, { useEffect, useState } from "react";
import CharacterService from "../../services/CharacterService";
import ComicsService from "../../services/ComicsService";
import ComicsCarousel from "../ComicsCarousel";
import { ItemComicsList, LoadButton } from "../ComicsList";
import Loader from "../Loader";
import { ComicCol, ComicRow, PaginatorInfo } from "./styles";

function CharacterComicsGallery({
  query = "",
  isComic = false,
  onSearchEnd = () => {},
  handleSelect = () => {},
}) {
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(0);
  const [limit, setlimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResults([]);
    setIndex(0);
    setlimit(10);
    setTotal(0);
    setLoading(false);
  }, [query]);

  useEffect(() => {
    let isSubscribed = true;
    const fetch = async () => {
      setLoading(true);

      const response = isComic
        ? await new ComicsService().getCharactersResourceByComicId(
            query,
            index * limit,
            limit
          )
        : await new CharacterService().getComicsResourceByCharcterId(
            query,
            index * limit,
            limit
          );

      const { offset = 0, results = [], total = 0, count } = response;

      if (isSubscribed) {
        onSearchEnd();
        setTotal(total);
        setResults(results);
        setLoading(false);
      }
    };

    fetch();

    return () => (isSubscribed = false);
  }, [index]);

  const handleChange = (isNext) => {
    if (isNext) {
      // verificar se o index > max
      setIndex(index + 1 < total ? index + 1 : index);
    } else {
      setIndex(index > 0 ? index - 1 : 0);
    }
  };

  const buildGallery = (items) => {
    let gallery = [];

    if (index > 0) gallery.push(<LoadButton onClick={handleChange} key={11} />);

    gallery = [...gallery, ...items];

    if (index + 1 < total / limit)
      gallery.push(<LoadButton next onClick={handleChange} key={22} />);

    return gallery;
  };

  return (
    <ComicCol>
      {/* {JSON.stringify(results)} */}
      <ComicRow>
        {query && results.length > 0 && (
          <PaginatorInfo side="flex-start">
            {isComic
              ? `${total} character appears in this comic`
              : `All ${total} comics this character appears`}
          </PaginatorInfo>
        )}
      </ComicRow>
      <ComicRow style={{ minHeight: "200px", paddingTop: "15px" }}>
        {loading ? (
          <Loader />
        ) : (
          <ComicsCarousel
            items={buildGallery(
              results.map((result, index) => (
                <ItemComicsList
                  comic={result}
                  callback={handleSelect}
                  key={index}
                />
              ))
            )}
          />
        )}
      </ComicRow>
      <ComicRow>
        {query && !(total === 0 && query) && (
          <PaginatorInfo side="flex-end">
            {index + 1} / {Math.ceil(total / limit)}
          </PaginatorInfo>
        )}
      </ComicRow>
    </ComicCol>
  );
}

export default CharacterComicsGallery;
