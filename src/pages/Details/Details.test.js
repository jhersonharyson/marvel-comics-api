import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import { StoreProvider } from "../../context/provider";
import {BrowserRouter as Router } from 'react-router-dom'
import Details from '.'
const shalowView = (props, initialProvideValues) => (
  <StoreProvider
    value={{
      dispatch: jest.fn(),
      hero: { name: "spiderman" },
      loading: false,
      comics: [],
      characterId: 123456,
      selected: { id: 123456, thumbnail: {path: ''} },
      ...initialProvideValues
    }}
  >
    <Router>
      <Details {...props} />
    </Router>
  </StoreProvider>
);

describe("Details component specs", () => {
  it("should dont render Details Component", async () => {
    const { container } = render(shalowView({ items: [] }, {selected: null}));
    expect(container).toBeInstanceOf(HTMLDivElement);
  });

  it("should render Details Component", async () => {
    const { container } = render(shalowView({ items: [] }));
    expect(container).toBeInTheDocument();
  });
});
