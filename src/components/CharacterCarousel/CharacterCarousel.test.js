import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, wait } from "@testing-library/react";
import * as React from "react";
import CharacterCarousel from ".";

const shalowView = (props) => <CharacterCarousel {...props} />;

describe("CharacterCarousel component specs", () => {
  it("should render 0 images in CharacterCarousel", async () => {
    const { container } = render(shalowView({ items: [] }));
    expect(container.querySelector("img")).toBeNull();
  });

  it("should render 1 image in CharacterCarousel", async () => {

    const { getAllByRole } = render(shalowView({ items: [<img />] }));
    expect(getAllByRole("img").length).toBe(1)

  });
});
