import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import ComicsList from ".";

const shalowView = (props) => <ComicsList {...props} />;

describe("ComicsList component specs", () => {
  it("should render images in ComicsList", async () => {
    const callback = jest.fn()
    const { container } = render(shalowView({ comic: { id: 1, title: '',thumbnail: { path: ''}}, callback: callback})); 
    expect(container.querySelector("img")).toBeInTheDocument();
  });

  it("should callback images click in ComicsList", async () => {
    const callback = jest.fn()
    const { container } = render(shalowView({ comic: { id: 1, title: '',thumbnail: { path: ''}}, callback: callback}));
    container.querySelector("div").click()
    expect(callback).toBeCalled();
  });

});
