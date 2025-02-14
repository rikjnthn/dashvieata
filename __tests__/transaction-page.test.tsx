import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import TransactionsPage from "../src/pages/transactions-page";

function TransactionTableHead() {
  return <div>Transaction Table Head</div>;
}

function TransactionTableBody() {
  return <div>Transaction Table Body</div>;
}

vi.mock("../src/components/transaction-table-head", () => ({
  default: TransactionTableHead,
}));

vi.mock("../src/components/transaction-table-body", () => ({
  default: TransactionTableBody,
}));

describe("Transactions Page", () => {
  test("should render correctly", () => {
    render(<TransactionsPage />);

    const transactionTableHead = screen.getByText("Transaction Table Head");
    expect(transactionTableHead).toBeInTheDocument();

    const transactionTableBody = screen.getByText("Transaction Table Body");
    expect(transactionTableBody).toBeInTheDocument();
  });
});
