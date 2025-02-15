import { afterAll, describe, expect, test, vi } from "vitest";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import Messages from "../src/pages/messages";

function ChatList() {
  return <div>Chat List</div>;
}

vi.mock("../src/components/chat-list", () => ({ default: ChatList }));

describe("Messages Page", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    const router = createMemoryRouter([{ path: "/", element: <Messages /> }]);

    render(<RouterProvider router={router} />);

    const chatList = screen.getByText("Chat List");
    expect(chatList).toBeInTheDocument();
  });

  test("should render Outlet Component correctly", () => {
    const router = createMemoryRouter(
      [
        { path: "/", element: <Messages /> },
        {
          path: "/nested-component-path",
          element: <div>Nested Component</div>,
        },
      ],
      { initialEntries: ["/nested-component-path"] },
    );

    render(<RouterProvider router={router} />);

    const nestedComponent = screen.getByText("Nested Component");
    expect(nestedComponent).toBeInTheDocument();
  });
});
