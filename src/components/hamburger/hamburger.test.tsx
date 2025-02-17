import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hamburger from ".";
import { SettingProvider } from "../../context/setting-context";
import userEvent from "@testing-library/user-event";

describe("Hamburger", () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <Hamburger onClick={vi.fn()} />
      </SettingProvider>,
    );

    const hamburger = screen.getByTitle("Hamburger");
    expect(hamburger).toBeInTheDocument();

    expect(hamburger.querySelector("svg")).toHaveAttribute("width", "40");
    expect(hamburger.querySelector("svg")).toHaveAttribute("height", "40");
  });

  test("should call onClick when user click Hamburger", async () => {
    const onClickMock = vi.fn();

    render(
      <SettingProvider>
        <Hamburger onClick={onClickMock} />
      </SettingProvider>,
    );

    const hamburger = screen.getByTitle("Hamburger");

    await userEvent.click(hamburger);

    expect(onClickMock).toBeCalled();
  });
});
