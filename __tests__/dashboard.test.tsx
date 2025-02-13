import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Dashboard from "../src/pages/dashboard";

function Overview() {
  return <div>Overview</div>;
}

function Graph() {
  return <div>Graph</div>;
}

function MessageOverview() {
  return <div>Message Overview</div>;
}

function Transactions() {
  return <div>Transactions</div>;
}

vi.mock("../src/components/overview", () => ({
  default: Overview,
}));

vi.mock("../src/components/graph", () => ({
  default: Graph,
}));

vi.mock("../src/components/message-overview", () => ({
  default: MessageOverview,
}));

vi.mock("../src/components/transactions", () => ({ default: Transactions }));

describe("Dashboard", () => {
  test("should render correctly", () => {
    render(<Dashboard />);

    const overviews = screen.getAllByText("Overview");
    overviews.forEach((overview) => expect(overview).toBeInTheDocument());

    const graph = screen.getByText("Graph");
    expect(graph).toBeInTheDocument();

    const messageOverview = screen.getByText("Message Overview");
    expect(messageOverview).toBeInTheDocument();

    const transactions = screen.getByText("Transactions");
    expect(transactions).toBeInTheDocument();
  });
});
