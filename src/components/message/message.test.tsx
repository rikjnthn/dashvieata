import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import Message from ".";

describe("Message", () => {
  test("should render correctly with no image and not sender", () => {
    const { container } = render(<Message content="text" sender={false} />);

    const text = screen.getByText("text");
    expect(text).toBeInTheDocument();

    const textContainer = text.parentElement;
    expect(textContainer).toHaveClass("rounded-br-md");

    const img = screen.queryByAltText("image");
    expect(img).not.toBeInTheDocument();

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("flipped left-0");
  });

  test("should render correctly with image and sender", () => {
    const { container } = render(
      <Message content="text" sender image="/image.jpg" />,
    );

    const text = screen.getByText("text");
    expect(text).toBeInTheDocument();

    const textContainer = text.parentElement;
    expect(textContainer).toHaveClass("ml-auto rounded-bl-md");

    const img = screen.queryByAltText("image");
    expect(img).toBeInTheDocument();

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("right-0");
  });

  test("should render correctly with empty text", () => {
    render(<Message content="" sender />);

    const text = screen.queryByText("text");
    expect(text).not.toBeInTheDocument();
  });
});
