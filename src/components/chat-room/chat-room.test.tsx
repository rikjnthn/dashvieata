import { afterAll, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import ChatRoom from ".";
import { MessageType } from "../../interface";

function MessageInput() {
  return <div>Message Input</div>;
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

    render(<RouterProvider router={router} />);

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

    render(<RouterProvider router={router} />);

    chatMessages.Jessica.forEach((v) => {
      const message = screen.getByText(v.content);
      expect(message).toBeInTheDocument();
    });

    const messageInput = screen.getByText("Message Input");
    expect(messageInput).toBeInTheDocument();
  });
});
