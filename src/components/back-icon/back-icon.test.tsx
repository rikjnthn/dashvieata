import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BackIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("BackIcon", () => {
  afterEach(() => localStorage.clear());

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    render(
      <SettingProvider>
        <BackIcon />
      </SettingProvider>,
    );

    const backIcon = screen.getByTitle("Back");
    expect(backIcon).toBeInTheDocument();

    expect(backIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(backIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(backIcon.querySelector("path")).toHaveAttribute("fill", "#000000");
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    render(
      <SettingProvider>
        <BackIcon />
      </SettingProvider>,
    );

    const backIcon = screen.getByTitle("Back");
    expect(backIcon).toBeInTheDocument();

    expect(backIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(backIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(backIcon.querySelector("path")).toHaveAttribute("fill", "#ffffff");
  });
});
