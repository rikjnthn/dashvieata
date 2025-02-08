import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SettingIcon from ".";

describe("SettingIcon", () => {
  test("should render correctly", () => {
    render(<SettingIcon />);

    const settingIcon = screen.getByTitle("Settings");
    expect(settingIcon).toBeInTheDocument();

    expect(settingIcon.querySelector("svg")).toHaveAttribute("width", "50");
    expect(settingIcon.querySelector("svg")).toHaveAttribute("height", "50");
  });
});
