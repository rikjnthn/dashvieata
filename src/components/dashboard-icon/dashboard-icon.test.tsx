import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DashboardIcon from ".";

describe("DashboardIcon", () => {
  test("should render correctly", () => {
    render(<DashboardIcon />);

    const dashboardIcon = screen.getByTitle("Dashboard");
    expect(dashboardIcon).toBeInTheDocument();

    expect(dashboardIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(dashboardIcon.querySelector("svg")).toHaveAttribute("height", "40");
  });
});
