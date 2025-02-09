import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TransactionIcon from ".";

describe("TransactionIcon", () => {
  test("should render correctly", () => {
    render(<TransactionIcon />);

    const transactionIcon = screen.getByTitle("Transactions");
    expect(transactionIcon).toBeInTheDocument();

    expect(transactionIcon.querySelector("svg")).toHaveAttribute("width", "50");
    expect(transactionIcon.querySelector("svg")).toHaveAttribute(
      "height",
      "50",
    );
  });
});
