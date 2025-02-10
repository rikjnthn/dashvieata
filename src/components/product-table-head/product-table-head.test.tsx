import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductTableHead from ".";

describe("ProductTableHead", () => {
  test("should render correctly", () => {
    render(<ProductTableHead />);

    const numberCol = screen.getByText("No.");
    expect(numberCol).toBeInTheDocument();

    const imageCol = screen.getByText("Image");
    expect(imageCol).toBeInTheDocument();

    const productIdCol = screen.getByText("Product Id");
    expect(productIdCol).toBeInTheDocument();

    const nameCol = screen.getByText("Name");
    expect(nameCol).toBeInTheDocument();

    const priceCol = screen.getByText("Price");
    expect(priceCol).toBeInTheDocument();

    const stockCol = screen.getByText("Stock");
    expect(stockCol).toBeInTheDocument();
  });
});
