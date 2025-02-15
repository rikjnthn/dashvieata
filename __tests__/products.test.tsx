import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Products from "../src/pages/products";

function ProductTableHead() {
  return (
    <thead>
      <tr>
        <th>Product Table Head</th>
      </tr>
    </thead>
  );
}

function ProductTableBody() {
  return (
    <tbody>
      <tr>
        <td>Product Table Body</td>
      </tr>
    </tbody>
  );
}

vi.mock("../src/components/product-table-head", () => ({
  default: ProductTableHead,
}));
vi.mock("../src/components/product-table-body", () => ({
  default: ProductTableBody,
}));

describe("Products", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<Products />);

    const productTableHead = screen.getByText("Product Table Head");
    expect(productTableHead).toBeInTheDocument();

    const productTableBody = screen.getByText("Product Table Body");
    expect(productTableBody).toBeInTheDocument();
  });
});
