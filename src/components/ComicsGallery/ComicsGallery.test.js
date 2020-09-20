import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import ComicsGallery from ".";

const shalowView = (props) => <ComicsGallery {...props} />;

describe("ComicsGallery component specs", () => {
  it("should render minimun 3 characters for a searching in document's ComicsGallery", () => {
    const { getByText } = render(
      shalowView({ query: "as" })
    );
    expect(getByText("Ops... type minimun 3 characters for a searching")).toBeInTheDocument();
  });

  it("should render X result found for \"spider\" in document's ComicsGallery", () => {
    const { getByText } = render(
      shalowView({ query: "spider" })
    );
    expect(getByText(/result found for \"spider\"/)).toBeInTheDocument();
  });

  
  // it("should render Actors name in document's ComicsGallery", () => {
  //   const { getByText } = render(shalowView());
  //   expect(getByText(ActorNames.BLACK_PANTHER)).toBeInTheDocument();
  //   expect(getByText(ActorNames.SPIDER_MAN)).toBeInTheDocument();
  //   expect(getByText(ActorNames.IRON_MAN)).toBeInTheDocument();
  // });
});
