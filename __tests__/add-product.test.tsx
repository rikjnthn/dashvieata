import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import AddProduct from "../src/pages/add-product";

function ProductImageInput() {
  return <div>Product Image Input</div>;
}

vi.mock("../src/components/product-image-input", () => ({
  default: ProductImageInput,
}));

describe("AddProduct", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<AddProduct />);

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
});
