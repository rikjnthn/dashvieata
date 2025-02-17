import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

import Layout from "../src/root-layout";

function Navigation({ isHamburgerOpen }: { isHamburgerOpen: boolean }) {
  return <div data-nav-open={isHamburgerOpen}>Navigation</div>;
}

function Hamburger({ onClick }: { onClick: () => void }) {
  return <div onClick={onClick}>Hamburger</div>;
}

vi.mock("../src/components/navigation", () => ({
  default: Navigation,
}));
vi.mock("../src/components/hamburger", () => ({
  default: Hamburger,
}));

describe("RootLayout", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    const navigation = screen.getByText("Navigation");
    expect(navigation).toBeInTheDocument();

    const hamburgerIcon = screen.getByText("Hamburger");
    expect(hamburgerIcon).toBeInTheDocument();
  });

  test("should open nav when user click hamburger icon", async () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    const navigation = screen.getByText("Navigation");
    const hamburgerIcon = screen.getByText("Hamburger");

    await userEvent.click(hamburgerIcon);

    expect(navigation).toHaveAttribute("data-nav-open", "true");
  });

  test("should render outlet element", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Nested Component</div>} />
          </Route>
        </Routes>
      </BrowserRouter>,
    );

    const Outlet = screen.getByText("Nested Component");
    expect(Outlet).toBeInTheDocument();
  });
});
