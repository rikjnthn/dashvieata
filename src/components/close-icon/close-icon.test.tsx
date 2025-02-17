import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CloseIcon from ".";

describe("CloseIcon", () => {
  test("should render correctly", () => {
    render(<CloseIcon title="close" />);

    const bellIcon = screen.getByTitle("close");
    expect(bellIcon).toBeInTheDocument();

    expect(bellIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(bellIcon.querySelector("svg")).toHaveAttribute("height", "40");
  });
});
