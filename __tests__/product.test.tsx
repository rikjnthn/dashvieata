import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

import Product from "../src/pages/product";
import { SettingProvider } from "../src/context/setting-context";
import { createMemoryRouter, RouterProvider } from "react-router";

function ProductDetail() {
  return <div>Product Detail</div>;
}

function BackIcon() {
  return <div>Back Icon</div>;
}

function NotificationOverlay() {
  return <div>Notification Overlay</div>;
}

vi.mock("../src/components/notification-overlay", () => ({
  default: NotificationOverlay,
}));
vi.mock("../src/components/back-icon", () => ({ default: BackIcon }));
vi.mock("../src/components/product-detail", () => ({
  default: ProductDetail,
}));

describe("Product", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/product/uxjyebgrf",
          element: <Product />,
        },
      ],
      { initialEntries: ["/product/uxjyebgrf"] },
    );

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const backIcon = screen.getByText("Back Icon");
    expect(backIcon).toBeInTheDocument();

    const notificationOverlay = screen.getByText("Notification Overlay");
    expect(notificationOverlay).toBeInTheDocument();

    const productDetail = screen.getByText("Product Detail");
    expect(productDetail).toBeInTheDocument();

    const img = screen.getByAltText("Nice T-shirt");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/nice-t-shirt.jpg");
  });

  test("should navigate to /products when user click BackIcon", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/product/uxjyebgrf",
          element: <Product />,
        },
        { path: "/products", element: <div></div> },
      ],
      { initialEntries: ["/product/uxjyebgrf"] },
    );

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const backIcon = screen.getByText("Back Icon");

    await userEvent.click(backIcon);

    expect(router.state.location.pathname).toEqual("/products");
  });
});
