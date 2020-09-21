import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import LoadMoreButton from ".";

const shalowView = (props) => (
    <LoadMoreButton {...props} />
);

describe("LoadMoreButton component specs", () => {
  
  it("should render LoadMoreButton component in the document", () => {
    
    const { container } = render(shalowView({name: "javascript"}));
    expect(container.querySelector("div")).toBeInTheDocument();

  });

});
