import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from ".";

const shalowView = (props) => (
  <Router>
    <Header {...props} />
  </Router>
);

describe("Header component specs", () => {
  it("should change input label to hello", () => {
    const { getByTestId } = render(shalowView());
    const inputElement = getByTestId("header-search-input");
    fireEvent.change(inputElement, { target: { value: "hello" } });
    expect(inputElement.value).toEqual("hello");
  });

  it("should render search form in the document", () => {
    const { getByTestId } = render(shalowView());
    expect(getByTestId("header-search-form")).toBeInTheDocument();
  });

  it("should render Comics label in the document's header", () => {
    const { getByTestId } = render(shalowView({ comicRouter: true }));
    expect(getByTestId("header-comics-label")).toBeInTheDocument();
  });

  it("should don't render Comics label in the document's header", () => {
    const { getAllByText } = render(shalowView({ comicRouter: false }));
    expect(getAllByText("Comics").length).toBe(1)
  });
});
