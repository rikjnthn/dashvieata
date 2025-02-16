import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductTableBody from ".";
import { SettingProvider } from "../../context/setting-context";

function ProductTableRow() {
  return (
    <tr>
      <td>Product Table Row</td>
    </tr>
  );
}

vi.mock("../product-table-row", () => ({ default: ProductTableRow }));

describe("ProductTableBody", () => {
  afterAll(() => {
    vi.restoreAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <table>
          <ProductTableBody />
        </table>
      </SettingProvider>,
    );

    const productTableRow = screen.getByText("Product Table Row");
    expect(productTableRow).toBeInTheDocument();
  });
});
