import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TransactionTableBody from ".";

function TransactionTableRow() {
  return (
    <tr>
      <td>Transaction Table Row</td>
    </tr>
  );
}

vi.mock("../transaction-table-row", () => ({ default: TransactionTableRow }));

describe("TransactionTableBody", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <table>
        <TransactionTableBody />
      </table>,
    );

    const transactionTableRows = screen.getAllByText("Transaction Table Row");
    transactionTableRows.forEach((transactionTableRow) => {
      expect(transactionTableRow).toBeInTheDocument();
    });
  });
});
