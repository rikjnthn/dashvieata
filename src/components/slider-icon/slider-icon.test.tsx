import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SliderIcon from ".";

describe("SliderIcon", () => {
  test("should render correctly", () => {
    render(<SliderIcon />);

    const sliderIcon = screen.getByTitle("Setting transaction");
    expect(sliderIcon).toBeInTheDocument();

    expect(sliderIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(sliderIcon.querySelector("svg")).toHaveAttribute("height", "40");
    sliderIcon.querySelectorAll("path").forEach((el) => {
      expect(el).toHaveAttribute("fill", "black");
    });
  });
});
