import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router";
import "@testing-library/jest-dom";

import NavOption from ".";

describe("NavOption", () => {
  test("should render correctly", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<NavOption icon={<div>Icon</div>} label="Link" to={"/"} />}
          ></Route>
        </Routes>
      </BrowserRouter>,
    );

    const navLink = screen.getByRole("link");
    expect(navLink).toBeInTheDocument();

    const icon = screen.getByText("Icon");
    expect(icon).toBeInTheDocument();

    const label = screen.getByText("Link");
    expect(label).toBeInTheDocument();
  });

  test("should include right class when active or inactive", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<NavOption icon={<div>Icon</div>} label="Link" to={"/"} />}
          />
        </Routes>
      </BrowserRouter>,
    );

    const navLink = screen.getByRole("link");
    expect(navLink).toHaveClass("stroke-black text-black");
  });

  test("should include right class when inactive", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NavOption
                icon={<div>Icon</div>}
                label="Link"
                to={"/different-path"}
              />
            }
          />
        </Routes>
      </BrowserRouter>,
    );

    const navLink = screen.getByRole("link");
    expect(navLink).toHaveClass("text-grey-300 stroke-grey-300");
  });
});
