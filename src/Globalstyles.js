import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  
   

  * {
		margin: 0;
		padding: 0;
	}

	* {
		font-family: "Rubik", sans-serif;
  }

  a,p,h1,h2,h3,div {
    color: #fff;
  }
  
  a {
    font-weight: 200;
  }

  body {
    background-color: #0e2c48;
    scrollbar-width: thin;          /* "auto" or "thin"  */
    scrollbar-color: blue orange;
  }

  input {
    color: #000;
  }

  .icon{
    color:  #0e2c48 !important;
  }



  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 2px;
  }
  *::-webkit-scrollbar-track {
    background: #534c3e3d;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #534c3e3d;
    border-radius: 20px;
    border: 3px solid #534c3e3d;
  }
`;
export default GlobalStyle;
