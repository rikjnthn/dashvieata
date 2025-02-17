import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ArrowIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("ArrowIcon", () => {
  test("should render correctly", () => {
    const { rerender } = render(
      <SettingProvider>
        <ArrowIcon title="Arrow" size="md" />
      </SettingProvider>,
    );

    const arrowIconMd = screen.getByTitle("Arrow");
    expect(arrowIconMd).toBeInTheDocument();

    expect(arrowIconMd.querySelector("svg")).toHaveAttribute("width", "40");
    expect(arrowIconMd.querySelector("svg")).toHaveAttribute("height", "40");
    expect(arrowIconMd.querySelector("path")).toHaveAttribute(
      "stroke-width",
      "2",
    );

    rerender(
      <SettingProvider>
        <ArrowIcon title="Arrow" size="sm" />
      </SettingProvider>,
    );

    const arrowIconSm = screen.getByTitle("Arrow");
    expect(arrowIconSm).toBeInTheDocument();

    expect(arrowIconSm.querySelector("svg")).toHaveAttribute("width", "25");
    expect(arrowIconSm.querySelector("svg")).toHaveAttribute("height", "25");
    expect(arrowIconMd.querySelector("path")).toHaveAttribute(
      "stroke-width",
      "3",
    );
  });
});
