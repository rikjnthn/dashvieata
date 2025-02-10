import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductIcon from ".";

describe("ProductIcon", () => {
  test("should render correctly", () => {
    render(<ProductIcon />);

    const productIcon = screen.getByTitle("Products");
    expect(productIcon).toBeInTheDocument();

    expect(productIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(productIcon.querySelector("svg")).toHaveAttribute("height", "40");
  });
});
