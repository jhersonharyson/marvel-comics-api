import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import MainHeroList from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "../../context/provider";
import HerosModel, { ActorNames } from './../../models/HerosModel'

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
      <MainHeroList {...props} />
    </Router>
  </StoreProvider>
);

describe("MainHeroList component specs", () => {
  it("should render Character name in document's MainHeroList", () => {
    
    const { getByText } = render(shalowView());
    expect(getByText(HerosModel.BLACK_PANTHER)).toBeInTheDocument();
    expect(getByText(HerosModel.SPIDER_MAN)).toBeInTheDocument();
    expect(getByText(HerosModel.IRON_MAN)).toBeInTheDocument();

  });

  it("should render Actors name in document's MainHeroList", () => {
    
    const { getByText } = render(shalowView());
    expect(getByText(ActorNames.BLACK_PANTHER)).toBeInTheDocument();
    expect(getByText(ActorNames.SPIDER_MAN)).toBeInTheDocument();
    expect(getByText(ActorNames.IRON_MAN)).toBeInTheDocument();

  });

});
