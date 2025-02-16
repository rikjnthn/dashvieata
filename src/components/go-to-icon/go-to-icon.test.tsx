import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import GotoIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("GotoIcon", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    render(
      <SettingProvider>
        <GotoIcon />
      </SettingProvider>,
    );

    const gotoIcon = screen.getByTitle("See more");
    expect(gotoIcon).toBeInTheDocument();

    expect(gotoIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(gotoIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(gotoIcon.querySelector("path")).toHaveAttribute("fill", "#000000");
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    render(
      <SettingProvider>
        <GotoIcon />
      </SettingProvider>,
    );

    const gotoIcon = screen.getByTitle("See more");
    expect(gotoIcon).toBeInTheDocument();

    expect(gotoIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(gotoIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(gotoIcon.querySelector("path")).toHaveAttribute("fill", "#ffffff");
  });
});
