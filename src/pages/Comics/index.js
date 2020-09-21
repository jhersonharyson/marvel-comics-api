import React, { useState, useEffect } from "react";
import ComicsGallery from "../../components/ComicsGallery";
import Header from "../../components/Header";
import MainComicsDetail from "../../components/MainComicsDetail";
import Search from "../../components/Search";
import ViewModel from "../../models/ViewModel";
import { SearchContainerField } from "./styles";

function Comics() {
  const [initilize, setInitialize] = useState({});
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    query: "",
    filter: "",
    queryIsId: false,
  });

  useEffect(() => {
    const comicId = getComicIdByQueryUrl(getUrlParams());
    const characterId = getCharacterIdByQueryUrl(getUrlParams());
    setSearchInitialize(comicId, characterId);
  }, []);

  const getUrlParams = () => {
    const params = decodeURI(window.location.search)
      ?.replace("?", "")
      ?.split("&")
      ?.map((query) => ({ [query.split("=")[0]]: query.split("=")[1] }))
      ?.reduce((acc, query) => {
        acc = {
          ...acc,
          ...query,
        };
        return acc;
      }, {});

    return params;
  };

  const getComicIdByQueryUrl = (query) => query["comicId"];

  const getCharacterIdByQueryUrl = (query) => query["characterId"];

  const setSearchInitialize = (comic, character) => {
    let query;
    let filter;

    if (!!comic) {
      query = comic;
      filter = ViewModel.COMICS;
    } else if (!!character) {
      query = character;
      filter = ViewModel.CHARACTER;
    }
    setInitialize({ query, filter });
    !!query && setLoading(true);
  };

  const onSerachChange = (search) => {
    setQuery(search);
    setLoading(`${search.query}`.length >= 3 ? true : false);
  };

  const onSearchEnd = () => {
    setLoading(false);
  };

  const handleSelect = (selected) => {
    setSelected(selected);

    setTimeout(() => {
      const result = document.querySelector("#result");
      !!result &&
        result.scrollIntoView({
          behavior: "smooth",
        });
    }, 200);
  };

  return (
    <>
      <Header />
      <SearchContainerField>
        <Search
          onChange={onSerachChange}
          loading={loading}
          initilize={initilize}
        />
        <ComicsGallery
          {...query}
          handleSelect={handleSelect}
          onSearchEnd={onSearchEnd}
        />
      </SearchContainerField>
      {!!selected.id && (
        <MainComicsDetail comic={selected} handleSelect={handleSelect} />
      )}
    </>
  );
}

export default Comics;
