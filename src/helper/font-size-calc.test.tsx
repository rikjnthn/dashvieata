import { describe, expect, test } from "vitest";
import fontSizeCalc from "./font-size-calc";

describe("fontSizeCalc", () => {
  test("should return added font size string in pixel unit", () => {
    expect(fontSizeCalc("16px", 2)).toEqual("18px");
  });

  test("should return subtracted font size string in pixel unit", () => {
    expect(fontSizeCalc("16px", -2)).toEqual("14px");
  });

  test("should return lower bound subtracted font size string in pixel unit", () => {
    expect(fontSizeCalc("10px", -2)).toEqual("12px");
  });

  test("should return upper bound added font size string in pixel unit", () => {
    expect(fontSizeCalc("24px", 2)).toEqual("24px");
  });
});
