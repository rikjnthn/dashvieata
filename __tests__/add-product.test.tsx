import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

import AddProduct from "../src/pages/add-product";
import { SettingProvider } from "../src/context/setting-context";
import { createMemoryRouter, RouterProvider } from "react-router";

function ProductImageInput() {
  return <div>Product Image Input</div>;
}

function BackIcon() {
  return <div>Back Icon</div>;
}

function NotificationOverlay() {
  return <div>Notification Overlay</div>;
}

vi.mock("../src/components/back-icon", () => ({ default: BackIcon }));
vi.mock("../src/components/notification-overlay", () => ({
  default: NotificationOverlay,
}));
vi.mock("../src/components/product-image-input", () => ({
  default: ProductImageInput,
}));

describe("AddProduct", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/add-product",
          element: <AddProduct />,
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

    const backIcon = screen.getByText("Back Icon");
    expect(backIcon).toBeInTheDocument();

    const notificationOverlay = screen.getByText("Notification Overlay");
    expect(notificationOverlay).toBeInTheDocument();

    const productImageInput = screen.getByText("Product Image Input");
    expect(productImageInput).toBeInTheDocument();

    const button = screen.getByText("Add Product");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");

    const productNameLabel = screen.getByText("Product Name");
    expect(productNameLabel).toBeInTheDocument();

    const productNameInput = screen.getByPlaceholderText("Product Name");
    expect(productNameInput).toBeInTheDocument();

    const productDescriptionLabel = screen.getByText("Product Description");
    expect(productDescriptionLabel).toBeInTheDocument();

    const productDescriptionInput = screen.getByPlaceholderText(
      "Product Description",
    );
    expect(productDescriptionInput).toBeInTheDocument();

    const productPriceLabel = screen.getByText("Product Price");
    expect(productPriceLabel).toBeInTheDocument();

    const productPriceInput = screen.getByPlaceholderText("Product Price");
    expect(productPriceInput).toBeInTheDocument();

    const productStockLabel = screen.getByText("Product Stock");
    expect(productStockLabel).toBeInTheDocument();

    const productStockInput = screen.getByPlaceholderText("Product Stock");
    expect(productStockInput).toBeInTheDocument();
  });

  test("should navigate to /products when user click BackIcon", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/add-product",
          element: <AddProduct />,
        },
        { path: "/products", element: <div></div> },
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
    const backIcon = screen.getByText("Back Icon");

    await userEvent.click(backIcon);

    expect(router.state.location.pathname).toEqual("/products");
  });
});
