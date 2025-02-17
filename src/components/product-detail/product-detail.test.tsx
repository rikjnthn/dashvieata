import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductDetail from ".";
import { SettingProvider } from "../../context/setting-context";

describe("ProductDetail", () => {
  test("should render correctly", () => {
    render(
      <SettingProvider>
        <ProductDetail />
      </SettingProvider>,
    );

    const productIdLabel = screen.getByText("Product Id");
    expect(productIdLabel).toBeInTheDocument();

    const productIdContent = screen.getByText("uxjyebgrf");
    expect(productIdContent).toBeInTheDocument();

    const productNameLabel = screen.getByText("Product Name");
    expect(productNameLabel).toBeInTheDocument();

    const productNameContent = screen.getByText("Nice T-shirt");
    expect(productNameContent).toBeInTheDocument();

    const productDescriptionLabel = screen.getByText("Product Description");
    expect(productDescriptionLabel).toBeInTheDocument();

    const productDescriptionContent = screen.getByText(/Nice T-shirt./);
    expect(productDescriptionContent).toBeInTheDocument();

    const productPrice = screen.getByText("Product Price");
    expect(productPrice).toBeInTheDocument();

    const productPriceContent = screen.getByText("$ 20.00");
    expect(productPriceContent).toBeInTheDocument();

    const productStockLabel = screen.getByText("Product Stock");
    expect(productStockLabel).toBeInTheDocument();

    const productStocktContent = screen.getByText("10");
    expect(productStocktContent).toBeInTheDocument();
  });
});
