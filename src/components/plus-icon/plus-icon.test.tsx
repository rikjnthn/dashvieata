import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import "@testing-library/jest-dom";

import PlusIcon from ".";

describe("PlusIcon", () => {
  test("should render correctly", () => {
    const router = createMemoryRouter([{ path: "/", element: <PlusIcon /> }]);

    render(<RouterProvider router={router} />);

    const plusIcon = screen.getByTitle("Add product");
    expect(plusIcon).toBeInTheDocument();

    expect(plusIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(plusIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(plusIcon.querySelector("path")).toHaveAttribute("stroke", "black");
  });

  test("should navigate to /add-product page", async () => {
    const router = createMemoryRouter([
      { path: "/", element: <PlusIcon /> },
      { path: "/add-product", element: <div></div> },
    ]);

    render(<RouterProvider router={router} />);

    const plusIcon = screen.getByTitle("Add product");

    await userEvent.click(plusIcon);

    expect(router.state.location.pathname).toEqual("/add-product");
  });
});
