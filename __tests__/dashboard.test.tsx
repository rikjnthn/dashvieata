import { afterAll, describe, expect, test, vi } from "vitest";
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

function TimeFrame() {
  return <div>Time Frame</div>;
}

function NotificationOverlay() {
  return <div>Notification Overlay</div>;
}

vi.mock("../src/components/notification-overlay", () => ({
  default: NotificationOverlay,
}));
vi.mock("../src/components/time-frame", () => ({ default: TimeFrame }));
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
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<Dashboard />);

    const timeFrame = screen.getByText("Time Frame");
    expect(timeFrame).toBeInTheDocument();

    const notificationOverlay = screen.getByText("Notification Overlay");
    expect(notificationOverlay).toBeInTheDocument();

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
