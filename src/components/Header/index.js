import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import { HeaderBar, Logo, Navbar, Searchbar, Col, ComicsLabel } from "./styles";

function Header({ comicRouter }) {
  const [query, setQuery] = useState("");
  const comicsRouter =
    comicRouter || window.location.pathname.startsWith("/comics");

  const handleSubmmit = (e) => {
    e.preventDefault();
    handleSelected(query);
  };

  const handleSelected = (comic) => {
    return window.location.assign(`/comics?comicId=${comic}`);
  };

  return (
    <HeaderBar>
      <Col>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Logo src={require("../../assets/images/logo.png")} width="60" />
          <Navbar>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
          </Navbar>
        </div>
        <div className="search">
          {!comicsRouter && (
            <Searchbar
              data-testid="header-search-form"
              onSubmit={handleSubmmit}
            >
              <input
                data-testid="header-search-input"
                onChange={({ target }) => setQuery(target.value)}
                value={query}
                type="text"
                autoComplete="off"
                spellCheck={false}
              />
              <button data-testid="header-search-button" type="submit">
                <FiSearch className="icon" size={18} color={"#dd4250"} />
              </button>
            </Searchbar>
          )}
        </div>
      </Col>
      <Col>
        {comicsRouter && (
          <ComicsLabel data-testid="header-comics-label">Comics</ComicsLabel>
        )}
      </Col>
    </HeaderBar>
  );
}

export default Header;
