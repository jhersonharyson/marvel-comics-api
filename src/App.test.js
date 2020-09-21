import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import App from "./App.js";

const shalowView = (props) => <App {...props} />;

describe("App component specs", () => {
  it("should render App main component", () => {
    const { getByTestId } = render(shalowView());
    expect(getByTestId("app-main-div")).toBeInTheDocument();
  });
});
