import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, wait } from "@testing-library/react";
import * as React from "react";
import Gallery from ".";

const shalowView = (props) => <Gallery {...props} />;

describe("Gallery component specs", () => {
  it("should render 0 images in Gallery", async () => {
    const { container } = render(shalowView({ items: [] }));
    expect(container.querySelector("img")).toBeNull();
  });

  it("should render a image in Gallery", async () => {

    const { getAllByRole } = render(shalowView({ items: [<img />] }));
    expect(getAllByRole("img").length).toBe(1)

  });
});
