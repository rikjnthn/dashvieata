import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductInput from ".";

window.URL.createObjectURL = vi.fn();
window.URL.revokeObjectURL = vi.fn();

describe("ProductInput", () => {
  test("should render correctly", () => {
    render(<ProductInput label="label" />);

    const label = screen.getByText("label");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("label");
    expect(input).toBeInTheDocument();
  });
});
