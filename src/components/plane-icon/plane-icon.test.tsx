import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PlaneIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("PlaneIcon", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    render(
      <SettingProvider>
        <PlaneIcon />
      </SettingProvider>,
    );

    const planeIcon = screen.getByTitle("Send");
    expect(planeIcon).toBeInTheDocument();

    expect(planeIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(planeIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(planeIcon.querySelector("path")).toHaveAttribute(
      "stroke",
      "#000000",
    );
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    render(
      <SettingProvider>
        <PlaneIcon />
      </SettingProvider>,
    );

    const planeIcon = screen.getByTitle("Send");
    expect(planeIcon).toBeInTheDocument();

    expect(planeIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(planeIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(planeIcon.querySelector("path")).toHaveAttribute(
      "stroke",
      "#ffffff",
    );
  });
});
