import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FontSizeSetting from ".";

function Dropdown() {
  return <div>Dropdown</div>;
}

vi.mock("../dropdown", () => ({
  default: Dropdown,
}));

describe("FontSizeSetting", () => {
  test("should render correctly", () => {
    render(<FontSizeSetting />);

    const label = screen.getByText("Font Size");
    expect(label).toBeInTheDocument();

    const dropdown = screen.getByText("Dropdown");
    expect(dropdown).toBeInTheDocument();
  });
});
