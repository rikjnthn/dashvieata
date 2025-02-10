import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PlusIcon from ".";

describe("PlusIcon", () => {
  test("should render correctly", () => {
    render(<PlusIcon />);

    const plusIcon = screen.getByTitle("Add product");
    expect(plusIcon).toBeInTheDocument();

    expect(plusIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(plusIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(plusIcon.querySelector("path")).toHaveAttribute("stroke", "black");
  });
});
