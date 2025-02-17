import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Setting from "../src/pages/settings";
import { SettingProvider } from "../src/context/setting-context";

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
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <Setting />
      </SettingProvider>,
    );

    const appearanceLabel = screen.getByText("Appearance");
    expect(appearanceLabel).toBeInTheDocument();

    const fontSizeSetting = screen.getByText("Font Size Setting");
    expect(fontSizeSetting).toBeInTheDocument();

    const colorSchemeSetting = screen.getByText("Color Scheme Setting");
    expect(colorSchemeSetting).toBeInTheDocument();
  });
});
