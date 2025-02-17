import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { afterAll, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import MessageOverview from ".";
import { SettingProvider } from "../../context/setting-context";

function GotoIcon() {
  return <div>Goto Icon</div>;
}

function ChatList() {
  return <div>Chat List</div>;
}

vi.mock("../go-to-icon", () => ({ default: GotoIcon }));
vi.mock("../chat-list", () => ({ default: ChatList }));

describe("MessageOverview", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    const router = createMemoryRouter([
      { path: "/", element: <MessageOverview /> },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const messages = screen.getByText("Messages");
    expect(messages).toBeInTheDocument();

    const gotoIcon = screen.getByText("Goto Icon");
    expect(gotoIcon).toBeInTheDocument();

    const chatList = screen.getByText("Chat List");
    expect(chatList).toBeInTheDocument();
  });

  test("should navigate to /messages", async () => {
    const router = createMemoryRouter([
      { path: "/", element: <MessageOverview /> },
      { path: "/messages", element: <div></div> },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const messageOverview = screen.getByText("Chat List").parentElement;

    await userEvent.click(messageOverview!);

    expect(router.state.location.pathname).toEqual("/messages");
  });
});
