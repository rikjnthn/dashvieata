import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SliderIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("SliderIcon", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    render(
      <SettingProvider>
        <SliderIcon />
      </SettingProvider>,
    );

    const sliderIcon = screen.getByTitle("Setting transaction");
    expect(sliderIcon).toBeInTheDocument();

    expect(sliderIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(sliderIcon.querySelector("svg")).toHaveAttribute("height", "40");
    sliderIcon.querySelectorAll("path").forEach((el) => {
      expect(el).toHaveAttribute("fill", "#000000");
    });
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    render(
      <SettingProvider>
        <SliderIcon />
      </SettingProvider>,
    );

    const sliderIcon = screen.getByTitle("Setting transaction");
    expect(sliderIcon).toBeInTheDocument();

    expect(sliderIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(sliderIcon.querySelector("svg")).toHaveAttribute("height", "40");
    sliderIcon.querySelectorAll("path").forEach((el) => {
      expect(el).toHaveAttribute("fill", "#ffffff");
    });
  });
});
