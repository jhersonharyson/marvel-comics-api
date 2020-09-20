import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from ".";

const shalowView = (props) => (
    <Loader {...props} />
);

describe("Loader component specs", () => {
  
  it("should render loader in the document", () => {
    const { getByTestId } = render(shalowView());
    expect(getByTestId("loader-load-div")).toBeInTheDocument();
  });

});
