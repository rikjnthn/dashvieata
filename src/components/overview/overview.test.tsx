import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import Overview from ".";
import { SettingProvider } from "../../context/setting-context";

function DirectArrow() {
  return <div>Direct Arrow</div>;
}

vi.mock("../direct-arrow", () => ({ default: DirectArrow }));

describe("Overview", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <Overview
          label="label"
          timeFrame="Last 30 days"
          value="100"
          growth={0.1}
        />
      </SettingProvider>,
    );

    const label = screen.getByText("label");
    expect(label).toBeInTheDocument();

    const value = screen.getByText(/100/);
    expect(value).toBeInTheDocument();

    const timeFrame = screen.getByText("Last 30 days");
    expect(timeFrame).toBeInTheDocument();

    const growthPercentage = screen.getByText("+10%");
    expect(growthPercentage).toBeInTheDocument();
  });
});
