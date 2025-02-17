import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import SearchBar from ".";
import { SettingProvider } from "../../context/setting-context";

function SearchIcon() {
  return <div>Search Icon</div>;
}

vi.mock("../search-icon", () => ({ default: SearchIcon }));

describe("SearchBar", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <SearchBar setSearch={vi.fn()} />
      </SettingProvider>,
    );

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();

    const searchIcon = screen.getByText("Search Icon");
    expect(searchIcon).toBeInTheDocument();
  });

  test("should called setSearch when user type to input", async () => {
    const setSearchMock = vi.fn();
    render(
      <SettingProvider>
        <SearchBar setSearch={setSearchMock} />
      </SettingProvider>,
    );

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "here-some-input");

    expect(setSearchMock).toHaveBeenCalled();
    expect(setSearchMock).toHaveBeenCalledWith("here-some-input");
  });
});
