import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, wait } from "@testing-library/react";
import * as React from "react";
import ComicsCarousel from ".";

const shalowView = (props) => <ComicsCarousel {...props} />;

describe("ComicsCarousel component specs", () => {
  it("should render 0 images in ComicsCarousel", async () => {
    const { container } = render(shalowView({ items: [] }));
    expect(container.querySelector("img")).toBeNull();
  });

  it("should render 1 image in ComicsCarousel", async () => {

    const { getAllByRole } = render(shalowView({ items: [<img />] }));
    expect(getAllByRole("img").length).toBe(1)

  });
});
