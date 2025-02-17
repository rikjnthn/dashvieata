import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Dropdown from ".";
import { SettingProvider } from "../../context/setting-context";

const options = ["option 1", "option 2"];

describe("Dropdown", () => {
  test("should render correctly", () => {
    const { container } = render(
      <SettingProvider>
        <Dropdown defaultValue="default" options={options} />
      </SettingProvider>,
    );

    const selectedOptionsContainer = container
      .querySelector("div")
      ?.querySelector("div");
    expect(selectedOptionsContainer).toBeInTheDocument();
    expect(selectedOptionsContainer).not.toHaveClass("rounded-b-none");

    const selectedOptions = screen.getByText("default");
    expect(selectedOptions).toBeInTheDocument();

    const arrowIcon = screen.getByTitle("Open");
    expect(arrowIcon).toBeInTheDocument();

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toBeInTheDocument();
    expect(optionsContainer).toHaveClass("hidden");

    const optionsElement = screen.getAllByText(/option/);
    optionsElement.forEach((el, idx) => {
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent("option " + (idx + 1));
      expect(el).toHaveValue(options[idx]);
    });

    const overlay = container.lastChild;
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("hidden");
  });

  test("should open font size setting overlay", async () => {
    const { container } = render(
      <SettingProvider>
        <Dropdown defaultValue="default" options={options} />
      </SettingProvider>,
    );

    const selectedOptionsContainer = container
      .querySelector("div")
      ?.querySelector("div");

    await userEvent.click(selectedOptionsContainer!);

    expect(selectedOptionsContainer).toHaveClass("rounded-b-none");

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toBeInTheDocument();
    expect(optionsContainer).not.toHaveClass("hidden");

    const overlay = container.lastChild;
    screen.debug(container);
    expect(overlay).toBeInTheDocument();
    expect(overlay).not.toHaveClass("hidden");
  });

  test("should close font size setting overlay when click outside of options container", async () => {
    const { container } = render(
      <SettingProvider>
        <Dropdown defaultValue="default" options={options} />
      </SettingProvider>,
    );

    const selectedOptionsContainer = container
      .querySelector("div")
      ?.querySelector("div");

    await userEvent.click(selectedOptionsContainer!);

    const overlay = container.lastChild as Element;

    await userEvent.click(overlay);

    expect(selectedOptionsContainer).not.toHaveClass("rounded-b-none");

    const optionsContainer = container
      .querySelector("div")
      ?.querySelector("div")?.nextSibling;
    expect(optionsContainer).toHaveClass("hidden");

    expect(overlay).toHaveClass("hidden");
  });

  test("should call onOptionClick if user click option", async () => {
    const onOptionClickMock = vi.fn();

    render(
      <SettingProvider>
        <Dropdown
          defaultValue="default"
          options={options}
          onOptionClick={onOptionClickMock}
        />
      </SettingProvider>,
    );

    const option = screen.getByText("option 1");

    await userEvent.click(option);

    expect(onOptionClickMock).toBeCalled();
    expect(onOptionClickMock).toBeCalledWith("option 1");

    vi.resetAllMocks();
  });
});
