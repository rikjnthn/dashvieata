import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TransactionTableBody from ".";
import { SettingProvider } from "../../context/setting-context";
import { TransactionStatusType } from "../../interface";
import { transactions } from "../../data/transactions";

function TransactionTableRow({
  buyerName,
  id,
  productName,
  status,
}: {
  id: string;
  buyerName: string;
  productName: string;
  status: TransactionStatusType;
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{buyerName}</td>
      <td>{productName}</td>
      <td>{status}</td>
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
      <SettingProvider>
        <table>
          <TransactionTableBody status="All" />
        </table>
      </SettingProvider>,
    );

    const transactionTableRows = screen
      .getByRole("table")
      .querySelectorAll("tr");

    transactionTableRows.forEach((transactionTableRow, idx) => {
      expect(transactionTableRow).toBeInTheDocument();

      expect(screen.getByText(transactions[idx].id)).toBeInTheDocument();
      expect(screen.getByText(transactions[idx].buyerName)).toBeInTheDocument();
      expect(screen.getByText(transactions[idx].status)).toBeInTheDocument();
      expect(
        screen.getAllByText(transactions[idx].productName)[idx],
      ).toBeInTheDocument();
    });
  });

  test("should render transactions with status Payment only", () => {
    render(
      <SettingProvider>
        <table>
          <TransactionTableBody status="Payment" />
        </table>
      </SettingProvider>,
    );

    const statusCells = screen.getAllByText("Payment");
    statusCells.forEach((el) => expect(el).toBeInTheDocument());
  });

  test("should render transactions that contain search keyword only", () => {
    render(
      <SettingProvider>
        <table>
          <TransactionTableBody status="All" search="Amanda" />
        </table>
      </SettingProvider>,
    );

    const transactionTableRows = screen
      .getByRole("table")
      .querySelectorAll("tr");

    transactionTableRows.forEach((row) => {
      expect(row).toBeInTheDocument();
      expect(row.childNodes[1].textContent?.startsWith("Amanda")).toBeTruthy();
    });
  });
});
