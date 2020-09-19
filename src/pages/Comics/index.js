import React, { useState } from "react";
import {
  Container,
  Box,
  Flex,
  TitleBar,
  ComicTitle,
  InformationBox,
  Title,
  SearchContainerField,
} from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import ComicsList, { MainComicsList } from "../../components/ComicsList";
import Search from "../../components/Search";
import ComicsGallery from "../../components/ComicsGallery";
import MainComicsDetail from "../../components/MainComicsDetail";

function Comics() {
  const [query, setQuery] = useState({
    query: "",
    filter: "",
    queryIsId: false,
  });
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);

  const onSerachChange = (query) => {
    setQuery(query);
    setLoading(query.length >= 3 ? true : false);
  };

  const onSearchEnd = () => {
    setLoading(false);
  };

  const handleSelect = (selected) => {
    setSelected(selected);

    setTimeout(
      () =>
        document.querySelector("#result").scrollIntoView({
          behavior: "smooth",
        }),
      200
    );
    
  };

  return (
    <>
      <Header />
      <SearchContainerField>
        <Search onChange={onSerachChange} loading={loading} />
        <ComicsGallery
          {...query}
          handleSelect={handleSelect}
          onSearchEnd={onSearchEnd}
        />
      </SearchContainerField>
      {/* {JSON.stringify(selected)} */}
      {selected.title && <MainComicsDetail comic={selected} />}
    </>
  );
}

export default Comics;
