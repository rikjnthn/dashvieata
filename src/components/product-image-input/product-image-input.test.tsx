import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ProductImageInput from ".";

window.URL.createObjectURL = vi.fn();
window.URL.revokeObjectURL = vi.fn();

describe("ProductImageInput", () => {
  test("should render correctly", () => {
    const { container } = render(<ProductImageInput />);

    const label = screen.getByText("Add image");
    expect(label).toBeInTheDocument();

    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();

    const img = screen.getByAltText("Product image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass("hidden");
  });

  test("should add image preview when user upload image", async () => {
    render(<ProductImageInput />);

    const img = screen.getByAltText("Product image");
    expect(img).toHaveClass("hidden");

    const input = img.nextSibling as HTMLElement;

    await userEvent.upload(
      input,
      new File(["/nice-t-shirt.jpg"], "nice-t-shirt", { type: "image/jpg" }),
    );

    expect(img).not.toHaveClass("hidden");
  });
});
