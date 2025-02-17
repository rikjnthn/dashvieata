import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import MessageInput from ".";
import { SettingProvider } from "../../context/setting-context";

function MessageList({ content }: { content: string }) {
  return <div>{content}</div>;
}

vi.mock("../message", () => ({ default: MessageList }));

window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe("MessageInput", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("should render correctly", () => {
    render(
      <SettingProvider>
        <MessageInput messages={[{ content: "message", sender: true }]} />
      </SettingProvider>,
    );

    const message = screen.getByText("message");
    expect(message).toBeInTheDocument();

    const lastDiv = message.parentElement?.lastChild;
    expect(lastDiv).toBeInTheDocument();
  });
});
