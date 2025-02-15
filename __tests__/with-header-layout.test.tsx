import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import WithHeaderLayout from "../src/layout/with-header";
import { createMemoryRouter, RouterProvider } from "react-router";

function HeaderNav() {
  return <div>Header Nav</div>;
}

vi.mock("../src/components/header-nav", () => ({ default: HeaderNav }));

describe("WithHeaderLayout", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <WithHeaderLayout />,
      },
    ]);

    render(<RouterProvider router={router} />);

    const headerNav = screen.getByText("Header Nav");
    expect(headerNav).toBeInTheDocument();
  });
});
