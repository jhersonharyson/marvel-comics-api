import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import App from ".";
import { StoreProvider } from "../context/provider";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <StoreProvider
      value={{
        dispatch: jest.fn(),
        hero: { name: "spiderman" },
        loading: false,
        comics: [],
        characterId: 123456,
        id: "SPIDER_MAN",
      }}
    >
      <Router history={history}>
        <App />
      </Router>
    </StoreProvider>
  );

  fireEvent.click(getByText(/All comics for spiderman/i));
  expect(container.innerHTML).toMatch("Home");
});

test("Rendering/navigating for Comics page", () => {
  const history = createMemoryHistory();
  history.push("/comics");
  const { getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByTestId("search-searchbar-input")).toBeInTheDocument();
});
