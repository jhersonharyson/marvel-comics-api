import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import { HeaderBar, Logo, Navbar, Searchbar, Col, ComicsLabel } from "./styles";

function Header() {
  const [query, setQuery] = useState("");
  const comicsRouter = window.location.pathname.startsWith("/comics");

  const handleSubmmit = (e) => {
    e.preventDefault();
    handleSelected(query);
  };

  const handleSelected = (comic) => {
    return (window.location.href = `/comics?comicId=${comic}`);
  };

  return (
    <HeaderBar>
      <Col>
        <Logo src={require("../../assets/images/logo.png")} width="60" />
        <Navbar>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
        </Navbar>
        {!comicsRouter && (
          <form onSubmit={handleSubmmit}>
            <Searchbar>
              <input
                onChange={({ target }) => setQuery(target.value)}
                value={query}
                type="text"
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit">
                <FiSearch className="icon" size={18} color={"#dd4250"} />
              </button>
            </Searchbar>
          </form>
        )}
      </Col>
      <Col>{comicsRouter && <ComicsLabel>Comics</ComicsLabel>}</Col>
    </HeaderBar>
  );
}

export default Header;
