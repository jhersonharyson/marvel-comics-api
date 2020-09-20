import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import Search from ".";

const shalowView = (props) => <Search {...props} />;

describe("Search component specs", () => {
  it("should render searchbar form in the document", () => {
    const { getByTestId } = render(shalowView());
    expect(getByTestId("search-searchbar-input")).toBeInTheDocument();
  });

  it("should initilize input value with spider", async () => {
    const handleChange = jest.fn();
    const { getByTestId, getByText, getByRole, findByTestId } = render(
      shalowView({
        onChange: handleChange,
        loading: false,
        initilize: { query: "spider" },
      })
    );
    const inputElement = await getByTestId("search-searchbar-input");
    expect(inputElement.value).toBe("spider");
  });

  it("should change input value to spiderman", async () => {
    const handleChange = jest.fn();
    const { getByTestId, getByText, getByRole, findByTestId } = render(
      shalowView({
        onChange: handleChange,
        loading: false,
        initilize: { query: "spider" },
      })
    );
    const inputElement = await getByTestId("search-searchbar-input");
    userEvent.type(inputElement, "spiderman");
    expect(inputElement.value).toBe("spiderman");
  });

  it("should call handleChange after input change value", async () => {
    const handleChange = jest.fn();
    const { getByTestId, getByText, getByRole, findByTestId } = render(
      shalowView({
        onChange: handleChange,
        loading: false,
        initilize: { query: "spider" },
      })
    );
    const inputElement = await getByTestId("search-searchbar-input");
    userEvent.type(inputElement, "spiderman");
    expect(handleChange).toBeCalled();
  });

  it("should render searchbar form in the document", () => {
    const { getByTestId } = render(shalowView());
    expect(getByTestId("search-searchbar-input")).toBeInTheDocument();
  });
});
