import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReadMoreButton from ".";

const shalowView = (props) => (
    <ReadMoreButton {...props} />
);

describe("ReadMoreButton component specs", () => {
  
  it("should render ReadMoreButton component in the document", () => {
    
    const { container } = render(shalowView({name: "javascript"}));
    expect(container.querySelector("div")).toBeInTheDocument();

  });

});
