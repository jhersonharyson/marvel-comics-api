import React from "react";

import { HeaderBar, Logo, Navbar, Searchbar } from "./styles";
import {FiSearch} from 'react-icons/fi'
import { Link } from "react-router-dom";

function Header() {
	return (
		<HeaderBar>
			<Link to="/"><Logo src={require("../../assets/images/logo.png")} width="100" /></Link>

			<Navbar>
				<li>
					<Link to="">About</Link>
				</li>
				<li>
					<Link to="">Contact</Link>
				</li>
			</Navbar>
			<Searchbar>
				<button><FiSearch className="icon" size={18} /></button>
				<input />
				
			</Searchbar>
		</HeaderBar>
	);
}

export default Header;
