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

  body {
    background-color: #dd4250;
  }
`;
export default GlobalStyle;
