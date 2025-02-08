import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ChatIcon from ".";

describe("ChatIcon", () => {
  test("should render correctly", () => {
    render(<ChatIcon />);

    const chatIcon = screen.getByTitle("Messages");
    expect(chatIcon).toBeInTheDocument();

    expect(chatIcon.querySelector("svg")).toHaveAttribute("width", "50");
    expect(chatIcon.querySelector("svg")).toHaveAttribute("height", "50");
  });
});
