import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navigation from ".";

function NavOption() {
  return <div>Nav Option</div>;
}

vi.mock("../nav-option", () => ({
  default: NavOption,
}));

describe("Navigation", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<Navigation />);

    const navLink = screen.getByRole("img").parentElement?.parentElement;
    expect(navLink).toBeInTheDocument();

    const logo = screen.getByAltText("DashVieata");
    expect(logo).toHaveAttribute("title", "DashVieata");
    expect(logo).toBeInTheDocument();

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();

    const navOptions = screen.getAllByText("Nav Option");
    navOptions.forEach((el) => expect(el).toBeInTheDocument());

    const copyright = screen.getByText(/all right reserved/);
    expect(copyright).toBeInTheDocument();
  });
});
