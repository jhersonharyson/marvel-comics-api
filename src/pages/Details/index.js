import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import MainComicsDetail from "../../components/MainComicsDetail";
import Store from "./../../context/provider";

function Details() {
  const store = useContext(Store);
  if(!store.selected?.id) return <Redirect to="/" />
  return (
    <MainComicsDetail comic={store.selected} handleSelect={store.dispatchSelected} />
  );
}

export default Details;
