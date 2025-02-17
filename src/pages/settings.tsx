import ColorSchemeSetting from "../components/color-scheme-setting";
import FontSizeSetting from "../components/font-size-setting";
import { useSetting } from "../context/setting-context";

function Settings() {
  const { fontSize } = useSetting();

  return (
    <div className="dark:bg-grey-900 h-full w-full px-4 py-12 select-none">
      <div className="h-full px-2.5 pt-23.75 pb-9">
        <div
          className="font-medium dark:text-white"
          style={{ fontSize: fontSize.biggest, lineHeight: "1.56" }}
        >
          Appearance
        </div>
        <div>
          <FontSizeSetting />
          <ColorSchemeSetting />
        </div>
      </div>
    </div>
  );
}

export default Settings;
