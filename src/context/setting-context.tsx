import React, { createContext, useContext, useState } from "react";
import { SetStateType } from "../interface";
import { COLORSCHEME, FONTSIZES } from "../constant/setting";

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

function getDefaultFontSize(): string {
  if (typeof localStorage === "undefined") return "14px";

  const fontSize = localStorage.getItem("font-size");

  if (!fontSize) return "14px";
  if (!FONTSIZES.includes(fontSize)) return "14px";

  return fontSize;
}

function getDefaultColorScheme(): string {
  if (typeof localStorage === "undefined") return "light";

  const colorScheme = localStorage.getItem("color-scheme");

  if (!colorScheme) return "light";
  if (!COLORSCHEME.includes(colorScheme)) return "light";

  return colorScheme;
}

export function SettingProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(getDefaultFontSize);
  const [colorScheme, setColorScheme] = useState(getDefaultColorScheme);

  return (
    <SettingDispatchContext value={{ setColorScheme, setFontSize }}>
      <SettingContext value={{ fontSize, colorScheme }}>
        {children}
      </SettingContext>
    </SettingDispatchContext>
  );
}

interface SettingContextType {
  fontSize: string;
  colorScheme: string;
}

interface SettingContextDispacthType {
  setFontSize: SetStateType<string>;
  setColorScheme: SetStateType<string>;
}
