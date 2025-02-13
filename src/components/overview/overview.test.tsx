import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import Overview from ".";

function DirectArrow() {
  return <div>Direct Arrow</div>;
}

vi.mock("../direct-arrow", () => ({ default: DirectArrow }));

describe("Overview", () => {
  test("should render correctly", () => {
    render(
      <Overview
        label="label"
        timeFrame="Last 30 days"
        value="100"
        growthPercentage="+20%"
      />,
    );

    const label = screen.getByText("label");
    expect(label).toBeInTheDocument();

    const value = screen.getByText(/100/);
    expect(value).toBeInTheDocument();

    const timeFrame = screen.getByText("Last 30 days");
    expect(timeFrame).toBeInTheDocument();

    const growthPercentage = screen.getByText("+20%");
    expect(growthPercentage).toBeInTheDocument();
  });
});
