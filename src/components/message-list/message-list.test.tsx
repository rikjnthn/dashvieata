import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import MessageInput from ".";

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
    render(<MessageInput messages={[{ content: "message", sender: true }]} />);

    const message = screen.getByText("message");
    expect(message).toBeInTheDocument();

    const lastDiv = message.parentElement?.lastChild;
    expect(lastDiv).toBeInTheDocument();
  });
});
