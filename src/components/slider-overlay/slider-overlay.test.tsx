import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import SliderOverlay from ".";

function SliderIcon() {
  return <div>Slider Icon</div>;
}

function CloseIcon() {
  return <div>Close Icon</div>;
}

function Dropdown({
  onOptionClick,
}: {
  onOptionClick: (option: string) => void;
}) {
  return (
    <div>
      <div onClick={() => onOptionClick("Option")}>Option</div>
    </div>
  );
}

vi.mock("../slider-icon", () => ({ default: SliderIcon }));
vi.mock("../close-icon", () => ({ default: CloseIcon }));
vi.mock("../dropdown", () => ({ default: Dropdown }));

describe("SliderOverlay", () => {
  afterEach(() => vi.restoreAllMocks());

  test("should render correctly", () => {
    const { container } = render(
      <SliderOverlay setTransactionStatus={vi.fn()} transactionStatus="All" />,
    );

    const sliderIcon = screen.getByText("Slider Icon");
    expect(sliderIcon).toBeInTheDocument();

    const closeIcon = screen.getByText("Close Icon");
    expect(closeIcon).toBeInTheDocument();

    const dropdownOption = screen.getByText("Option");
    expect(dropdownOption).toBeInTheDocument();

    const dropdown = dropdownOption.parentElement;
    expect(dropdown).toBeInTheDocument();

    const bgOverlay = container.lastChild;
    expect(bgOverlay).toBeInTheDocument();
  });

  test("should render correctly when overlay is not open", () => {
    const { container } = render(
      <SliderOverlay setTransactionStatus={vi.fn()} transactionStatus="All" />,
    );

    const overlayContainer =
      screen.getByText("Close Icon").parentElement?.parentElement
        ?.parentElement;
    expect(overlayContainer).toHaveClass("hidden");

    const bgOverlay = container.lastChild;
    expect(bgOverlay).toHaveClass("hidden");
  });

  test("should render correctly when overlay is open", async () => {
    const { container } = render(
      <SliderOverlay setTransactionStatus={vi.fn()} transactionStatus="All" />,
    );

    const sliderIcon = screen.getByText("Slider Icon");

    await userEvent.click(sliderIcon);

    const overlayContainer =
      screen.getByText("Close Icon").parentElement?.parentElement
        ?.parentElement;
    expect(overlayContainer).not.toHaveClass("hidden");

    const bgOverlay = container.lastChild;
    expect(bgOverlay).not.toHaveClass("hidden");
  });

  test("should render correctly close overlay when user click outside of overlay", async () => {
    const { container } = render(
      <SliderOverlay setTransactionStatus={vi.fn()} transactionStatus="All" />,
    );

    const sliderIcon = screen.getByText("Slider Icon");

    await userEvent.click(sliderIcon);

    const overlayContainer =
      screen.getByText("Close Icon").parentElement?.parentElement
        ?.parentElement;
    expect(overlayContainer).not.toHaveClass("hidden");

    const bgOverlay = container.lastChild;
    expect(bgOverlay).not.toHaveClass("hidden");

    await userEvent.click(bgOverlay as Element);

    expect(overlayContainer).toHaveClass("hidden");
    expect(bgOverlay).toHaveClass("hidden");
  });

  test("should render correctly close overlay when user click close icon", async () => {
    const { container } = render(
      <SliderOverlay setTransactionStatus={vi.fn()} transactionStatus="All" />,
    );

    const sliderIcon = screen.getByText("Slider Icon");
    const closeIcon = screen.getByText("Close Icon");

    await userEvent.click(sliderIcon);

    const overlayContainer =
      screen.getByText("Close Icon").parentElement?.parentElement
        ?.parentElement;
    expect(overlayContainer).not.toHaveClass("hidden");

    const bgOverlay = container.lastChild;
    expect(bgOverlay).not.toHaveClass("hidden");

    await userEvent.click(closeIcon);

    expect(overlayContainer).toHaveClass("hidden");
    expect(bgOverlay).toHaveClass("hidden");
  });

  test("should called setTransactionStatus when user click option", async () => {
    const setTransactionStatusMock = vi.fn();

    render(
      <SliderOverlay
        setTransactionStatus={setTransactionStatusMock}
        transactionStatus="All"
      />,
    );

    const sliderIcon = screen.getByText("Slider Icon");
    const option = screen.getByText("Option");

    await userEvent.click(sliderIcon);

    await userEvent.click(option);

    expect(setTransactionStatusMock).toHaveBeenCalled();
    expect(setTransactionStatusMock).toHaveBeenCalledWith("Option");
  });
});
