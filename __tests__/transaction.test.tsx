import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Transaction from "../src/pages/Transaction";
import { createMemoryRouter, RouterProvider } from "react-router";
import { SettingProvider } from "../src/context/setting-context";

describe("Transaction", () => {
  test("should render correctly", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/:id",
          element: <Transaction />,
        },
      ],
      { initialEntries: ["/irufhabsd"] },
    );

    render(
      <SettingProvider>
        <RouterProvider router={router} />
      </SettingProvider>,
    );

    const transactionIdLabel = screen.getByText("Transaction Id");
    expect(transactionIdLabel).toBeInTheDocument();

    const transactionIdMessage = screen.getByText("irufhabsd");
    expect(transactionIdMessage).toBeInTheDocument();

    const statusLabel = screen.getByText("Status");
    expect(statusLabel).toBeInTheDocument();

    const statusMessage = screen.getByText("Payment");
    expect(statusMessage).toBeInTheDocument();

    const productNameLabel = screen.getByText("Product Name");
    expect(productNameLabel).toBeInTheDocument();

    const productNameMessage = screen.getByText("Nice T-shirt");
    expect(productNameMessage).toBeInTheDocument();

    const productIdLabel = screen.getByText("Product Id");
    expect(productIdLabel).toBeInTheDocument();

    const productIdMessage = screen.getByText("uxjyebgrf");
    expect(productIdMessage).toBeInTheDocument();

    const buyerNameLabel = screen.getByText("Buyer Name");
    expect(buyerNameLabel).toBeInTheDocument();

    const buyerNameMessage = screen.getByText("James");
    expect(buyerNameMessage).toBeInTheDocument();

    const productPriceLabel = screen.getByText("Product Price");
    expect(productPriceLabel).toBeInTheDocument();

    const productPriceMessage = productPriceLabel.nextSibling;
    expect(productPriceMessage).toHaveTextContent("$ 20.00");
    expect(productPriceMessage).toBeInTheDocument();

    const productQuantityLabel = screen.getByText("Product Quantity");
    expect(productQuantityLabel).toBeInTheDocument();

    const productQuantityMessage = screen.getByText("1");
    expect(productQuantityMessage).toBeInTheDocument();

    const totalPriceLabel = screen.getByText("Total Price");
    expect(totalPriceLabel).toBeInTheDocument();

    const totalPriceMessage = totalPriceLabel.nextSibling;
    expect(totalPriceMessage).toHaveTextContent("$ 20.00");
    expect(totalPriceMessage).toBeInTheDocument();

    const shippingCostLabel = screen.getByText("Shipping Cost");
    expect(shippingCostLabel).toBeInTheDocument();

    const shippingCostMessage = screen.getByText(/10.00/);
    expect(shippingCostMessage).toBeInTheDocument();

    const totalPriceAndShippingCostLabel = screen.getByText(
      "Total Price + Shipping Cost",
    );
    expect(totalPriceAndShippingCostLabel).toBeInTheDocument();

    const totalPriceAndShippingCostMessage = screen.getByText(/30.00/);
    expect(totalPriceAndShippingCostMessage).toBeInTheDocument();
  });
});
