import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductTableBody from ".";

function ProductTableRow() {
  return <div>Product Table Row</div>;
}

vi.mock("../product-table-row", () => ({ default: ProductTableRow }));

describe("ProductTableBody", () => {
  test("should render correctly", () => {
    render(<ProductTableBody />);

    const productTableRow = screen.getByText("Product Table Row");
    expect(productTableRow).toBeInTheDocument();
  });
});
