import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Layout from "../src/root-layout";
import { BrowserRouter, Route, Routes } from "react-router";

function NavigationMock() {
  return <div>Navigation</div>;
}

vi.mock("../src/components/navigation", () => ({
  default: NavigationMock,
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
