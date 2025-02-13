import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Chat from ".";

describe("Chat", () => {
  test("should render correctly", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <Chat message="message" name="name" profilePictureSrc="/" />,
      },
    ]);

    render(<RouterProvider router={router} />);

    const img = screen.getByAltText("name");
    expect(img).toBeInTheDocument();

    const name = screen.getByText("name");
    expect(name).toBeInTheDocument();

    const message = screen.getByText("message");
    expect(message).toBeInTheDocument();
  });

  test("should navigate to chat page", async () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <Chat message="message" name="name" profilePictureSrc="/" />,
      },
    ]);

    render(<RouterProvider router={router} />);

    const chatContainer = screen.getByAltText("name").parentElement;
    expect(chatContainer).toBeInTheDocument();

    await userEvent.click(chatContainer!);

    expect(router.state.location.pathname).toEqual("/messages/name");
  });
});
