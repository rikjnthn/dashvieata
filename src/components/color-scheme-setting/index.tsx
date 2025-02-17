import { COLORSCHEME } from "../../constant/setting";
import {
  ColorSchemeType,
  useSetting,
  useSettingDispatch,
} from "../../context/setting-context";
import Dropdown from "../dropdown";

const ColorSchemeSetting = () => {
  const { colorScheme, fontSize } = useSetting();
  const { setColorScheme } = useSettingDispatch();

  return (
    <div className="max-w-100 px-4 py-2.5 dark:text-white">
      <div
        className="mb-2.5 px-4 py-1 font-medium"
        style={{
          fontSize: fontSize.bigger,
        }}
      >
        Color Scheme
      </div>
      <Dropdown
        defaultValue={colorScheme}
        options={COLORSCHEME}
        onOptionClick={(option) => {
          setColorScheme(option as ColorSchemeType);

          if (typeof localStorage === "undefined") return;

          localStorage.setItem("color-scheme", option);

          if (option === "Light") {
            document.documentElement.classList.remove("dark");
          } else {
            document.documentElement.classList.add("dark");
          }
        }}
      />
    </div>
  );
};

export default ColorSchemeSetting;
