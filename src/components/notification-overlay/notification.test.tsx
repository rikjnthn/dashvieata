import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import NotificationOverlay from ".";

function BellIcon() {
  return <div>Bell Icon</div>;
}

function CloseIcon() {
  return <div>Close Icon</div>;
}

function Notification() {
  return <div>Notification</div>;
}

vi.mock("../bell-icon", () => ({ default: BellIcon }));
vi.mock("../close-icon", () => ({ default: CloseIcon }));
vi.mock("../notification", () => ({ default: Notification }));

describe("NotificationOverlay", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<NotificationOverlay />);

    const notificationOverlayContainer =
      screen.getByText("Close Icon").parentElement?.parentElement
        ?.parentElement;
    expect(notificationOverlayContainer).toBeInTheDocument();
    expect(notificationOverlayContainer).toHaveClass("hidden");

    const bellIcon = screen.getByText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();

    const overlay = notificationOverlayContainer?.parentElement?.nextSibling;
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("hidden");
  });

  test("should open and close notificationOverlay", async () => {
    render(<NotificationOverlay />);

    const bellIcon = screen.getByText("Bell Icon");

    const notificationOverlayContainer =
      screen.getByText("Close Icon").parentElement?.parentElement
        ?.parentElement;
    expect(notificationOverlayContainer).toHaveClass("hidden");

    //simulate user opening notification overlay
    await userEvent.click(bellIcon!);

    expect(notificationOverlayContainer).not.toHaveClass("hidden");

    const closeIconContainer = screen.getByText("Close Icon").parentElement;

    //simulate user closing notification overlay
    await userEvent.click(closeIconContainer!);
  });

  test("should close overlay when clicking outsize notification overlay", async () => {
    render(<NotificationOverlay />);

    const bellIcon = screen.getByText("Bell Icon");

    const notificationOverlayContainer =
      screen.getByText("Close Icon").parentElement?.parentElement
        ?.parentElement;
    const overlay = notificationOverlayContainer?.parentElement?.nextSibling;

    expect(overlay).toHaveClass("hidden");

    //simulate user opening notification overlay
    await userEvent.click(bellIcon!);

    expect(overlay).not.toHaveClass("hidden");

    //simulate user closing notification overlay
    await userEvent.click(overlay as Element);

    expect(overlay).toHaveClass("hidden");
    expect(notificationOverlayContainer).toHaveClass("hidden");
  });
});
