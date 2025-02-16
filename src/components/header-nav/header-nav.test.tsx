import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeaderNav from ".";

describe("HeaderNav", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <HeaderNav>
        <div>Child Component</div>
      </HeaderNav>,
    );

    const childElement = screen.getByText("Child Component");
    expect(childElement).toBeInTheDocument();

    const headerNav = childElement.parentElement;
    expect(headerNav).toBeInTheDocument();
  });
});
