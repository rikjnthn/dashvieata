import { useSetting, useSettingDispatch } from "../../context/setting-context";
import { FONTSIZES } from "../../constant/setting";
import fontSizeCalc from "../../helper/font-size-calc";
import Dropdown from "../dropdown";

const FontSizeSetting = () => {
  const { fontSize } = useSetting();
  const { setFontSize } = useSettingDispatch();

  return (
    <div className="max-w-100 px-4 py-2.5 dark:text-white">
      <div
        className="mb-2.5 px-4 py-1 font-medium"
        style={{
          fontSize: fontSize.bigger,
        }}
      >
        Font Size
      </div>
      <Dropdown
        defaultValue={fontSize.normal}
        options={FONTSIZES}
        onOptionClick={(option) => {
          setFontSize({
            largest: fontSizeCalc(option, 16),
            biggest: fontSizeCalc(option, 4),
            bigger: fontSizeCalc(option, 2),
            normal: option,
            small: fontSizeCalc(option, -2),
          });

          if (typeof localStorage === "undefined") return;

          localStorage.setItem("font-size", option);
        }}
      />
    </div>
  );
};

export default FontSizeSetting;
