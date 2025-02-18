import { afterAll, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";

import ChatRoom from ".";
import { MessageType } from "../../interface";
import { SettingProvider } from "../../context/setting-context";

function MessageInput() {
  return <div>Message Input</div>;
}

function BackIcon() {
  return <div>Back Icon</div>;
}

function MessageList({ messages }: { messages: MessageType[] }) {
  return (
    <div>
      {messages.map((message) => (
        <div>{message.content}</div>
      ))}
    </div>
  );
}

vi.mock("../back-icon", () => ({ default: BackIcon }));
vi.mock("../message-input", () => ({ default: MessageInput }));
vi.mock("../message-list", () => ({ default: MessageList }));

const chatMessages = {
  Amanda: [
    {
      sender: false,
      content: "Hi! I want to ask you about your product",
      image: "",
    },
    {
      sender: true,
      content: "Hello!",
      image: "",
    },
    {
      sender: true,
      content: "What product you had like to asked?",
      image: "",
    },
  ],
  Jessica: [
    {
      sender: false,
      content: "Thank you! Your t-shirt is wonderfull",
      type: "text" as const,
    },
  ],
};

describe("ChatRoom", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render Amanda chat correctly", () => {
    const router = createMemoryRouter(
      [{ path: "/:id", element: <ChatRoom /> }],
      { initialEntries: ["/Amanda"] },
    );

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    chatMessages.Amanda.forEach((v) => {
      const message = screen.getByText(v.content);
      expect(message).toBeInTheDocument();
    });

    const messageInput = screen.getByText("Message Input");
    expect(messageInput).toBeInTheDocument();
  });

  test("should render Jessica chat correctly", () => {
    const router = createMemoryRouter(
      [{ path: "/:id", element: <ChatRoom /> }],
      { initialEntries: ["/Jessica"] },
    );

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    chatMessages.Jessica.forEach((v) => {
      const message = screen.getByText(v.content);
      expect(message).toBeInTheDocument();
    });

    const messageInput = screen.getByText("Message Input");
    expect(messageInput).toBeInTheDocument();
  });

  test("should render navigate to /messages when user click BackIcon", async () => {
    const router = createMemoryRouter(
      [
        { path: "/:id", element: <ChatRoom /> },
        { path: "/messages", element: <div></div> },
      ],
      { initialEntries: ["/Jessica"] },
    );

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const backIcon = screen.getByText("Back Icon");

    await userEvent.click(backIcon);

    expect(router.state.location.pathname).toEqual("/messages");
  });
});
