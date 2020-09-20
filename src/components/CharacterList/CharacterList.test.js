import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, wait, fireEvent, screen, act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import * as React from "react";
import CharacterList from ".";

const shalowView = (props) => <CharacterList {...props} />;

describe("CharacterList component specs", () => {
  it("should render 3 images in CharacterList", () => {
    const { getAllByRole } = render(
      shalowView({
        list: Array(3).fill(
          "http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_small.jpg"
        ),
      })
    );
    expect(getAllByRole("img").length).toBe(3);
  });
  it("should render previos and next buttons in CharacterList", () => {
    const { getByTestId } = render(
      shalowView({
        list: Array(3).fill(
          "http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_small.jpg"
        ),
      })
    );
    expect(getByTestId("character-list-prev")).toBeInTheDocument();
    expect(getByTestId("character-list-next")).toBeInTheDocument();
  });
  it("should move 1 position step in CharacterList", () => {
    const { container, getByTestId } = render(
      shalowView({
        list: Array(3).fill(
          "http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_small.jpg"
        ),
      })
    );
    // expect(getByTestId("character-list-prev")).toBeInTheDocument();
    // console.log(container.querySelectorAll("img")[0].getAttribute("alt"));

    fireEvent.click(getByTestId("character-list-next"));
    expect(container.querySelectorAll("img")[0].getAttribute("alt")).toBe("1");

  });
});
