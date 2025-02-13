import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TransactionTableBody from ".";

function TransactionTableRow() {
  return <div>Transaction Table Row</div>;
}

vi.mock("../transaction-table-row", () => ({ default: TransactionTableRow }));

describe("TransactionTableBody", () => {
  test("should render correctly", () => {
    render(<TransactionTableBody />);

    const transactionTableRows = screen.getAllByText("Transaction Table Row");
    transactionTableRows.forEach((transactionTableRow) => {
      expect(transactionTableRow).toBeInTheDocument();
    });
  });
});
