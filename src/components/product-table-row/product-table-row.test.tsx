import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import "@testing-library/jest-dom";

import ProductTableRow from ".";

describe("ProductTableRow", () => {
  test("should render correctly", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/products",
          element: (
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
            </table>
          ),
        },
      ],
      { initialEntries: ["/products"] },
    );

    render(<RouterProvider router={router} />);

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

  test("should navigate to product detail page when click the row", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/products",
          element: (
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
            </table>
          ),
        },
        {
          path: "/product/:productId",
          element: <div></div>,
        },
      ],
      { initialEntries: ["/products"] },
    );

    render(<RouterProvider router={router} />);

    const row = screen.getByText("1").parentElement;

    await userEvent.click(row!);

    expect(router.state.location.pathname).toEqual("/product/product id 1");
  });
});
