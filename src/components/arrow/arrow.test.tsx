import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ArrowIcon from ".";

describe("ArrowIcon", () => {
  test("should render correctly", () => {
    render(<ArrowIcon title="Arrow" />);

    const arrowIcon = screen.getByTitle("Arrow");
    expect(arrowIcon).toBeInTheDocument();

    expect(arrowIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(arrowIcon.querySelector("svg")).toHaveAttribute("height", "40");
  });
});
