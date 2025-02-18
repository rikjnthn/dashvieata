import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import Loading from ".";

describe("Loading", () => {
  test("should render correctly", () => {
    render(<Loading />);

    const loading = screen.getByTitle("Loading");
    expect(loading).toBeInTheDocument();
    expect(loading.querySelector("svg")).toHaveAttribute("width", "40");
    expect(loading.querySelector("svg")).toHaveAttribute("height", "40");
  });
});
