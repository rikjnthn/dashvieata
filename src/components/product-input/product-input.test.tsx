import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductInput from ".";
import { SettingProvider } from "../../context/setting-context";

window.URL.createObjectURL = vi.fn();
window.URL.revokeObjectURL = vi.fn();

describe("ProductInput", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <ProductInput label="label" />
      </SettingProvider>,
    );

    const label = screen.getByText("label");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("label");
    expect(input).toBeInTheDocument();
  });
});
