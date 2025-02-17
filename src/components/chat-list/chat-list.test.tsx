import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ChatList from ".";
import { SettingProvider } from "../../context/setting-context";

function Chat({ name }: { name: string }) {
  return <div>{name}</div>;
}

vi.mock("../chat", () => ({ default: Chat }));

describe("ChatList", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <ChatList />
      </SettingProvider>,
    );

    const amandaContact = screen.getByText("Amanda");
    expect(amandaContact).toBeInTheDocument();

    const jessicaContact = screen.getByText("Jessica");
    expect(jessicaContact).toBeInTheDocument();
  });

  test("should search Amanda and should render contact that its name start with Amanda only", () => {
    const { container } = render(
      <SettingProvider>
        <ChatList search="Amanda" />
      </SettingProvider>,
    );

    const contacts = container.querySelector("div")?.childNodes;
    contacts?.forEach((contact) =>
      expect(
        contact.textContent?.toLowerCase()?.startsWith("amanda"),
      ).toBeTruthy(),
    );
  });

  test("should return empty if no contact found", () => {
    const { container } = render(
      <SettingProvider>
        <ChatList search="not_found" />
      </SettingProvider>,
    );

    const contacts = container.querySelector("div")?.childNodes;
    expect(contacts).toHaveLength(0);
  });
});
