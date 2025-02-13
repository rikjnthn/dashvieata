import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import GotoIcon from ".";

describe("GotoIcon", () => {
  test("should render correctly", () => {
    render(<GotoIcon />);

    const gotoIcon = screen.getByTitle("See more");
    expect(gotoIcon).toBeInTheDocument();

    expect(gotoIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(gotoIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(gotoIcon.querySelector("path")).toHaveAttribute("fill", "black");
  });
});
