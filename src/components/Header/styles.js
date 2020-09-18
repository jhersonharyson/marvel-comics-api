import styled from "styled-components";
import logo from "../../assets/images/logo.png";

export const HeaderBar = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	padding: 50px;
	box-sizing: border-box ;
`;

export const Logo = styled.img.attrs({
	src: logo,
	alt: "logo",
})``;

export const Navbar = styled.ul`
	display: flex;
	flex-direction: row;

	li {
		list-style: none;
		padding: 0px 30px;
		font-size: 18px;
	}
	
	li a {
		color: #fff;
		text-decoration: none;
	}
`;

export const Searchbar = styled.form`
	display: flex;	
	align-items: center;
	background-color: #fff;
	border-radius: 25px;
	padding: 8px 8px;
	
	input {
		border: none;
		outline: 0;
		margin-left: 5px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: none;
	}
`;