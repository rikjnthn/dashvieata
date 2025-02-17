import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductTableBody from ".";
import { SettingProvider } from "../../context/setting-context";

function ProductTableRow({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  return (
    <tr>
      <td>{productId}</td>
      <td>{productName}</td>
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
          <ProductTableBody search="" />
        </table>
      </SettingProvider>,
    );

    const productId = screen.getByText("uxjyebgrf");
    expect(productId).toBeInTheDocument();

    const productName = screen.getByText("Nice T-shirt");
    expect(productName).toBeInTheDocument();
  });

  test("should render search products only", () => {
    render(
      <SettingProvider>
        <table>
          <ProductTableBody search="Nice T-shirt" />
        </table>
      </SettingProvider>,
    );

    const productsName = screen.getAllByText(/Nice T-shirt/);
    productsName.forEach((el) => expect(el).toBeInTheDocument());
  });

  test("should render empty table if search product not found", () => {
    const { container } = render(
      <SettingProvider>
        <table>
          <ProductTableBody search="Not-found" />
        </table>
      </SettingProvider>,
    );

    const products = container.querySelector("tbody")?.childNodes;
    expect(products).toHaveLength(0);
  });
});
