import { afterEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import "@testing-library/jest-dom";

import PlusIcon from ".";
import { SettingProvider } from "../../context/setting-context";

describe("PlusIcon", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("should render correctly", () => {
    localStorage.setItem("color-scheme", "Light");

    const router = createMemoryRouter([{ path: "/", element: <PlusIcon /> }]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const plusIcon = screen.getByTitle("Add product");
    expect(plusIcon).toBeInTheDocument();

    expect(plusIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(plusIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(plusIcon.querySelector("path")).toHaveAttribute("stroke", "#000000");
  });

  test("should render correctly dark mode", () => {
    localStorage.setItem("color-scheme", "Dark");

    const router = createMemoryRouter([{ path: "/", element: <PlusIcon /> }]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const plusIcon = screen.getByTitle("Add product");
    expect(plusIcon).toBeInTheDocument();

    expect(plusIcon.querySelector("svg")).toHaveAttribute("width", "40");
    expect(plusIcon.querySelector("svg")).toHaveAttribute("height", "40");
    expect(plusIcon.querySelector("path")).toHaveAttribute("stroke", "#ffffff");
  });

  test("should navigate to /add-product page", async () => {
    const router = createMemoryRouter([
      { path: "/", element: <PlusIcon /> },
      { path: "/add-product", element: <div></div> },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const plusIcon = screen.getByTitle("Add product");

    await userEvent.click(plusIcon);

    expect(router.state.location.pathname).toEqual("/add-product");
  });
});
