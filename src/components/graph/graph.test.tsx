import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Graph from ".";
import { SettingProvider } from "../../context/setting-context";

describe("Graph", () => {
  test("should render correctly", () => {
    render(
      <SettingProvider>
        <Graph timeFrame={30} />
      </SettingProvider>,
    );

    const revenue = screen.getByText("Revenue");
    expect(revenue).toBeInTheDocument();

    const smoothLine = screen.getByText("Smooth line");
    expect(smoothLine).toBeInTheDocument();

    const smoothLineSwitch = screen.getByTitle("Smooth line");
    expect(smoothLineSwitch).toBeInTheDocument();
  });

  test("should handle user click and set localStorage 'is-graph-smooth'", async () => {
    render(
      <SettingProvider>
        <Graph timeFrame={30} />
      </SettingProvider>,
    );

    const smoothLineSwitch = screen.getByTitle("Smooth line");
    expect(smoothLineSwitch).toHaveClass("border-grey-700");

    await userEvent.click(smoothLineSwitch);

    expect(smoothLineSwitch).toHaveClass(
      "switch-true border-blue-200 bg-blue-200",
    );

    expect(localStorage.getItem("is-graph-smooth")).toEqual("true");

    localStorage.clear();
  });

  test("should handle user 'enter' and set localStorage 'is-graph-smooth'", async () => {
    render(
      <SettingProvider>
        <Graph timeFrame={30} />
      </SettingProvider>,
    );

    const smoothLineSwitch = screen.getByTitle("Smooth line");
    expect(smoothLineSwitch).toHaveClass("border-grey-700");

    await userEvent.keyboard("{Tab}{Enter}");

    expect(smoothLineSwitch).toHaveClass(
      "switch-true border-blue-200 bg-blue-200",
    );

    expect(localStorage.getItem("is-graph-smooth")).toEqual("true");

    await userEvent.keyboard("{Enter}");

    expect(smoothLineSwitch).not.toHaveClass(
      "switch-true border-blue-200 bg-blue-200",
    );

    expect(localStorage.getItem("is-graph-smooth")).toEqual("false");

    localStorage.clear();
  });
});
