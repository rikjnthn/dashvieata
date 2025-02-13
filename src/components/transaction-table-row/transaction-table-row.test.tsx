import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductTableRow from ".";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";

describe("ProductTableRow", () => {
  test("should render correctly", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: (
          <ProductTableRow
            no="1"
            id="id"
            buyerName="buyer name"
            productName="product name"
            quantity="10"
            status="Arrived"
            totalPrice="210.00"
          />
        ),
      },
    ]);

    render(<RouterProvider router={router} />);

    const numberCell = screen.getByText("1");
    expect(numberCell).toBeInTheDocument();

    const transactionIdCell = screen.getByText("id");
    expect(transactionIdCell).toBeInTheDocument();

    const buyerNameCell = screen.getByText("buyer name");
    expect(buyerNameCell).toBeInTheDocument();

    const productNameCell = screen.getByText("product name");
    expect(productNameCell).toBeInTheDocument();

    const quantityCell = screen.getByText("10");
    expect(quantityCell).toBeInTheDocument();

    const statusCell = screen.getByText("Arrived");
    expect(statusCell).toBeInTheDocument();

    const totalPriceCell = screen.getByText(/210/);
    expect(totalPriceCell).toBeInTheDocument();
  });

  test("should navigate to /transaction/:id", async () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: (
          <ProductTableRow
            no="1"
            id="id"
            buyerName="buyer name"
            productName="product name"
            quantity="10"
            status="Arrived"
            totalPrice="210.00"
          />
        ),
      },
      { path: "/", element: <div></div> },
    ]);

    render(<RouterProvider router={router} />);

    const numberCell = screen.getByText("1").parentElement;

    await userEvent.click(numberCell!);

    expect(router.state.location.pathname).toEqual("/transaction/id");
  });
});
