import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DirectArrow from ".";

describe("DirectArrow", () => {
  test("should render correctly", () => {
    render(<DirectArrow title="Increase" />);

    const directArrow = screen.getByTitle("Increase");
    expect(directArrow).toBeInTheDocument();

    expect(directArrow.querySelector("svg")).toHaveAttribute("width", "25");
    expect(directArrow.querySelector("svg")).toHaveAttribute("height", "25");
  });
});
