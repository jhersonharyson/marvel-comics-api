import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Names from ".";

const shalowView = (props) => (
    <Names {...props} />
);

describe("Names component specs", () => {
  
  it("should render Names component in the document", () => {

    const { getAllByText } = render(shalowView({name: "javascript"}));
    expect(getAllByText("javascript").length).toBe(4);
    
  });

});
