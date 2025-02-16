import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Product from "../src/pages/product";
import { SettingProvider } from "../src/context/setting-context";

function ProductDetail() {
  return <div>Product Detail</div>;
}

vi.mock("../src/components/product-detail", () => ({
  default: ProductDetail,
}));

describe("Product", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <Product />
      </SettingProvider>,
    );

    const productDetail = screen.getByText("Product Detail");
    expect(productDetail).toBeInTheDocument();

    const img = screen.getByAltText("Nice T-shirt");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/nice-t-shirt.jpg");
  });
});
