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
    height: 2px;
  }
  *::-webkit-scrollbar-track {
    background: #534c3e3d;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #534c3e3d;
    border-radius: 20px;
    border: 3px solid #534c3e3d;
  }
  *::-webkit-scrollbar-thumb:horizontal{
    background-color: #000;
    border-radius: 10px;
    width: 1px;
  }

  *::-webkit-scrollbar:horizontal {
    width: 2px;
  }



  /*! Flickity v2.1.2
https://flickity.metafizzy.co
---------------------------------------------- */

.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus {
  outline: none;
}

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
  overflow: visible;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
}

.flickity-button:hover {
  background: white;
  cursor: pointer;
}

.flickity-button:focus {
  outline: none;
  box-shadow: 0 0 0 5px #19f;
}

.flickity-button:active {
  opacity: 0.6;
}

.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  /* prevent disabled button from capturing pointer up event. #716 */
  pointer-events: none;
}

.flickity-button-icon {
  fill: #333;
}

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  /* vertically center */
  transform: translateY(-50%);
}

.flickity-prev-next-button.previous {
  left: 10px;
}
.flickity-prev-next-button.next {
  right: 10px;
}
/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

/* ---- page dots ---- */

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots {
  direction: rtl;
}

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px 0 0;
  margin-bottom: -15px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
}

`;
export default GlobalStyle;
