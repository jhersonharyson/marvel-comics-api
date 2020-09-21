import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ComicsGallery from "../../components/ComicsGallery";
import Header from "../../components/Header";
import Search from "../../components/Search";
import ViewModel from "../../models/ViewModel";
import Store from "./../../context/provider";
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
  const store = useContext(Store);

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
    store.dispatchSelected(selected);
    return;
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
        <Redirect 
          push
          to={{
            pathname: "/detail",
            search: `?filter=${query.filter}&${query.filter === ViewModel.COMICS ? 'comicId' : 'characterId'}=${query.query}&id${selected.id}`,
          }}
        />
      )}
    </>
  );
}

export default Comics;
