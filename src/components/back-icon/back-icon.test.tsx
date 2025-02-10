import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BackIcon from ".";

describe("BackIcon", () => {
  test("should render correctly", () => {
    render(<BackIcon />);

    const backIcon = screen.getByTitle("Back");
    expect(backIcon).toBeInTheDocument();

    expect(backIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(backIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(backIcon.querySelector("path")).toHaveAttribute("fill", "black");
  });
});
