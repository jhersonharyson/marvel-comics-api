import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Loader from "../Loader";
import { Searchbar, Container, Dropdown, DropdownContent } from "./styles";

function Search({ loading = true, onChange = () => {} }) {
  const [query, setQuery] = useState("");
  const [queryIsId, setQueryIsId] = useState(false);
  const [filter, setFilter] = useState("COMICS");

  const filters = { COMICS: "Comics", SUPER_HEROS: "Super Heros" };
  const placeholders = { COMICS: 'Type a HQ\'s title or a id...', SUPER_HEROS: 'Type Super Hero name or a id...' };

  let timer;

  useEffect(() => {
    return clearTimeout(timer);
  });

  const handleTextChange = ({ target }) => {
    const { value } = target;
    clearTimeout(timer);

    timer = setTimeout(() => {
      setQuery(value);
      try{
        setQueryIsId(Number(parseInt(query)) != NaN)
      }catch(e){
        setQueryIsId(false)
      }
      onChange({query, filter, queryIsId});
    }, 500);
  };

  return (
    <Container>
      <Searchbar>
        <label class="dropdown">
          <div class="dd-button">{filters[filter]} </div>
          <input type="checkbox" class="dd-input" id="test" />
          <ul class="dd-menu">
            <li onClick={() => setFilter("COMICS")}>
              <em>{filters.COMICS}</em>
            </li>
            <li class="divider"></li>
            <li onClick={() => setFilter("SUPER_HEROS")}>
              <em>{filters.SUPER_HEROS}</em>
            </li>
          </ul>
        </label>

        <input onChange={handleTextChange} placeholder={placeholders[filter]} />

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
