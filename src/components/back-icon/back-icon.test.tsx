import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import "@testing-library/jest-dom";

import BackIcon from ".";

describe("BackIcon", () => {
  test("should render correctly", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <BackIcon />,
      },
    ]);

    render(<RouterProvider router={router} />);

    const backIcon = screen.getByTitle("Back");
    expect(backIcon).toBeInTheDocument();

    expect(backIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(backIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(backIcon.querySelector("path")).toHaveAttribute("fill", "black");
  });

  test("should navigate to /products if clicked from /add-product", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/add-product",
          element: <BackIcon />,
        },

        {
          path: "/products",
          element: <div></div>,
        },
      ],
      {
        initialEntries: ["/add-product"],
      },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.getByTitle("Back");

    await userEvent.click(backIcon);

    expect(router.state?.location.pathname).toEqual("/products");
  });

  test("should navigate to /products if clicked from /product/:productId", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/product/productId",
          element: <BackIcon />,
        },

        {
          path: "/products",
          element: <div></div>,
        },
      ],
      {
        initialEntries: ["/product/productId"],
      },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.getByTitle("Back");

    await userEvent.click(backIcon);

    expect(router.state?.location.pathname).toEqual("/products");
  });

  test("should navigate to /transactions if clicked from /transaction/transactionId", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/transaction/transactionId",
          element: <BackIcon />,
        },

        {
          path: "/transactions",
          element: <div></div>,
        },
      ],
      {
        initialEntries: ["/transaction/transactionId"],
      },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.getByTitle("Back");

    await userEvent.click(backIcon);

    expect(router.state?.location.pathname).toEqual("/transactions");
  });
});
