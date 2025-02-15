import { afterAll, afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Transactions from ".";

function TransactionTableHead() {
  return (
    <thead>
      <tr>
        <th>Transaction Table Head</th>
      </tr>
    </thead>
  );
}

function TransactionTableBody() {
  return (
    <tbody>
      <tr>
        <td>Transaction Table Body</td>
      </tr>
    </tbody>
  );
}

function GotoIcon() {
  return <div>Goto Icon</div>;
}

vi.mock("../transaction-table-head", () => ({
  default: TransactionTableHead,
}));

vi.mock("../transaction-table-body", () => ({
  default: TransactionTableBody,
}));

vi.mock("../go-to-icon", () => ({
  default: GotoIcon,
}));

describe("Transactions", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    const router = createMemoryRouter([
      { path: "/", element: <Transactions /> },
    ]);

    render(<RouterProvider router={router} />);

    const transactionsContainer =
      screen.getByText("Transactions").parentElement?.parentElement;
    expect(transactionsContainer).toBeInTheDocument();

    const transaction = screen.getByText("Transactions");
    expect(transaction).toBeInTheDocument();

    const gotoIcon = screen.getByText("Goto Icon");
    expect(gotoIcon).toBeInTheDocument();

    const transactionTableHead = screen.getByText("Transaction Table Head");
    expect(transactionTableHead).toBeInTheDocument();

    const transactionTableBody = screen.getByText("Transaction Table Body");
    expect(transactionTableBody).toBeInTheDocument();
  });

  test("should navigate to /transactions", async () => {
    const router = createMemoryRouter([
      { path: "/", element: <Transactions /> },
      { path: "/transactions", element: <></> },
    ]);

    render(<RouterProvider router={router} />);

    const transactionsContainer =
      screen.getByText("Transactions").parentElement?.parentElement;

    await userEvent.click(transactionsContainer!);

    expect(router.state.location.pathname).toEqual("/transactions");
  });
});
