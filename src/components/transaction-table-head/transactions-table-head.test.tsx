import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TransactionsTableHead from ".";

describe("TransactionsTableHead", () => {
  test("should render correctly", () => {
    render(<TransactionsTableHead />);

    const numberCol = screen.getByText("No.");
    expect(numberCol).toBeInTheDocument();

    const transactionId = screen.getByText("Transaction Id");
    expect(transactionId).toBeInTheDocument();

    const buyerName = screen.getByText("Buyer Name");
    expect(buyerName).toBeInTheDocument();

    const productName = screen.getByText("Product Name");
    expect(productName).toBeInTheDocument();

    const quantity = screen.getByText("Quantity");
    expect(quantity).toBeInTheDocument();

    const totalPrice = screen.getByText("Total Price");
    expect(totalPrice).toBeInTheDocument();

    const status = screen.getByText("Status");
    expect(status).toBeInTheDocument();
  });
});
