import React, { useEffect, useState } from "react";
import ViewModel from "../../models/ViewModel";
import CharacterService from "../../services/CharacterService";
import ComicsService from "../../services/ComicsService";
import ComicsCarousel from "../ComicsCarousel";
import LoadMoreButton from "../LoadMoreButton";
import { ItemComicsList, LoadButton } from "../ComicsList";
import Gallery from "../Gallery";
import Loader from "../Loader";
import { ComicCol, ComicRow, PaginatorInfo } from "./styles";

function ComicsGallery({
  query = "",
  filter = "COMICS",
  queryIsId = false,
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
  }, [query, filter]);

  useEffect(() => {
    let isSubscribed = true;
    const fetch = async () => {
      if (query.length >= 3) {
        setLoading(true);

        const response =
          filter === ViewModel.CHARACTER
            ? await new CharacterService().getCharacterResourceByNameStartsWith(
                queryIsId,
                query,
                index * limit,
                limit
              )
            : await new ComicsService().getComicResourceByStartWithTitle(
                queryIsId,
                query,
                index * limit,
                limit
              );

        const { total = 0 } = response || {};
        if (isSubscribed) {
          onSearchEnd();
          setTotal(total);
          setResults(results.concat(response.results));
          setLoading(false);
        }

        if (queryIsId && results.length === 1) handleSelect(results[0]);
      }
    };

    fetch();

    return () => (isSubscribed = false);
    // eslint-disable-next-line
  }, [index, query, filter]);

  const handleChange = (isNext) => {
    if (isNext) {
      // verificar se o index > max
      setIndex(index + 1 < total ? index + 1 : index);
    } else {
      setIndex(index > 0 ? index - 1 : 0);
    }
  };

  return (
    <ComicCol style={{ display: "flex", flexDirection: "column" }}>
      <ComicRow>
        {query && (
          <PaginatorInfo side="flex-start">
            {query.length < 3
              ? `Ops... type minimun 3 characters for a searching`
              : total === 0 && query.length >= 3
              ? `Ops... ${total} result found for "${query}"`
              : `All comics for "${query}" in ${total} results`}
          </PaginatorInfo>
        )}
      </ComicRow>
      <ComicRow className="gallery">
        <Gallery
          items={results.map((result) => ({
            comic: result,
            callback: handleSelect,
          }))}
        />
      </ComicRow>
      <ComicRow className="load-more" style={{marginTop: "25px"}}>
        {index + 1 < total / limit && (
          <LoadMoreButton fill="#000" onClick={handleChange} />
        )}
      </ComicRow>
      <ComicRow>
        {query && !(total === 0 && query) && (
          <PaginatorInfo side="flex-end">
            page {index + 1} of {Math.ceil(total / limit)}
          </PaginatorInfo>
        )}
      </ComicRow>
    </ComicCol>
  );
}

export default ComicsGallery;
