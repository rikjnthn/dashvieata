import React, { createContext, useContext, useState } from "react";

import { SetStateType } from "../interface";
import { COLORSCHEME, FONTSIZES } from "../constant/setting";
import fontSizeCalc from "../helper/font-size-calc";

const SettingContext = createContext<SettingContextType | null>(null);
const SettingDispatchContext = createContext<SettingContextDispacthType | null>(
  null,
);

export const useSetting = () => {
  const context = useContext(SettingContext);

  if (!context)
    throw new Error("useSetting must be inside the SettingProvider");

  return context;
};

export const useSettingDispatch = () => {
  const context = useContext(SettingDispatchContext);

  if (!context)
    throw new Error(
      "useSettingDispatch must be used inside the SettingProvider",
    );

  return context;
};

function getDefaultFontSize(): FontSizeType {
  const defaultFontSize = {
    largest: "30px",
    biggest: "18px",
    bigger: "16px",
    normal: "14px",
    small: "12px",
  };

  if (typeof localStorage === "undefined") return defaultFontSize;

  const fontSize = localStorage.getItem("font-size");

  if (!fontSize) return defaultFontSize;
  if (!FONTSIZES.includes(fontSize)) return defaultFontSize;

  return {
    largest: fontSizeCalc(fontSize, 16),
    biggest: fontSizeCalc(fontSize, 4),
    bigger: fontSizeCalc(fontSize, 2),
    normal: fontSize,
    small: fontSizeCalc(fontSize, -2),
  };
}

function getDefaultColorScheme(): ColorSchemeType {
  if (typeof localStorage === "undefined") return "Light";

  const colorScheme = localStorage.getItem("color-scheme");

  if (!colorScheme) return "Light";
  if (!COLORSCHEME.includes(colorScheme)) return "Light";

  return colorScheme as ColorSchemeType;
}

export function SettingProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSizeType>(getDefaultFontSize);
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>(
    getDefaultColorScheme,
  );

  return (
    <SettingDispatchContext value={{ setColorScheme, setFontSize }}>
      <SettingContext value={{ fontSize, colorScheme }}>
        {children}
      </SettingContext>
    </SettingDispatchContext>
  );
}

interface FontSizeType {
  largest: string;
  biggest: string;
  bigger: string;
  normal: string;
  small: string;
}

export type ColorSchemeType = "Dark" | "Light";

interface SettingContextType {
  fontSize: FontSizeType;
  colorScheme: ColorSchemeType;
}

interface SettingContextDispacthType {
  setFontSize: SetStateType<FontSizeType>;
  setColorScheme: SetStateType<ColorSchemeType>;
}
