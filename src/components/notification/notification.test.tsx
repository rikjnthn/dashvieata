import { render, screen, waitFor } from "@testing-library/react";
import { afterAll, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import Notification from ".";
import userEvent from "@testing-library/user-event";

function ChatIcon() {
  return <div>Chat Icon</div>;
}

function CloseIcon() {
  return <div>Close Icon</div>;
}

vi.mock("../chat-icon", () => ({ default: ChatIcon }));
vi.mock("../close-icon", () => ({ default: CloseIcon }));

describe("Notification", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<Notification />);

    const notificationContainer =
      screen.getByText("Messages").parentElement?.parentElement;
    expect(notificationContainer).toBeInTheDocument();
    expect(notificationContainer).not.toHaveClass("-translate-x-full");

    const chatIcon = screen.getByText("Chat Icon");
    expect(chatIcon).toBeInTheDocument();

    const closeIcon = screen.getByText("Close Icon");
    expect(closeIcon).toBeInTheDocument();

    const label = screen.getByText("Messages");
    expect(label).toBeInTheDocument();

    const message = screen.getByText("You have 1 new messages");
    expect(message).toBeInTheDocument();
  });

  test("should remove notification", async () => {
    render(<Notification />);

    const notificationContainer =
      screen.getByText("Messages").parentElement?.parentElement;

    const closeIconContainer = screen.getByText("Close Icon").parentElement;

    await userEvent.click(closeIconContainer!);

    expect(notificationContainer).toHaveClass("-translate-x-full");

    waitFor(() => expect(notificationContainer).toHaveClass("hidden"));
  });
});
