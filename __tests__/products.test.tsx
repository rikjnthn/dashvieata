import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Products from "../src/pages/products";

function ProductTableHead() {
  return (
    <thead>
      <tr>
        <th>Product Table Head</th>
      </tr>
    </thead>
  );
}

function ProductTableBody() {
  return (
    <tbody>
      <tr>
        <td>Product Table Body</td>
      </tr>
    </tbody>
  );
}

function PlusIcon() {
  return <div>Plus Icon</div>;
}

function NotificationOverlay() {
  return <div>Notification Overlay</div>;
}

vi.mock("../src/components/notification-overlay", () => ({
  default: NotificationOverlay,
}));
vi.mock("../src/components/plus-icon", () => ({ default: PlusIcon }));
vi.mock("../src/components/product-table-head", () => ({
  default: ProductTableHead,
}));
vi.mock("../src/components/product-table-body", () => ({
  default: ProductTableBody,
}));

describe("Products", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<Products />);

    const plusIcon = screen.getByText("Plus Icon");
    expect(plusIcon).toBeInTheDocument();

    const notificationOverlay = screen.getByText("Notification Overlay");
    expect(notificationOverlay).toBeInTheDocument();

    const productTableHead = screen.getByText("Product Table Head");
    expect(productTableHead).toBeInTheDocument();

    const productTableBody = screen.getByText("Product Table Body");
    expect(productTableBody).toBeInTheDocument();
  });
});
