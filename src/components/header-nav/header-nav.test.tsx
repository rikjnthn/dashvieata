import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeaderNav from ".";
import {
  BrowserRouter,
  createMemoryRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";

function BackIcon() {
  return <div>Back Icon</div>;
}

function SearchBar() {
  return <div>Search Bar</div>;
}

function TimeFrame() {
  return <div>Time Frame</div>;
}

function PlusIcon() {
  return <div>Plus Icon</div>;
}

function SliderIcon() {
  return <div>Slider Icon</div>;
}

function BellIcon() {
  return <div>Bell Icon</div>;
}

vi.mock("../bell-icon", () => ({ default: BellIcon }));
vi.mock("../plus-icon", () => ({ default: PlusIcon }));
vi.mock("../back-icon", () => ({ default: BackIcon }));
vi.mock("../slider-icon", () => ({ default: SliderIcon }));
vi.mock("../time-frame", () => ({ default: TimeFrame }));
vi.mock("../search-bar", () => ({ default: SearchBar }));

describe("HeaderNav", () => {
  test("should render correctly when navigate to '/' path", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderNav />} />
        </Routes>
      </BrowserRouter>,
    );

    const backIcon = screen.queryByText("Back Icon");
    expect(backIcon).not.toBeInTheDocument();

    const searchBar = screen.queryByText("Search Bar");
    expect(searchBar).not.toBeInTheDocument();

    const timeFrame = screen.queryByText("Time Frame");
    expect(timeFrame).toBeInTheDocument();

    const plusIcon = screen.queryByText("Plus Icon");
    expect(plusIcon).not.toBeInTheDocument();

    const sldiderIcon = screen.queryByText("Slider Icon");
    expect(sldiderIcon).not.toBeInTheDocument();

    const bellIcon = screen.queryByText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();
  });

  test("should render correctly when navigate to '/products' path", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/products",
          element: <HeaderNav />,
        },
      ],
      { initialEntries: ["/products"] },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.queryByText("Back Icon");
    expect(backIcon).not.toBeInTheDocument();

    const searchBar = screen.queryByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const timeFrame = screen.queryByText("Time Frame");
    expect(timeFrame).not.toBeInTheDocument();

    const plusIcon = screen.queryByText("Plus Icon");
    expect(plusIcon).toBeInTheDocument();

    const sldiderIcon = screen.queryByText("Slider Icon");
    expect(sldiderIcon).not.toBeInTheDocument();

    const bellIcon = screen.queryByText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();
  });

  test("should render correctly when navigate to '/transactions' path", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/transactions",
          element: <HeaderNav />,
        },
      ],
      { initialEntries: ["/transactions"] },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.queryByText("Back Icon");
    expect(backIcon).not.toBeInTheDocument();

    const searchBar = screen.queryByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const timeFrame = screen.queryByText("Time Frame");
    expect(timeFrame).not.toBeInTheDocument();

    const plusIcon = screen.queryByText("Plus Icon");
    expect(plusIcon).not.toBeInTheDocument();

    const sldiderIcon = screen.queryByText("Slider Icon");
    expect(sldiderIcon).toBeInTheDocument();

    const bellIcon = screen.queryByText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();
  });

  test("should render correctly when navigate to '/messages' path", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/messages",
          element: <HeaderNav />,
        },
      ],
      { initialEntries: ["/messages"] },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.queryByText("Back Icon");
    expect(backIcon).not.toBeInTheDocument();

    const searchBar = screen.queryByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const timeFrame = screen.queryByText("Time Frame");
    expect(timeFrame).not.toBeInTheDocument();

    const plusIcon = screen.queryByText("Plus Icon");
    expect(plusIcon).not.toBeInTheDocument();

    const sldiderIcon = screen.queryByText("Slider Icon");
    expect(sldiderIcon).not.toBeInTheDocument();

    const bellIcon = screen.queryByText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();
  });

  test("should render correctly when navigate to '/settings' path", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/settings",
          element: <HeaderNav />,
        },
      ],
      { initialEntries: ["/settings"] },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.queryByText("Back Icon");
    expect(backIcon).not.toBeInTheDocument();

    const searchBar = screen.queryByText("Search Bar");
    expect(searchBar).not.toBeInTheDocument();

    const timeFrame = screen.queryByText("Time Frame");
    expect(timeFrame).not.toBeInTheDocument();

    const plusIcon = screen.queryByText("Plus Icon");
    expect(plusIcon).not.toBeInTheDocument();

    const sldiderIcon = screen.queryByText("Slider Icon");
    expect(sldiderIcon).not.toBeInTheDocument();

    const bellIcon = screen.queryByText("Bell Icon");
    expect(bellIcon).not.toBeInTheDocument();
  });

  test("should render correctly when navigate to '/add-product' path", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/add-product",
          element: <HeaderNav />,
        },
      ],
      { initialEntries: ["/add-product"] },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.queryByText("Back Icon");
    expect(backIcon).toBeInTheDocument();

    const searchBar = screen.queryByText("Search Bar");
    expect(searchBar).not.toBeInTheDocument();

    const timeFrame = screen.queryByText("Time Frame");
    expect(timeFrame).not.toBeInTheDocument();

    const plusIcon = screen.queryByText("Plus Icon");
    expect(plusIcon).not.toBeInTheDocument();

    const sldiderIcon = screen.queryByText("Slider Icon");
    expect(sldiderIcon).not.toBeInTheDocument();

    const bellIcon = screen.queryByText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();
  });

  test("should render correctly when navigate to '/product/' path", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/product/",
          element: <HeaderNav />,
        },
      ],
      { initialEntries: ["/product/"] },
    );

    render(<RouterProvider router={router} />);

    const backIcon = screen.queryByText("Back Icon");
    expect(backIcon).toBeInTheDocument();

    const searchBar = screen.queryByText("Search Bar");
    expect(searchBar).not.toBeInTheDocument();

    const timeFrame = screen.queryByText("Time Frame");
    expect(timeFrame).not.toBeInTheDocument();

    const plusIcon = screen.queryByText("Plus Icon");
    expect(plusIcon).not.toBeInTheDocument();

    const sldiderIcon = screen.queryByText("Slider Icon");
    expect(sldiderIcon).not.toBeInTheDocument();

    const bellIcon = screen.queryByText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();
  });
});
