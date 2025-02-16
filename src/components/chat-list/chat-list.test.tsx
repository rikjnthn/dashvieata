import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ChatList from ".";
import { SettingProvider } from "../../context/setting-context";

function Chat() {
  return <div>Chat</div>;
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

    const chats = screen.getAllByText("Chat");
    chats.forEach((chat) => expect(chat).toBeInTheDocument());
  });
});
