import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import "@testing-library/jest-dom";

import NavOption from ".";
import { SettingProvider } from "../../context/setting-context";

describe("NavOption", () => {
  test("should render correctly", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <NavOption icon={<div>Icon</div>} label="Link" to={"/"} />,
      },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const navLink = screen.getByRole("link");
    expect(navLink).toBeInTheDocument();

    const icon = screen.getByText("Icon");
    expect(icon).toBeInTheDocument();

    const label = screen.getByText("Link");
    expect(label).toBeInTheDocument();
  });

  test("should include right class when active or inactive", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <NavOption icon={<div>Icon</div>} label="Link" to={"/"} />,
      },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const navLink = screen.getByRole("link");
    expect(navLink).toHaveClass("stroke-black text-black");
  });

  test("should be base style when inactive", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: (
          <NavOption
            icon={<div>Icon</div>}
            label="Link"
            to={"/different-path"}
          />
        ),
      },
    ]);

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const navLink = screen.getByRole("link");
    expect(navLink).toHaveClass("text-grey-300 stroke-grey-300");
  });
});
