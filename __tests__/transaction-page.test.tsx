import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import TransactionsPage from "../src/pages/transactions-page";

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

function SearchBar() {
  return <div>Search Bar</div>;
}

function SliderOverlay() {
  return <div>Slider Overlay</div>;
}

function NotificationOverlay() {
  return <div>Notification Overlay</div>;
}

vi.mock("../src/components/notification-overlay", () => ({
  default: NotificationOverlay,
}));
vi.mock("../src/components/slider-overlay", () => ({ default: SliderOverlay }));
vi.mock("../src/components/search-bar", () => ({ default: SearchBar }));
vi.mock("../src/components/transaction-table-head", () => ({
  default: TransactionTableHead,
}));

vi.mock("../src/components/transaction-table-body", () => ({
  default: TransactionTableBody,
}));

describe("Transactions Page", () => {
  test("should render correctly", () => {
    render(<TransactionsPage />);

    const searchBar = screen.getByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const sliderOverlay = screen.getByText("Slider Overlay");
    expect(sliderOverlay).toBeInTheDocument();

    const transactionTableHead = screen.getByText("Transaction Table Head");
    expect(transactionTableHead).toBeInTheDocument();

    const transactionTableBody = screen.getByText("Transaction Table Body");
    expect(transactionTableBody).toBeInTheDocument();
  });
});
