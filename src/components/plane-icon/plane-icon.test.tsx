import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PlaneIcon from ".";

describe("PlaneIcon", () => {
  test("should render correctly", () => {
    render(<PlaneIcon />);

    const planeIcon = screen.getByTitle("Send");
    expect(planeIcon).toBeInTheDocument();

    expect(planeIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(planeIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(planeIcon.querySelector("path")).toHaveAttribute("stroke", "black");
  });
});
