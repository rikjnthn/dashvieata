import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ImageIcon from ".";

describe("ImageIcon", () => {
  test("should render correctly", () => {
    render(<ImageIcon />);

    const imageIcon = screen.getByTitle("Image");
    expect(imageIcon).toBeInTheDocument();

    expect(imageIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(imageIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(imageIcon.querySelector("path")).toHaveAttribute("stroke", "black");
  });
});
