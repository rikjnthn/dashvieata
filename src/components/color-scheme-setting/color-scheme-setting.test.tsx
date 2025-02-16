import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ColorSchemeSetting from ".";
import { SettingProvider } from "../../context/setting-context";

function Dropdown() {
  return <div>Dropdown</div>;
}

vi.mock("../dropdown", () => ({
  default: Dropdown,
}));

describe("ColorSchemeSetting", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <ColorSchemeSetting />
      </SettingProvider>,
    );

    const label = screen.getByText("Color Scheme");
    expect(label).toBeInTheDocument();

    const dropdown = screen.getByText("Dropdown");
    expect(dropdown).toBeInTheDocument();
  });
});
