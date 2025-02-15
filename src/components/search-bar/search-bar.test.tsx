import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchBar from ".";

function SearchIcon() {
  return <div>Search Icon</div>;
}

vi.mock("../search-icon", () => ({ default: SearchIcon }));

describe("SearchBar", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();

    const searchIcon = screen.getByText("Search Icon");
    expect(searchIcon).toBeInTheDocument();
  });
});
