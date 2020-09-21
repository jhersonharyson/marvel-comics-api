import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter as Router , createHistory } from "react-router-dom";
import MainComicsDetail from ".";



const shalowView = (props) => (
  <Router >
    <MainComicsDetail {...props} />
  </Router>
);

describe("MainComicsDetail component specs", () => {
  it("should render Character name in document's MainComicsDetail", () => {
    const { getAllByText, getAllByRole } = render(
      shalowView({ comic: { name: "spiderman", thumbnail: { path: "" } } })
    );
    expect(getAllByRole("heading")[0].textContent).toBe("spiderman");
  });

  it("should render Comic title in document's MainComicsDetail", () => {
    const { getAllByText, getAllByRole } = render(
      shalowView({
        comic: { title: "the spiderman #3", thumbnail: { path: "" } },
      })
    );
    expect(getAllByRole("heading")[0].textContent).toBe("the spiderman #3");
  });

  it("should render Chatacter/Comic description in document's MainComicsDetail", () => {
    const { getByText } = render(
      shalowView({
        comic: {
          description: "this is a spiderman resume",
          thumbnail: { path: "" },
        },
      })
    );
    expect(getByText("this is a spiderman resume")).toBeInTheDocument();
  });

  it("should render Chatacter/Comic is not avaliable description in document's MainComicsDetail", () => {
    const { getByText } = render(
      shalowView({ comic: { description: null, thumbnail: { path: "" } } })
    );
    expect(getByText("Not avaiable")).toBeInTheDocument();
  });

  it("should render Creator list in document's MainComicsDetail", () => {
    const { getByText } = render(
      shalowView({
        comic: { creators: [{ name: "creator1" }], thumbnail: { path: "" } },
      })
    );
    expect(getByText("creator1")).toBeInTheDocument();
  });

  it("should render Stories list in document's MainComicsDetail", () => {
    const { getByText } = render(
      shalowView({
        comic: { stories: [{ name: "storie1" }], thumbnail: { path: "" } },
      })
    );
    expect(getByText("storie1")).toBeInTheDocument();
  });

  it("should render Character list in document's MainComicsDetail", () => {
    const { getByText } = render(
      shalowView({
        comic: {
          characters: [{ name: "character1" }],
          thumbnail: { path: "" },
        },
      })
    );
    expect(getByText("character1")).toBeInTheDocument();
  });

  it("should render Events list in document's MainComicsDetail", () => {
    const { getByText } = render(
      shalowView({
        comic: { events: [{ name: "event1" }], thumbnail: { path: "" } },
      })
    );
    expect(getByText("event1")).toBeInTheDocument();
  });

  it("should render Urls list in document's MainComicsDetail", () => {
    const { getByText } = render(
      shalowView({
        comic: { urls: [{ type: "WIKI1" }], thumbnail: { path: "" } },
      })
    );
    expect(getByText("WIKI1")).toBeInTheDocument();
  });

  // it("should render Actors name in document's MainComicsDetail", () => {
  //   const { getByText } = render(shalowView());
  //   expect(getByText(ActorNames.BLACK_PANTHER)).toBeInTheDocument();
  //   expect(getByText(ActorNames.SPIDER_MAN)).toBeInTheDocument();
  //   expect(getByText(ActorNames.IRON_MAN)).toBeInTheDocument();
  // });
});
