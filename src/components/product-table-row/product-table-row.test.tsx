import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductTableRow from ".";

describe("ProductTableRow", () => {
  test("should render correctly", () => {
    render(
      <table>
        <tbody>
          <ProductTableRow
            number="1"
            imageSrc="/"
            imageAlt="Nice T-shirt"
            price="20.00"
            productId="product id 1"
            productName="Nice T-shirt"
            stock="10"
          />
        </tbody>
      </table>,
    );

    const numberCell = screen.getByText("1");
    expect(numberCell).toBeInTheDocument();

    const imageCell = screen.getByAltText("Nice T-shirt");
    expect(imageCell).toBeInTheDocument();

    const productIdCell = screen.getByText("product id 1");
    expect(productIdCell).toBeInTheDocument();

    const nameCell = screen.getByText("Nice T-shirt");
    expect(nameCell).toBeInTheDocument();

    const priceCell = screen.getByText("$ 20.00");
    expect(priceCell).toBeInTheDocument();

    const stockCell = screen.getByText("10");
    expect(stockCell).toBeInTheDocument();
  });
});
