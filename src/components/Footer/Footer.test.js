import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import Footer from ".";
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
    }}
  >
    <Router>
      <Footer {...props} />
    </Router>
  </StoreProvider>
);

describe("Footer component specs", () => {
  it("should render context in document's footer label", () => {
    
    const { getByText } = render(shalowView());
    expect(getByText("All comics for spiderman")).toBeInTheDocument();

  });

  it("should render link to comics page in document's footer", () => {

    const { container } = render(shalowView());
    expect(container.querySelector("a")).toBeInTheDocument();

  });


  it("should render link with characterId", () => {

    const { container } = render(shalowView());
    expect(container.querySelector("a").getAttribute("href")).toBe("/comics?characterId=123456");

  });
});
