import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import MainHeroCharacter from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "../../context/provider";

const shalowView = (props) => (
  <StoreProvider
    value={{
      dispatch: jest.fn(),
      hero: { name: "spiderman" },
      loading: false,
      comics: [],
      characterId: 123456,
      id: "SPIDER_MAN"
    }}
  >
    <Router>
      <MainHeroCharacter {...props} />
    </Router>
  </StoreProvider>
);

describe("MainHeroCharacter component specs", () => {
  it("should render 'Character' in document's MainHeroCharacter", () => {
    
    const { getByText } = render(shalowView());
    expect(getByText("Character")).toBeInTheDocument();

  });

  it("should render link to comics page in document's MainHeroCharacter", () => {

    const { container } = render(shalowView());
    expect(container.querySelector("a")).toBeInTheDocument();

  });


  it("should render link with characterId", () => {

    const { container } = render(shalowView());
    expect(container.querySelector("a").getAttribute("href")).toBe("/comics?characterId=123456");

  });
});
