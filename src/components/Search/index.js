import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Loader from "../Loader";
import useDebounce from "../UseDebounce";
import { Searchbar, Container, Dropdown, DropdownContent } from "./styles";

function Search({ loading = true, onChange = () => {} }) {
  const [query, setQuery] = useState("");
  const [queryIsId, setQueryIsId] = useState(false);
  const [filter, setFilter] = useState("COMICS");

  const filters = { COMICS: "Comics", SUPER_HEROS: "Super Heros" };
  const placeholders = {
    COMICS: "Type a HQ's title or a id...",
    SUPER_HEROS: "Type Super Hero name or a id...",
  };

  let timer;

  useEffect(() => {
    return clearTimeout(timer);
  }, []);

  const debouncedSearchTerm = useDebounce(query, 1000);


  useEffect(() => {
    if (debouncedSearchTerm) {
      // Fire off our API call
      console.log({ query: debouncedSearchTerm, filter, queryIsId });
      onChange({ query: debouncedSearchTerm, filter, queryIsId });
    }
  }, [debouncedSearchTerm]);

  const handleTextChange = ({ target: {value} }) => {
    setQuery(value);
    try {
      setQueryIsId(Number(parseInt(value)) != NaN);
    } catch (e) {
      setQueryIsId(false);
    }
  };

  return (
    <Container>

      <Searchbar>
        <label className="dropdown">
          <div className="dd-button">{filters[filter]} </div>
          <input type="checkbox" className="dd-input" id="test" />
          <ul className="dd-menu">
            <li onClick={() => setFilter("COMICS")}>
              <em>{filters.COMICS}</em>
            </li>
            <li className="divider"></li>
            <li onClick={() => setFilter("SUPER_HEROS")}>
              <em>{filters.SUPER_HEROS}</em>
            </li>
          </ul>
        </label>

        <input
          onChange={handleTextChange}
          placeholder={placeholders[filter]}
          value={query}
        />

        {loading ? (
          <Loader />
        ) : (
          <button>
            <FiSearch className="icon" size={18} color={"#dd4250"} />
          </button>
        )}
      </Searchbar>
    </Container>
  );
}

export default Search;