import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BellIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("BellIcon", () => {
  afterEach(() => localStorage.clear());

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    render(
      <SettingProvider>
        <BellIcon />
      </SettingProvider>,
    );

    const bellIcon = screen.getByTitle("Notification");
    expect(bellIcon).toBeInTheDocument();

    expect(bellIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(bellIcon.querySelector("svg")).toHaveAttribute("height", "40");

    bellIcon.querySelectorAll("path").forEach((el) => {
      expect(el).toHaveAttribute("stroke", "#000000");
    });
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    render(
      <SettingProvider>
        <BellIcon />
      </SettingProvider>,
    );

    const bellIcon = screen.getByTitle("Notification");
    expect(bellIcon).toBeInTheDocument();

    expect(bellIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(bellIcon.querySelector("svg")).toHaveAttribute("height", "40");

    bellIcon.querySelectorAll("path").forEach((el) => {
      expect(el).toHaveAttribute("stroke", "#ffffff");
    });
  });
});
