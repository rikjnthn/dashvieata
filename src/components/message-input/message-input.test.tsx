import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import MessageInput from ".";

window.URL.createObjectURL = vi.fn();
window.URL.revokeObjectURL = vi.fn();

describe("MessageInput", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(<MessageInput setMessages={vi.fn()} />);

    const text = screen.getByPlaceholderText("Message...");
    expect(text).toBeInTheDocument();

    const imagePreview = screen.getByAltText("Image preview");
    expect(imagePreview).toBeInTheDocument();

    const label = imagePreview.parentElement;
    expect(label).toBeInTheDocument();

    const imagePlaceholder = label?.querySelector("img");
    expect(imagePlaceholder).toBeInTheDocument();

    const imagePlaceholderText = screen.getByText("Add Image");
    expect(imagePlaceholderText).toBeInTheDocument();
    expect(imagePlaceholderText).toHaveClass("hidden");

    const imageInput = label?.nextSibling;
    expect(imageInput).toBeInTheDocument();
    expect(imageInput).toHaveStyle({ display: "none" });

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  test("should send text message", async () => {
    const setMessagesMock = vi.fn();

    render(<MessageInput setMessages={setMessagesMock} />);

    const text = screen.getByPlaceholderText("Message...");
    const submitButton = screen.getByRole("button");

    await userEvent.type(text, "message");
    await userEvent.click(submitButton);

    expect(text).toHaveValue("");

    expect(setMessagesMock).toBeCalled();
  });

  test("should send image message", async () => {
    window.URL.createObjectURL = vi.fn().mockReturnValue("/nice-t-shirt.jpg");

    const setMessagesMock = vi.fn();

    render(<MessageInput setMessages={setMessagesMock} />);

    const submitButton = screen.getByRole("button");
    const imagePreview = screen.getByAltText("Image preview");
    const label = imagePreview.parentElement;
    const imageInput = label?.nextSibling as HTMLElement;

    await userEvent.click(label!);

    expect(label).toHaveClass(
      "absolute -top-4 left-0 h-40 w-full -translate-y-full cursor-pointer border",
    );
    expect(label?.querySelector("div")).toHaveClass("opacity-50");
    expect(screen.getByText("Add Image")).not.toHaveClass("hidden");

    await userEvent.upload(
      imageInput!,
      new File(["/nice-t-shirt.jpg"], "nice-t-shirt", { type: "image/*" }),
    );

    expect(imagePreview).not.toHaveClass("hidden");
    expect(imagePreview).toHaveAttribute("src", "/nice-t-shirt.jpg");

    expect(screen.getByText("Add Image").parentElement).toHaveClass("hidden");

    await userEvent.click(submitButton);

    expect(imagePreview).toHaveClass("hidden");
    expect(imageInput).toHaveValue("");

    expect(setMessagesMock).toBeCalled();
  });
});
