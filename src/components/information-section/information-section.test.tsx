import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InformationSection from ".";

describe("InformationSection", () => {
  test("should render correctly", () => {
    render(<InformationSection label="Label" message="Message" />);

    const label = screen.getByText("Label");
    expect(label).toBeInTheDocument();

    const message = screen.getByText("Message");
    expect(message).toBeInTheDocument();
  });
});
