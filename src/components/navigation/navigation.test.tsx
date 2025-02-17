import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Navigation from ".";
import { SettingProvider } from "../../context/setting-context";

function NavOption() {
  return <div>Nav Option</div>;
}

function CloseIcon() {
  return <div>Close Icon</div>;
}

vi.mock("../nav-option", () => ({
  default: NavOption,
}));
vi.mock("../close-icon", () => ({
  default: CloseIcon,
}));

describe("Navigation", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <Navigation isHamburgerOpen setIsHamburgerOpen={vi.fn()} />
      </SettingProvider>,
    );

    const closeIcon = screen.getByText("Close Icon");
    expect(closeIcon).toBeInTheDocument();

    const navigationContainer =
      screen.getByRole("img").parentElement?.parentElement;
    expect(navigationContainer).toBeInTheDocument();

    const logo = screen.getByAltText("DashVieata");
    expect(logo).toHaveAttribute("title", "DashVieata");
    expect(logo).toBeInTheDocument();

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();

    const navOptions = screen.getAllByText("Nav Option");
    navOptions.forEach((el) => expect(el).toBeInTheDocument());

    const copyright = screen.getByText(/all right reserved/);
    expect(copyright).toBeInTheDocument();

    const bgOverlay = copyright.parentElement?.nextSibling;
    expect(bgOverlay).toBeInTheDocument();
  });

  test("should close nav when user click CloseIcon", async () => {
    const setIsHamburgerOpenMock = vi.fn();

    const { rerender } = render(
      <SettingProvider>
        <Navigation
          isHamburgerOpen={false}
          setIsHamburgerOpen={setIsHamburgerOpenMock}
        />
      </SettingProvider>,
    );

    const closeIcon = screen.getByText("Close Icon");
    const navigationContainer =
      screen.getByRole("img").parentElement?.parentElement;
    const bgOverlay = navigationContainer?.nextSibling;

    expect(navigationContainer).toHaveClass("max-xl:-translate-x-full");
    expect(bgOverlay).toHaveClass("hidden");

    await userEvent.click(closeIcon);

    rerender(
      <SettingProvider>
        <Navigation
          isHamburgerOpen
          setIsHamburgerOpen={setIsHamburgerOpenMock}
        />
      </SettingProvider>,
    );

    expect(navigationContainer).not.toHaveClass("max-xl:-translate-x-full");
    expect(bgOverlay).not.toHaveClass("hidden");
  });

  test("should close nav when user click CloseIcon", async () => {
    const setIsHamburgerOpenMock = vi.fn();

    render(
      <SettingProvider>
        <Navigation
          isHamburgerOpen={false}
          setIsHamburgerOpen={setIsHamburgerOpenMock}
        />
      </SettingProvider>,
    );

    const closeIcon = screen.getByText("Close Icon");

    await userEvent.click(closeIcon);

    expect(setIsHamburgerOpenMock).toHaveBeenCalled();
    expect(setIsHamburgerOpenMock).toHaveBeenCalledWith(false);
  });

  test("should close nav when user click outside of nav", async () => {
    const setIsHamburgerOpenMock = vi.fn();

    render(
      <SettingProvider>
        <Navigation
          isHamburgerOpen={false}
          setIsHamburgerOpen={setIsHamburgerOpenMock}
        />
      </SettingProvider>,
    );

    const bgOverlay = screen.getByText(/all right reserved/).parentElement
      ?.nextSibling as Element;

    await userEvent.click(bgOverlay);

    expect(setIsHamburgerOpenMock).toHaveBeenCalled();
    expect(setIsHamburgerOpenMock).toHaveBeenCalledWith(false);
  });
});
