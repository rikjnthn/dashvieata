import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchIcon from ".";

describe("SearchIcon", () => {
  test("should render correctly", () => {
    render(<SearchIcon />);

    const searchIcon = screen.getByTitle("Search");
    expect(searchIcon).toBeInTheDocument();

    expect(searchIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(searchIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(searchIcon.querySelector("path")).toHaveAttribute(
      "stroke",
      "#808080",
    );
  });
});
