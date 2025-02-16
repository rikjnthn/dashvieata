import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InformationSection from ".";
import { SettingProvider } from "../../context/setting-context";

describe("InformationSection", () => {
  test("should render correctly", () => {
    render(
      <SettingProvider>
        <InformationSection label="Label" message="Message" />
      </SettingProvider>,
    );

    const label = screen.getByText("Label");
    expect(label).toBeInTheDocument();

    const message = screen.getByText("Message");
    expect(message).toBeInTheDocument();
  });
});
