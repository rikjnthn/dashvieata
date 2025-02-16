import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import "@testing-library/jest-dom";

import BackIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("BackIcon", () => {
  afterEach(() => localStorage.clear());

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    const router = createMemoryRouter([
      {
        path: "/",
        element: <BackIcon />,
      },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const backIcon = screen.getByTitle("Back");
    expect(backIcon).toBeInTheDocument();

    expect(backIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(backIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(backIcon.querySelector("path")).toHaveAttribute("fill", "#000000");
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    const router = createMemoryRouter([
      {
        path: "/",
        element: <BackIcon />,
      },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const backIcon = screen.getByTitle("Back");
    expect(backIcon).toBeInTheDocument();

    expect(backIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(backIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(backIcon.querySelector("path")).toHaveAttribute("fill", "#ffffff");
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

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

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

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

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

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const backIcon = screen.getByTitle("Back");

    await userEvent.click(backIcon);

    expect(router.state?.location.pathname).toEqual("/transactions");
  });
});
