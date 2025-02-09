import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Dropdown from ".";

const options = ["option 1", "option 2"];

describe("Dropdown", () => {
  test("should render correctly", () => {
    const { container } = render(
      <Dropdown defaultValue="default" options={options} />,
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
      <Dropdown defaultValue="default" options={options} />,
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
    expect(overlay).toBeInTheDocument();
    expect(overlay).not.toHaveClass("hidden");
  });

  test("should close font size setting overlay when click outside of options container", async () => {
    const { container } = render(
      <Dropdown defaultValue="default" options={options} />,
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
});
