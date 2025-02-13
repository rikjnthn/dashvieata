import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Graph from ".";

describe("Graph", () => {
  test("should render correctly", () => {
    render(<Graph />);

    const revenue = screen.getByText("Revenue");
    expect(revenue).toBeInTheDocument();

    const smoothLine = screen.getByText("Smooth line");
    expect(smoothLine).toBeInTheDocument();

    const smoothLineSwitch = screen.getByTitle("Smooth line");
    expect(smoothLineSwitch).toBeInTheDocument();
  });

  test("should handle user click", async () => {
    render(<Graph />);

    const smoothLineSwitch = screen.getByTitle("Smooth line");
    expect(smoothLineSwitch).toHaveClass("border-grey-700");

    await userEvent.click(smoothLineSwitch);

    expect(smoothLineSwitch).toHaveClass(
      "switch-true border-blue-200 bg-blue-200",
    );
  });
});
