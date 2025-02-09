import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Setting from "../src/pages/settings";

function FontSizeSetting() {
  return <div>Font Size Setting</div>;
}

function ColorSchemeSetting() {
  return <div>Color Scheme Setting</div>;
}

vi.mock("../src/components/font-size-setting", () => ({
  default: FontSizeSetting,
}));
vi.mock("../src/components/color-scheme-setting", () => ({
  default: ColorSchemeSetting,
}));

describe("Settings Page", () => {
  test("should render correctly", () => {
    render(<Setting />);

    const appearanceLabel = screen.getByText("Appearance");
    expect(appearanceLabel).toBeInTheDocument();

    const fontSizeSetting = screen.getByText("Font Size Setting");
    expect(fontSizeSetting).toBeInTheDocument();

    const colorSchemeSetting = screen.getByText("Color Scheme Setting");
    expect(colorSchemeSetting).toBeInTheDocument();
  });
});
