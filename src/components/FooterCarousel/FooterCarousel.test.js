import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, wait } from "@testing-library/react";
import * as React from "react";
import FooterCarousel from ".";

const shalowView = (props) => <FooterCarousel {...props} />;

describe("FooterCarousel component specs", () => {
  it("should render 0 images in FooterCarousel", async () => {
    const { container } = render(shalowView({ items: [] }));
    expect(container.querySelector("img")).toBeNull();
  });

  it("should render 1 image in FooterCarousel", async () => {

    const { getAllByRole } = render(shalowView({ items: [<img />] }));
    expect(getAllByRole("img").length).toBe(1)

  });
});
