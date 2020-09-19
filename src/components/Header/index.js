import React from "react";

import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import { HeaderBar, Logo, Navbar, Searchbar, Col, ComicsLabel } from "./styles";

function Header() {
  const comicsRouter = window.location.pathname.startsWith("/comics");

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
          <Searchbar>
            <button>
              <FiSearch className="icon" size={18} color={"#dd4250"} />
            </button>
            <input />
          </Searchbar>
        )}
      </Col>
      <Col>{comicsRouter && <ComicsLabel>Comics</ComicsLabel>}</Col>
    </HeaderBar>
  );
}

export default Header;
