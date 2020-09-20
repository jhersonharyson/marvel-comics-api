import React, { useEffect, useState } from "react";
import ViewModel from "../../models/ViewModel";
import CharacterService from "../../services/CharacterService";
import ComicsService from "../../services/ComicsService";
import ComicsCarousel from "../ComicsCarousel";
import { ItemComicsList, LoadButton } from "../ComicsList";
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
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResults([]);
    setIndex(0);
    setlimit(10);
    setOffset(0);
    setCount(0);
    setTotal(0);
    setLoading(false);
  }, [query]);

  useEffect(() => {
    fetch();
  }, [index, query, filter]);

  const fetch = async () => {
    if (query.length >= 3) {
      setLoading(true);

      const response =
        filter == ViewModel.CHARACTER
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

      console.log(response);
      const { offset = 0, results = [], total = 0, count } = response || {};
      onSearchEnd();
      setOffset(offset);
      setCount(count);
      setTotal(total);
      setResults(results);
      setLoading(false);

      if (queryIsId && results.length == 1) handleSelect(results[0]);
    }
  };

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
      <ComicRow>
        {query && (
          <PaginatorInfo side="flex-start">
            {query.length < 3
              ? `Ops... type minimun 3 characters for a searching`
              : total == 0 && query.length >= 3
              ? `Ops... ${total} result found for \"${query}\"`
              : `All comics for \"${query}\" in ${total} results`}
          </PaginatorInfo>
        )}
      </ComicRow>
      <ComicRow style={{ minHeight: "200px" }}>
        {loading ? (
          <Loader />
        ) : (
          <ComicsCarousel
            items={buildGallery(
              results.map((result) => ItemComicsList(result, handleSelect))
            )}
          />
        )}
      </ComicRow>
      <ComicRow>
        {query && !(total == 0 && query) && (
          <PaginatorInfo side="flex-end">
            {index + 1} / {Math.ceil(total / limit)}
          </PaginatorInfo>
        )}
      </ComicRow>
    </ComicCol>
  );
}

export default ComicsGallery;
