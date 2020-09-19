import React, { useState, useEffect } from "react";
import ComicsService from "../../services/ComicsService";
import ComicsCarousel from "../ComicsCarousel";
import { LoadButton, MainComicsList, ItemComicsList } from "../ComicsList";
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
    const fetch = async () => {
      if (query.length > 3) {
        setLoading(true);
        const response = await new ComicsService().getComicResourceByStartWithTitle(
          query,
          index * limit,
          limit
        );
        console.log(response);
        const { offset, results, total, count } = response;
        onSearchEnd();
        setOffset(offset);
        setCount(count);
        setTotal(total);
        setResults(results);
        setLoading(false);
      }
    };
    fetch();
  }, [index, query]);

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
            {total == 0 && query
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
        {query &&
          !(total == 0 && query) && (
            <PaginatorInfo side="flex-end">
              {index + 1} / {Math.ceil(total / limit)}
            </PaginatorInfo>
          )}
      </ComicRow>
    </ComicCol>
  );
}

export default ComicsGallery;
