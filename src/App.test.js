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

//   it("should render Router in App main component", () => {
//     const { getByTestId } = render(shalowView());
//     expect(getByTestId("app-global-styles")).toBeInTheDocument();
//   });

  // it("should render Actors name in document's App", () => {
  //   const { getByText } = render(shalowView());
  //   expect(getByText(ActorNames.BLACK_PANTHER)).toBeInTheDocument();
  //   expect(getByText(ActorNames.SPIDER_MAN)).toBeInTheDocument();
  //   expect(getByText(ActorNames.IRON_MAN)).toBeInTheDocument();
  // });
});
