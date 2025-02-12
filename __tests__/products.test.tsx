import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Products from "../src/pages/products";

function ProductTableHead() {
  return <div>Product Table Head</div>;
}

function ProductTableBody() {
  return <div>Product Table Body</div>;
}

vi.mock("../src/components/product-table-head", () => ({
  default: ProductTableHead,
}));
vi.mock("../src/components/product-table-body", () => ({
  default: ProductTableBody,
}));

describe("Products", () => {
  test("should render correctly", () => {
    render(<Products />);

    const productTableHead = screen.getByText("Product Table Head");
    expect(productTableHead).toBeInTheDocument();

    const productTableBody = screen.getByText("Product Table Body");
    expect(productTableBody).toBeInTheDocument();
  });
});
