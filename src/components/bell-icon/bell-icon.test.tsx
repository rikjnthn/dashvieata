import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BellIcon from ".";

describe("BellIcon", () => {
  test("should render correctly", () => {
    render(<BellIcon />);

    const bellIcon = screen.getByTitle("Notification");
    expect(bellIcon).toBeInTheDocument();

    expect(bellIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(bellIcon.querySelector("svg")).toHaveAttribute("height", "40");

    bellIcon.querySelectorAll("path").forEach((el) => {
      expect(el).toHaveAttribute("stroke", "black");
    });
  });
});
