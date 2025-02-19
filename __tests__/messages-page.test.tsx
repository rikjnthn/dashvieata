import { afterAll, describe, expect, test, vi } from "vitest";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import MessagesPage from "../src/pages/messages";

function ChatList() {
  return <div>Chat List</div>;
}

function SearchBar() {
  return <div>Search Bar</div>;
}

function NotificationOverlay() {
  return <div>Notification Overlay</div>;
}

vi.mock("../src/components/notification-overlay", () => ({
  default: NotificationOverlay,
}));
vi.mock("../src/components/search-bar", () => ({ default: SearchBar }));
vi.mock("../src/components/chat-list", () => ({ default: ChatList }));

describe("Messages Page", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    const router = createMemoryRouter([
      { path: "/", element: <MessagesPage /> },
    ]);

    render(<RouterProvider router={router} />);

    const searchBar = screen.getByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const notificationOverlay = screen.getByText("Notification Overlay");
    expect(notificationOverlay).toBeInTheDocument();

    const chatList = screen.getByText("Chat List");
    expect(chatList).toBeInTheDocument();
  });

  test("should render Outlet Component correctly", () => {
    const router = createMemoryRouter(
      [
        { path: "/:param", element: <MessagesPage /> },
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
