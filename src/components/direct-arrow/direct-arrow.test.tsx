import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DirectArrow from ".";
import { SettingProvider } from "../../context/setting-context";

describe("DirectArrow", () => {
  test("should render correctly", () => {
    render(
      <SettingProvider>
        <DirectArrow title="Increase" />
      </SettingProvider>,
    );

    const directArrow = screen.getByTitle("Increase");
    expect(directArrow).toBeInTheDocument();

    expect(directArrow.querySelector("svg")).toHaveAttribute("width", "25");
    expect(directArrow.querySelector("svg")).toHaveAttribute("height", "25");
  });
});
