import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import TimeFrame from ".";
import { TIMEFRAMEOPTIONS } from "../../constant/setting";
import { SettingProvider } from "../../context/setting-context";

describe("TimeFrame", () => {
  afterEach(() => vi.resetAllMocks());

  test("should render correctly", () => {
    const { container } = render(
      <SettingProvider>
        <TimeFrame setTimeFrame={vi.fn()} timeFrame="Last 30 days" />
      </SettingProvider>,
    );

    const selectedOptionsContainer = container
      .querySelector("div")
      ?.querySelector("div");
    expect(selectedOptionsContainer).toBeInTheDocument();
    expect(selectedOptionsContainer).not.toHaveClass("rounded-b-none");

    const selectedOptions = screen.getAllByText("Last 30 days")[0];
    expect(selectedOptions).toBeInTheDocument();

    const arrowIcon = screen.getByTitle("Open");
    expect(arrowIcon).toBeInTheDocument();

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toBeInTheDocument();
    expect(optionsContainer).toHaveClass("hidden");

    const optionsElement = screen
      .getAllByText(/Last/)
      .filter((_, idx) => idx !== 0);

    optionsElement.forEach((el, idx) => {
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent("Last " + (idx + 1) * 30 + " days");
      expect(el).toHaveValue(TIMEFRAMEOPTIONS[idx]);
    });

    const overlay = container.lastChild;
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("hidden");
  });

  test("should open time frame overlay", async () => {
    const { container } = render(
      <SettingProvider>
        <TimeFrame setTimeFrame={vi.fn()} timeFrame="Last 30 days" />
      </SettingProvider>,
    );

    const selectedOptionsContainer =
      screen.getAllByText("Last 30 days")[0].parentElement;

    await userEvent.click(selectedOptionsContainer!);

    expect(selectedOptionsContainer).toHaveClass("rounded-b-none");

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toBeInTheDocument();
    expect(optionsContainer).not.toHaveClass("hidden");

    const bgOverlay = container.lastChild;
    expect(bgOverlay).toBeInTheDocument();
    expect(bgOverlay).not.toHaveClass("hidden");
  });

  test("should close time frame overlay when click outside of options container", async () => {
    const { container } = render(
      <SettingProvider>
        <TimeFrame setTimeFrame={vi.fn()} timeFrame="Last 30 days" />
      </SettingProvider>,
    );
    const selectedOptionsContainer =
      screen.getAllByText("Last 30 days")[0].parentElement;

    await userEvent.click(selectedOptionsContainer!);

    const bgOverlay = container.lastChild as Element;

    await userEvent.click(bgOverlay);

    expect(selectedOptionsContainer).not.toHaveClass("rounded-b-none");

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toHaveClass("hidden");

    expect(bgOverlay).toHaveClass("hidden");
  });

  test("should close time frame overlay when click outside of options container", async () => {
    const { container } = render(
      <SettingProvider>
        <TimeFrame setTimeFrame={vi.fn()} timeFrame="Last 30 days" />
      </SettingProvider>,
    );
    const selectedOptionsContainer =
      screen.getAllByText("Last 30 days")[0].parentElement;
    await userEvent.click(selectedOptionsContainer!);

    const bgOverlay = container.lastChild as Element;

    await userEvent.click(bgOverlay);

    expect(selectedOptionsContainer).not.toHaveClass("rounded-b-none");

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toHaveClass("hidden");

    expect(bgOverlay).toHaveClass("hidden");
  });

  test("should called setTimeFrame and closed time frame overlay when user click option", async () => {
    const setTimeFrameMock = vi.fn();

    const { container } = render(
      <SettingProvider>
        <TimeFrame setTimeFrame={setTimeFrameMock} timeFrame="Last 30 days" />
      </SettingProvider>,
    );
    const selectedOptionsContainer =
      screen.getAllByText("Last 30 days")[0].parentElement;

    const option = screen.getByText("Last 60 days");
    const bgOverlay = container.lastChild as Element;

    await userEvent.click(selectedOptionsContainer!);

    expect(selectedOptionsContainer).toHaveClass("rounded-b-none");

    await userEvent.click(option);

    expect(setTimeFrameMock).toHaveBeenCalled();
    expect(setTimeFrameMock).toHaveBeenCalledWith("Last 60 days");

    expect(selectedOptionsContainer).not.toHaveClass("rounded-b-none");

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toHaveClass("hidden");

    expect(bgOverlay).toHaveClass("hidden");
  });
});
