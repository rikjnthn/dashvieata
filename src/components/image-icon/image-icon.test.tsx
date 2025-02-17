import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ImageIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("ImageIcon", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    render(
      <SettingProvider>
        <ImageIcon />
      </SettingProvider>,
    );

    const imageIcon = screen.getByTitle("Image");
    expect(imageIcon).toBeInTheDocument();

    expect(imageIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(imageIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(imageIcon.querySelector("path")).toHaveAttribute(
      "stroke",
      "#000000",
    );
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    render(
      <SettingProvider>
        <ImageIcon />
      </SettingProvider>,
    );

    const imageIcon = screen.getByTitle("Image");
    expect(imageIcon).toBeInTheDocument();

    expect(imageIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(imageIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(imageIcon.querySelector("path")).toHaveAttribute(
      "stroke",
      "#ffffff",
    );
  });
});
